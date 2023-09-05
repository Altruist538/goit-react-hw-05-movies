import React, { useEffect, useState } from 'react';
import { fetchDetails } from 'components/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import {
  GlobalStyle,
  Section,
  Wrapper,
  Button,
  ListHad,
  Container,
  ListBlok,
  Text,
} from 'components/GlobalStyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  console.log(location);
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

  const backLink = location?.state?.from ?? '/';
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Section>
        <Link to={backLink}>
          <Button>
            <AiOutlineArrowLeft />
            Go back
          </Button>
        </Link>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
            alt={data.title}
          />
          <Wrapper>
            <h2>{data.title}</h2>
            <Text>User Score: {data.vote_average.toFixed(1) * 10}%</Text>
            <h3>Overview</h3>
            <Text>{data.overview}</Text>
            <h3>Genres</h3>
            <Text>{data.genres.map(genr => genr.name).join(' ')}</Text>
          </Wrapper>
          <hr />
        </Container>

        <ListBlok>
          {/* <p>Additional information</p> */}
          <ListHad>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </ListHad>
          <ListHad>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </ListHad>
        </ListBlok>
        <hr />
      </Section>
      <Outlet />
      <GlobalStyle />
    </>
  );
};
export default MovieDetails;
