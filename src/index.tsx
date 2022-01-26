import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ContextSampleProvider } from "./modules/contextSample";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/index";
import logger from "redux-logger";
import Thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(Thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextSampleProvider>
        <App />
      </ContextSampleProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
