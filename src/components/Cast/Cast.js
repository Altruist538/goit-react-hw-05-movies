import { fetchCredits } from 'components/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Cast = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCredits(id);
        setData(response.cast);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <ul>
        {data.map(dat => (
          <li key={dat.id}>
            <img
              src={
                dat.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${dat.profile_path}`
                  : `../imgDat/plugActor.jpg`
              }
              alt={dat.name}
              width="200px"
              height="300px"
            />
            <h2>{dat.name}</h2>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};
