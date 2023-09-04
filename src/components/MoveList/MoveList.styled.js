import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export const ListBlok = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ListHad = styled.li`
  width: 200px;
  display: flex;

  flex-direction: column;
  align-items: center;
  border: 1px solid #5d9969;
  border-radius: 4px;
`;
export const ListText = styled.p`
  height: 50px;
  margin: auto;
  padding: 5px;
  text-align: center;
  font-weight: bold;
`;
export const ListLink = styled(Link)`
 
}
`;
