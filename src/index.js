import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";
import { Suspense } from "react";
import './i18next';
ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<div>Loading ...</div>}>
        <App />
      </Suspense>
    </Web3ReactProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
