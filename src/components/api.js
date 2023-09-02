import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const MY_KEY = '2349e9a370ac695fd16495b98bcf317d';

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${MY_KEY}`);
  console.log(response.data);
  return response.data;
};

export const fetchDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${MY_KEY}`);
  console.log(id);
  console.log(response.data);
  return response.data;
};
// fetchDetails();
export const fetchSearch = async search => {
  console.log(search);
  const response = await axios.get(
    `/search/movie?query=${search}&include_adult=false&language=en-US&page=1&api_key=${MY_KEY}`
  );
  console.log(response.data);
  return response.data;
};
// fetchSearch();
// export const deleteQuizById = async quizId => {
//   const response = await axios.delete(`/quizzes/${quizId}`);
//   return response.data;
// };

// export const createQuiz = async quiz => {
//   const response = await axios.post('/quizzes', quiz);
//   return response.data;
// };
