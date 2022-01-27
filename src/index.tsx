import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ContextSampleProvider } from "./modules/contextSample";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, Thunk, logger)
);

sagaMiddleware.run(rootSaga);
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
