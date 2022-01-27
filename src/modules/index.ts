import { combineReducers } from "redux";
import reduxCounterReducer from "./reduxCounter";
import todoReducer from "./todos";
import githubReducer from "./githubThunk";
import githubSagaReducer from "./githubSaga";
import { all } from "redux-saga/effects";
import { githubSaga } from "./githubSaga/saga";

const rootReducer = combineReducers({
  counter: reduxCounterReducer,
  todos: todoReducer,
  github: githubReducer,
  githubSaga: githubSagaReducer,
});

export default rootReducer;

export type TRootReducer = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([githubSaga()]);
}
