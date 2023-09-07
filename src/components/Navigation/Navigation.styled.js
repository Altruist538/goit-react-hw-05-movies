import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListBlok = styled.ul`
  display: flex;
  padding-top: 10px;
`;
export const ListHad = styled.li`
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;
export const NavLinkNavigation = styled(NavLink)`
  &.active {
    color: red;
  }
  &:hover {
    color: orange;
  }
`;
