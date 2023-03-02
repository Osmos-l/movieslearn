import useAxios from '../axios';

export const makeGetRequest = async (endpoint, params) => {
  try {
    if (!params.language) {
      params.language = "fr-FR";
    }

    const response = await useAxios.get(endpoint, {params});
    return response.data;
  } catch (error) {
    console.error('An error occurred during the axios request');
    console.error(error);
    return [];
  }
};
