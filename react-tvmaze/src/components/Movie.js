import React, { useEffect, useState, useContext } from "react"
import movieData from "./context";
import { Link, useHistory } from "react-router-dom"


export default function Movie(props) {
    const [chosenMovie, setChosenMovie] = useContext(movieData);
    const history = useHistory();
    return (
        <div>
            <img src={chosenMovie.show.image === null ? "https://t4.ftcdn.net/jpg/03/10/99/43/360_F_310994319_2UDbmr1UT6oncu4Mid7Ezmp5Mz1qvEso.jpg" : chosenMovie.show.image.medium} alt="No Image" />
            <h3>{chosenMovie.show.name}</h3>
            <h3>Score: {(chosenMovie.score).toFixed(2)}</h3>
            <p dangerouslySetInnerHTML={{ __html: chosenMovie.show.summary }}></p>
            <button onClick={() => {
                history.push("/");
            }}>Back to Home</button>
        </div>
    )
}