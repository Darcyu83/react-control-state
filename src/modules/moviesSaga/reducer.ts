import {
  GET_MOVIE,
  GET_MOVIES,
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_SUCCESS,
} from "./actions";
import { TMoviesAllAction } from "./types";

const initialState = {};

function reducer(state = initialState, action: TMoviesAllAction) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state };
    case GET_MOVIES_SUCCESS:
      return { ...state };
    case GET_MOVIES_ERROR:
      return { ...state };
    case GET_MOVIE:
      return { ...state };
    case GET_MOVIE_SUCCESS:
      return { ...state };
    case GET_MOVIE_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
