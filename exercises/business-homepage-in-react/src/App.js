import React from "react";
// import ReactDOM from "react-dom"; This is currently not being used, no reason to have it. 
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

function App(){
    return (
    <div className="mainWrapper">
        <Header />
        <Content />
        <Footer />
    </div>
    )
}

export default App;