import { styled } from 'styled-components';

export const ListBlok = styled.ul`
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ListHad = styled.li`
  width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #5d9969;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
`;
export const ListText = styled.p`
  font-size: 15px;
  text-size-adjust: auto;
  height: 50px;
  margin: auto;
  padding: 5px;
  text-align: center;
  font-weight: bold;
`;
