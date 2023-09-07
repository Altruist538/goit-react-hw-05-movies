import { Topic, ListText, ListBlok, ListHad } from './Reviews.styled';
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
      <ListBlok>
        {data.length !== 0 ? (
          data.map(dat => (
            <ListHad key={dat.id}>
              <Topic>{dat.author}</Topic>
              <ListText>{dat.content}</ListText>
            </ListHad>
          ))
        ) : (
          <ListText>We don't have any reviews for this movie.</ListText>
        )}
      </ListBlok>
      <hr />
    </>
  );
};
export default Reviews;
