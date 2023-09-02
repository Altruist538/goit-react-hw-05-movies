import React, { useEffect, useState } from 'react';
import { fetchDetails } from 'components/api';
import { useParams, Link, Outlet } from 'react-router-dom';

import {
  GlobalStyle,
  Section,
  Wrapper,
  Button,
  ListInfo,
} from 'components/GlobalStyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetails(id);
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/">
        <Button>
          <AiOutlineArrowLeft />
          Go back
        </Button>
      </Link>

      <Section>
        <img
          src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
          alt={data.title}
        />
        <Wrapper>
          <h2>{data.title}</h2>
          <p>User Score: {data.vote_average.toFixed(1) * 10}%</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <p>{data.genres.map(genr => genr.name).join(' ')}</p>
        </Wrapper>
      </Section>
      <hr />
      <ul>
        <p>Additional information</p>
        <ListInfo>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </ListInfo>
        <ListInfo>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </ListInfo>
      </ul>
      <hr />
      <Outlet />
      <GlobalStyle />
    </>
  );
};
