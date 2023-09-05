import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin: auto;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 10px;
  width: 800px;
  flex-wrap: wrap;
  align-items: baseline;
  border: 1px solid #5d9969;
  border-radius: 4px;
  font-weight: bold;
`;

export const StyledField = styled(Field)`
  width: 695px;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
export const Button = styled.button`
  border: 1px solid #5d9969;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  }
`;
