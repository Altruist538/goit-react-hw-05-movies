import { ListHad, ListBlok, NavLinkNavigation } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <ListBlok>
        <ListHad>
          <NavLinkNavigation to="/">Home</NavLinkNavigation>
        </ListHad>
        <ListHad>
          <NavLinkNavigation to="/movies">Movies</NavLinkNavigation>
        </ListHad>
      </ListBlok>
    </>
  );
};
