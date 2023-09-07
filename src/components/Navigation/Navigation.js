import { Link } from 'react-router-dom';
import { ListHad, ListBlok } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <ListBlok>
        <ListHad>
          <Link to="/">Home</Link>
        </ListHad>
        <ListHad>
          <Link to="/movies">Movies</Link>
        </ListHad>
      </ListBlok>
    </>
  );
};
