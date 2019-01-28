
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
ReactDOM.render(
    //what to render
    <Router>
    <App/>
    </Router>,
    //where to render
    document.getElementById("app"));
    
