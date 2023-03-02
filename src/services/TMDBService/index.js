import {makeGetRequest} from '../ApiService';

export const IMAGE_URI = "https://image.tmdb.org/t/p/original//"

export const getMoviesByPage = async page => {
  const response = await makeGetRequest('movie/popular', {page});
  if (response.results) {
    return response.results;
  }
  // An error occurred
  return [];
};

export const getImageByMovie = async movie => {
  if (!movie) {
    return [];
  }

  const response = await makeGetRequest(`/movie/${movie.id}/images`);
  if (response.results) {
    return response.results;
  }

  // An error occured
  return [];
};
