import { API_KEY } from "./config.js";
import MovieDiscoverView from "./Views/movieDiscoverView.js";

export const state = {
  movieDiscover: [],
  movieSearch: [],
};
/*
id
original_title
overview  (description)
popularity
release_date
poster_path
*/

const createMovieObject = function (data) {
  console.log(data);
  const img = data.poster_path
    ? `https://image.tmdb.org/t/p/original${data.poster_path}`
    : "/src/img/null.jpg";
  console.log(img);
  return {
    id: data.id,
    title: data.original_title,
    description: data.overview,
    popularity: data.popularity,
    release: data.release_date,
    img: img,
  };
};

export async function discoverMovie() {
  state.movieSearch = [];
  const movies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );

  const moviesJson = await movies.json();
  moviesJson.results.forEach((movie) => {
    state.movieDiscover.push(createMovieObject(movie));
  });
  return state.movieDiscover;
}

export async function searchMovie(keyword) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
  );

  const moviesJson = await movies.json();
  moviesJson.results.forEach((movie) => {
    state.movieSearch.push(createMovieObject(movie));
  });
  return state.movieSearch;
}
