import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { HashRouter as Router } from "react-router-dom"

ReactDOM.render(
    <Router><App /></Router>, document.getElementById("root"));