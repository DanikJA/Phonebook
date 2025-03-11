import { Formik, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
} from './ContactFormStyled.jsx';
import { selectContacts } from '../../redux/contacts/selectors.js';

import * as Yup from 'yup';

const numbersSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Please enter a valid number!')
    .required('Required'),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ Mail: '', Password: '' }}
      validationSchema={numbersSchema}
      onSubmit={(values, actions) => {
        addNumber(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Email
          <Field name="Email" as={Input} />
          <ErrorMessage name="Email" component={ErrorText} />
        </Label>
        <Label>
          Password
          <Field name="Password" as={Input} />
          <ErrorMessage name="Password" component={ErrorText} />
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
  );
};
