import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import "./styles/styles.css"
import "./styles/footer.css"
import "./styles/races.css"
import "./styles/sidebar.css"
import './styles/classes.css'

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>,
 document.getElementById('root'));
