import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import * as serviceWorker from "./serviceWorker";
import { Upload } from "./Pages/UploadPage/Upload";

//should render homepage but this skips the login
ReactDOM.render(
  <div>
    <React.StrictMode>
      <Router>
        <HomePage />
      </Router>
    </React.StrictMode>
  </div>,
  document.getElementById("wrapper")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
