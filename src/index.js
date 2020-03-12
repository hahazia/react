import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Api from './component/api';
import * as serviceWorker from './serviceWorker';
import Details from "./component/details";
import Gallery from "./component/gallery";
import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
