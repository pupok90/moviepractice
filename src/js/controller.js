import { discoverMovie, searchMovie } from "./model.js";
import searchView from "./Views/searchView.js";
import MovieDiscoverView from "./Views/movieDiscoverView.js";
import { state } from "./model.js";
const controlMoviesDiscover = async function () {
  try {
    MovieDiscoverView.loading();
    const res = await discoverMovie();
    MovieDiscoverView.renderCarousel(res);
  } catch (error) {}
};

const controlMovieSearch = async function () {
  try {
    MovieDiscoverView.loading();
    const res = await discoverMovie();
    MovieDiscoverView.renderCarousel(res);
  } catch (error) {}
};

const controlSearch = async function (search) {
  if (!search) return;
  const searchMovies = await searchMovie(search);
  console.log(searchMovies);
  if (searchMovies === undefined || searchMovies.length === 0) return;
  MovieDiscoverView.loading();
  const res = await discoverMovie();
  MovieDiscoverView.renderCarousel(searchMovies);
};
controlMoviesDiscover();

searchView.handler(controlSearch);
