import React from "react";
import { getMoviesAPI } from "../api/movies";

function MoviesContainer() {
  console.log("MoviesContainer");
  getMoviesAPI();
  return (
    <div>
      <h1>MoviesContainer</h1>
    </div>
  );
}
export default MoviesContainer;
