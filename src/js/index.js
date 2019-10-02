//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./component/Page.js";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
ReactDOM.render(<Page />, document.querySelector("#app"));
