import { combineReducers } from "redux";
import reduxCounterReducer from "./reduxCounter";
import todoReducer from "./todos";
import githubReducer from "./githubThunk";

const rootReducer = combineReducers({
  counter: reduxCounterReducer,
  todos: todoReducer,
  github: githubReducer,
});

export default rootReducer;

export type TRootReducer = ReturnType<typeof rootReducer>;
