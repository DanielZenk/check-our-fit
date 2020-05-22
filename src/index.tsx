import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage";
//import { Main } from "./Pages/MainPage/Main";
import * as serviceWorker from "./serviceWorker";

//should render homepage but this skips the login
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Page loadings</h1>}>
      <HomePage />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
