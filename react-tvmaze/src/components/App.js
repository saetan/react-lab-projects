import React, { useState, useContext } from 'react';
import Home from "./Home"
import { Route, Redirect, Switch } from "react-router-dom"
import movieData from './context';
import Movie from "./Movie"

function App() {

    const [chosenMovie, setChosenMovie] = useState([]);
    return (
        <>
            <movieData.Provider value={[chosenMovie, setChosenMovie]}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movie/:movieName">
                        <Movie />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </movieData.Provider>
        </>
    );
}

export default App;