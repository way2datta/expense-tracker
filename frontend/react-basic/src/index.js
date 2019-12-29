import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

window.APIUrl = "https://my-expense-tracker-api.herokuapp.com/api";
// window.APIUrl = "http://localhost:3000/api";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
