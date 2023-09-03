import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'components/api';
import toast from 'react-hot-toast';
const Movies = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const addQuiz = async search => {
    try {
      const response = await fetchSearch(search.movies);
      setData(response.results);
      console.log(response.results);
      toast.success('Good');
    } catch (error) {
      console.log(error);
      toast.error('Bad');
    }
  };
  return (
    <>
      <div>Search movies</div>
      <SearchForm onAdd={addQuiz} />
      <hr />
      {data && (
        <ul>
          {data.map(dat => (
            <li key={dat.id}>
              <Link to={`/movies/${dat.id}`} state={{ from: location }}>
                {dat.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
};
export default Movies;
