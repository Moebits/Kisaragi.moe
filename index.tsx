import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import images from "./structures/Images"

// images.animateFavicon()
ReactDOM.render(<Router><App/></Router>, document.getElementById("app"))