import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux'
import { Provider } from 'react-redux'
import "./styles/styles.css"
import "./styles/footer.css"
import "./styles/content.css"
import "./styles/sidebar.css"

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
