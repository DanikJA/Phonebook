import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/asyncFunctions';
import {
  StyledForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
} from './RegisterPageStyled';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name:
          <Field name="name" type="text" as={Input} />
          <ErrorMessage name="name" component={ErrorText} />
        </Label>

        <Label>
          Email:
          <Field name="email" type="text" as={Input} />
          <ErrorMessage name="email" component={ErrorText} />
        </Label>

        <Label>
          Password:
          <Field name="password" type="password" as={Input} />
          <ErrorMessage name="password" component={ErrorText} />
        </Label>

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
  );
};
