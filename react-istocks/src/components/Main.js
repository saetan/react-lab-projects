import React from "react";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"
function Main() {
  const [chosenStock, setChosenStock] = useState({});
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/stocks">
          <Dashboard setChosenStock={setChosenStock} />
        </Route>
        <Route path="/stock/:symbol"><Stock chosenStock={chosenStock} /></Route>
        <Redirect to="/" />
      </Switch>
    </main>
  )
}

export default Main
