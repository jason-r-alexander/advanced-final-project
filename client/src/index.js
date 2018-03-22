import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);

/*
const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, 
    {...settings,
      headers: {...settings.headers, authorization: localStorage.getItem("token")}
    }
    );
};
*/
