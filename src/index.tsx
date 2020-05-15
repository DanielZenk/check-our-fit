import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import HomePage from './HomePage';
import { Main } from "./Pages/MainPage/Main";
import * as serviceWorker from "./serviceWorker";

//should render homepage but this skips the login
ReactDOM.render(
  <React.StrictMode>
    <Main user="daniel" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
