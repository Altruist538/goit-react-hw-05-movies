import { fetchReviews } from 'components/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchReviews(id);
        setData(response.results);
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
            <h2>{dat.author}</h2>
            <p>{dat.content}</p>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};
