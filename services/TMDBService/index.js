import {makeGetRequest} from '../ApiService';

export const getMoviesByPage = async page => {
  const response = await makeGetRequest('movie/popular', {page});
  if (response.results) {
    return response.results;
  }
  // An error occurred
  return [];
};

// https://image.tmdb.org/t/p/original//qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg
export const getImageByMovie = async movie => {
  //const response = await makeGetRequest()
  return null;
};
