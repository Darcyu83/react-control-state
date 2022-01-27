import {
  getMovie,
  getMovieError,
  getMovies,
  getMoviesError,
  getMoviesSuccess,
  getMovieSuccess,
} from "./actions";
export type TMoviesActions =
  | ReturnType<typeof getMovies>
  | ReturnType<typeof getMoviesSuccess>
  | ReturnType<typeof getMoviesError>;
export type TMovieActions =
  | ReturnType<typeof getMovie>
  | ReturnType<typeof getMovieSuccess>
  | ReturnType<typeof getMovieError>;

export type TMoviesAllAction = TMoviesActions & TMovieActions;
