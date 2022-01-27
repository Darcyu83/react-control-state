export const GET_MOVIES = "movies/GET_MOVIES";
export const GET_MOVIES_SUCCESS = "movies/GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "movies/GET_MOVIES_ERROR";

export const getMovies = () => ({ type: GET_MOVIES });
export const getMoviesSuccess = (payload: any) => ({
  type: GET_MOVIES_SUCCESS,
  payload,
});
export const getMoviesError = (payload: any) => ({
  type: GET_MOVIES_ERROR,
  payload,
});

export const GET_MOVIE = "movies/GET_MOVIE";
export const GET_MOVIE_SUCCESS = "movies/GET_MOVIE_SUCCESS";
export const GET_MOVIE_ERROR = "movies/GET_MOVIE_ERROR";

export const getMovie = (payload: number) => ({ type: GET_MOVIE, payload });
export const getMovieSuccess = (payload: any) => ({
  type: GET_MOVIE_SUCCESS,
  payload,
});
export const getMovieError = (payload: any) => ({
  type: GET_MOVIE_ERROR,
  payload,
});
