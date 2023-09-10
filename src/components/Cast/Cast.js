import { fetchCredits } from 'components/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgDat from '../imgDat/actor.png';
import { ListBlok, ListHad, ListText } from './Cast.styled';
const Cast = () => {
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
      <ListBlok>
        {data.map(dat => (
          <ListHad key={dat.id}>
            <img
              src={
                dat.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500${dat.profile_path}`
                  : imgDat
              }
              alt={dat.name}
              width="200px"
              height="300px"
              style={{ objectFit: 'contain ' }}
            />
            <ListText>{dat.name}</ListText>
          </ListHad>
        ))}
      </ListBlok>
      <hr />
    </>
  );
};
export default Cast;
