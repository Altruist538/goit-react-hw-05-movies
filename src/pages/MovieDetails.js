import { useEffect, useState, Suspense } from 'react';
import { fetchDetails } from 'components/api';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';

import {
  GlobalStyle,
  Wrapper,
  Button,
  ListHad,
  Container,
  ListBlok,
  Text,
} from 'components/GlobalStyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
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
    return <Loader />;
  }

  return (
    <>
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
        <ListHad>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </ListHad>
        <ListHad>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </ListHad>
      </ListBlok>
      <hr />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <GlobalStyle />
    </>
  );
};
export default MovieDetails;
