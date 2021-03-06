import useAxios from '../axios';

export const makeGetRequest = async (endpoint, params) => {
  try {
    const response = await useAxios.get(endpoint, {params});
    return response.data;
  } catch (error) {
    console.error('An error occurred during the axios request');
    return [];
  }
};
