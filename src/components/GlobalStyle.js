import { createGlobalStyle, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
a{
  text-decoration: none;
}
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
export const Section = styled.div`
  background-color: #ebdfcf52;
  width: 1200px;
  margin: auto;
  padding-bottom: 20px;
`;
export const Container = styled.div`
  margin-top: 10px;
  display: flex;
`;
export const ListBlok = styled.ul`
  display: flex;
  margin-top: 10px;
`;
export const ListHad = styled.li`
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;
export const ListInfo = styled.li`
  text-decoration: underline;
  font-size: 15px;
  margin-left: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.div`
  width: 100px;
  border: 1px solid #5d9969;
  height: 27px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  margin-left: 10px;
`;
export const Topic = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TopicSmall = styled.h3`
  margin-bottom: 8px;
`;
export const Text = styled.p`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
`;
export const Header = styled.nav`
  width: 1200px;
  margin: auto;
  font-weight: bold;
`;
export const NavLinkData = styled(NavLink)`
  &.active {
    color: red;
  }
  &:hover {
    color: orange;
  }
`;
