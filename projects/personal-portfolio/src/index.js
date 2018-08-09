import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom"
import "./stylesheets/main.css";
import "./stylesheets/footer.css";
import "./stylesheets/content.css";
import './stylesheets/projects.css';


ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));
