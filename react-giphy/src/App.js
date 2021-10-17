import React, { useState, useEffect } from "react";
import "./styles.css";


export default function App() {
  const placeHolderUrl = "https://media1.giphy.com/media/5YhM7FikN75SXkbInU/giphy.gif?cid=348326f198jcea4lqqstuy8yff02lgokljwrfz9oqo21mxqv&rid=giphy.gif&ct=g";
  const [gifName, setGifName] = useState();
  const [gifUrl, setGifUrl] = useState(placeHolderUrl);
  const [tagName, setTagName] = useState();
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);


  useEffect(() => {
    getRandomGif();
  }, []);

  const generatedFavouriteList = favouriteList.map((record, index) => {
    return <li key={index}>
      {`${record.name}  `} <button onClick={() => { setGifUrl(record.url) }}>Show This</button>
      <button onClick={
        () => {
          handleFavRemoveClick(record, index);
        }
      }>Remove</button>
    </li>
  });

  async function getRandomGif() {

    setInvalidSearch(false);
    const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=VwX5rMlCa8g5UBhAnh1Riqf3JCjh3602&tag=&rating=g'); //fetch random
    const data = await res.json();
    console.log(data.data);
    setGifName(data.data.user.display_name);
    setGifUrl(data.data.image_url);

  }

  async function getTagGif(tagName) {
    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=VwX5rMlCa8g5UBhAnh1Riqf3JCjh3602&q=${tagName}&limit=25&offset=0&rating=g&lang=en`); //fetch by tagname
      const data = await res.json();
      console.log(data);
      console.log(data.data[0].images.downsized_medium.url);
      setGifName(data.data[0].title);
      setGifUrl(data.data[0].images.downsized_medium.url);
    }

    catch {
      setInvalidSearch(true);
    }
  }

  const handleNameChange = (event) => {
    setTagName(event.target.value);
  }

  const handleFavRemoveClick = (item, index) => {
    const newFavouriteList = favouriteList.filter((word, nIndex) => {
      console.log(nIndex);
      return index !== nIndex
    });
    setFavouriteList(newFavouriteList)
  }

  const handleAddToFavourite = (event) => {
    setFavouriteList(
      [
        ...favouriteList, {
          name: gifName,
          url: gifUrl
        }
      ]
    )
  }

  const handleSubmit = (event) => {
    setInvalidSearch(false);
    getTagGif(tagName);
  }

  return (
    <div className="App">
      <div className="FavouriteDiv">
        <h1>Favourite List</h1>
        <ul>
          {generatedFavouriteList}
        </ul>
      </div>
      <h1>Giphy</h1>
      <div className="Form">
        <input name="searchByTag" type="text" placeholder="Search Gif by Tag" onChange={handleNameChange} />
        <input type="submit" onClick={handleSubmit} />
      </div>
      {invalidSearch ? <p>Invalid tag try a different one</p> : ""}
      <button onClick={getRandomGif}>Get Random Gif</button>
      <button onClick={handleAddToFavourite}>Add to Favourite List</button>
      <br />
      <img src={gifUrl}></img>
    </div >
  );
}
