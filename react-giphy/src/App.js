import React, { useState, useEffect } from "react";
import "./styles.css";


export default function App() {
  const placeHolderUrl = "https://media1.giphy.com/media/5YhM7FikN75SXkbInU/giphy.gif?cid=348326f198jcea4lqqstuy8yff02lgokljwrfz9oqo21mxqv&rid=giphy.gif&ct=g";
  const [gifUrl, setGifUrl] = useState(placeHolderUrl);
  const [tagName, setTagName] = useState();

  useEffect(() => {
    getRandomGif();
  }, []);

  async function getRandomGif() {
    const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=VwX5rMlCa8g5UBhAnh1Riqf3JCjh3602&tag=&rating=g'); //fetch random
    const data = await res.json();
    setGifUrl(data.data.image_url);

  }

  async function getTagGif(tagName) {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=VwX5rMlCa8g5UBhAnh1Riqf3JCjh3602&q=${tagName}&limit=25&offset=0&rating=g&lang=en`); //fetch by tagname
    const data = await res.json();
    console.log(data.data[0].images.downsized_medium.url);
    setGifUrl(data.data[0].images.downsized_medium.url);
  }

  const handleNameChange = (event) => {
    setTagName(event.target.value);
  }

  const handleSubmit = (event) => {
    getTagGif(tagName);
  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      <div className="Form">
        <input name="searchByTag" type="text" placeholder="Search Gif by Tag" onChange={handleNameChange} />
        <input type="submit" onClick={handleSubmit} />
      </div>


      <button onClick={getRandomGif}>Get Random Gif</button>
      <br />
      <img src={gifUrl}></img>
    </div >
  );
}
