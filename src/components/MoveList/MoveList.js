import { ListBlok, ListHad, ListText } from './MoveList.styled';
import { useLocation, Link } from 'react-router-dom';
import imgDat from '../imgDat/no_image.png';

export const MoveList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ListBlok>
        {data.map(dat => (
          <ListHad key={dat.id}>
            <Link to={`/movies/${dat.id}`} state={{ from: location }}>
              <img
                src={
                  dat.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w300/${dat.poster_path}`
                    : imgDat
                }
                alt={dat.title}
                width="200px"
                height="300px"
                style={{ objectFit: 'cover ' }}
              />
            </Link>
            <ListText>{dat.title}</ListText>
          </ListHad>
        ))}
      </ListBlok>
    </>
  );
};
