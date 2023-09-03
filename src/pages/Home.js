import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'components/api';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrending();
        setData(response.results);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {data.map(dat => (
          <li key={dat.id}>
            <Link to={`/movies/${dat.id}`} state={{ from: location }}>
              {dat.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};
export default Home;
