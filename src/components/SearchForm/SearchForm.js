import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
} from './SearchForm.styled';
const validationSchema = Yup.object().shape({
  movies: Yup.string().min(2).max(50).required('* Movie title required'),
});
export const SearchForm = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          movies: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            <StyledField type="text" name="movies" placeholder="Movie title" />
            <StyledError name="movies" component="div" />
          </label>

          <Button type="submit">Search</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
