import { ListBlok, ListHad, ListLink, ListText } from './MoveList.styled';
import { useLocation } from 'react-router-dom';
export const MoveList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ListBlok>
        {data.map(dat => (
          <ListHad key={dat.id}>
            <ListLink to={`/movies/${dat.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${dat.poster_path}`}
                alt={data.title}
              />
            </ListLink>
            <ListText>{dat.title}</ListText>
          </ListHad>
        ))}
      </ListBlok>
    </>
  );
};
