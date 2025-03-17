import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/asyncFunctions';
import {
  StyledForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
} from './LoginPageStyled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Email:
          <Field name="email" type="text" as={Input} />
          <ErrorMessage
            name="email"
            component={ErrorText}
            style={{ color: 'red' }}
          />
        </Label>

        <Label>
          Password:
          <Field name="password" type="password" as={Input} />
          <ErrorMessage
            name="password"
            component={ErrorText}
            style={{ color: 'red' }}
          />
        </Label>

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
  );
};
