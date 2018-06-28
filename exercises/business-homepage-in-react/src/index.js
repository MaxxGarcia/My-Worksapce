import React from "react";
// const React = require("react"); Same same ^
import ReactDOM from "react-dom";
// const ReactDOM = require("react");

//import styles
import "./styles/styles.css";
import "./styles/sidebar.css";
import "./styles/content.css";
import "./styles/footer.css";

//Importing App
import App from "./App";


ReactDOM.render(
    <App />,
    document.getElementById("root")
);