import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ5ZTlhMzcwYWM2OTVmZDE2NDk1Yjk4YmNmMzE3ZCIsInN1YiI6IjY0ZjBlYjJlNzdkMjNiMDE1MDM5MWM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0NVANqreTUD07Xhygz0ja3H_7YAhHFACxA_SKBKM33Q';

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day`);
  return response.data;
};

export const fetchDetails = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const fetchSearch = async search => {
  const response = await axios.get(
    `/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
  );
  return response.data;
};

export const fetchCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};
