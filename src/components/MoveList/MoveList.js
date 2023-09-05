import { ListBlok, ListHad, ListText } from './MoveList.styled';
import { useLocation, Link } from 'react-router-dom';

export const MoveList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ListBlok>
        {data.map(dat => (
          <ListHad key={dat.id}>
            <Link to={`/movies/${dat.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${dat.poster_path}`}
                alt={data.title}
              />
            </Link>
            <ListText>{dat.title}</ListText>
          </ListHad>
        ))}
      </ListBlok>
    </>
  );
};
