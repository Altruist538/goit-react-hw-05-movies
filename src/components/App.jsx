import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound '));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
