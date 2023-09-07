import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearch } from 'components/api';
import toast from 'react-hot-toast';
import { MoveList } from 'components/MoveList/MoveList';
import { Section } from 'components/GlobalStyle';
// import { Topic } from 'components/GlobalStyle';
const Movies = () => {
  const [data, setData] = useState([]);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';
  console.log(query);
  const addQuiz = async search => {
    // setSearchParams({ query: '' });
    setSearchParams({ query: search.movies });
  };
  useEffect(() => {
    const searchData = async () => {
      try {
        const response = await fetchSearch(query);
        setData(response.results);
        console.log(response.results);
        toast.success('Good');
      } catch (error) {
        console.log(error);
        toast.error('Bad');
      }
    };
    searchData();
  }, [query]);
  return (
    <Section>
      {/* <Topic>Search movies</Topic> */}
      <SearchForm onAdd={addQuiz} />
      <hr />
      {data && <MoveList data={data} />}
    </Section>
  );
};
export default Movies;
