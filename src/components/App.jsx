import { Link, Route, Routes } from 'react-router-dom';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import Home from '../pages/Home';
import NotFound from 'pages/NotFound ';
import { GlobalStyle, ListHad, ListBlok } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <nav>
        <ListBlok>
          <ListHad>
            <Link to="/">Home</Link>
          </ListHad>
          <ListHad>
            <Link to="/movies">Movies</Link>
          </ListHad>
        </ListBlok>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};
