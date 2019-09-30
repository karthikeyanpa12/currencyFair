import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import { Provider } from 'react-redux';
import './index.css'
import store from './store';

const App = () => {
    return (<Provider store={store}>
        <HomePage />
    </Provider>)
}
ReactDOM.render(<App />, document.getElementById("root"));