import { Link, Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Home } from '../pages/Home';
import { NotFound } from 'pages/NotFound ';

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      {/* <Link to="/movies/:movieId">
        страница с детальной информацией о кинофильме
      </Link>
      <Link to="/movies/:movieId/cast">информация о актерском составе</Link>
      <Link to="/movies/:movieId/reviews">информация о актерском составе</Link> */}
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
