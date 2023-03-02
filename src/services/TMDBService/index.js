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

export const searchMoviesByName = async name => {
  name = name.replace(' ', '+');

  const params = {
    query: name
  };

  const response = await makeGetRequest('search/movie', params)
  if (response.results) {
    return response.results;
  }
  // An error occurred
  return [];
}
