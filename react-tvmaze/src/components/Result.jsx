import React, { useEffect, useState, useContext } from "react"
import { render } from "react-dom";
import movieData from "./context";
import { Link } from "react-router-dom"


export default function Result(props) {

    const [chosenMovie, setChosenMovie] = useContext(movieData);
    const [searchedResults, setSearchedResults] = useState([]);

    const styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "5px",
    }

    useEffect(() => {
        async function fetchedData() {
            try {
                let respond = await fetch(`https://api.tvmaze.com/search/shows?q=${props.searchedTitle}`);
                let data = await respond.json();
                setSearchedResults(data);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchedData();

    }, [props.searchedTitle])
    const handleClick = () => {
        props.setHasSearched(false);
    }

    const renderResult = searchedResults.map((data, index) => {
        console.log(data);
        return <div className={"moviePoster"} key={index}><Link to={"/movie/" + data.show.name} onClick={
            () => { setChosenMovie(data) }
        } >
            <h3 style={{ textAlign: "center" }}>{data.show.name}</h3>
            <img src={data.show.image === null ? "https://t4.ftcdn.net/jpg/03/10/99/43/360_F_310994319_2UDbmr1UT6oncu4Mid7Ezmp5Mz1qvEso.jpg" : data.show.image.medium} alt="No Image" />
        </Link></div >
        // }
    })

    return (
        <>
            <h1>This is result Page {props.searchedTitle}</h1>
            <button onClick={handleClick}>Search Again !</button>
            <div className={"movies"} style={styles}>
                {renderResult === [] ? "Loading" : renderResult}
            </div>
        </>
    )
}