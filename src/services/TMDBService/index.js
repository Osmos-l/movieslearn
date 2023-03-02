import {makeGetRequest} from '../ApiService';

export const IMAGE_URI = "https://image.tmdb.org/t/p/original//"

export const getPopularMoviesByPage = async page => {
  const response = await makeGetRequest('movie/popular', {page});
  if (response.results) {
    return response.results;
  }
  // An error occurred
  return [];
};

export const searchMoviesByNameAndPage = async (name, page) => {
  name = name.replace(' ', '+');
  page = Number.isInteger(page) ? page : 1;

  const params = {
    query: name,
    page
  };

  const response = await makeGetRequest('search/movie', params);
  if (response.results) {
    return response.results;
  }

  // An error occurred
  return [];
}
