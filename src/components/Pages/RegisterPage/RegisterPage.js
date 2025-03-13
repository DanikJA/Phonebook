import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/asyncFunctions';

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
      <Form>
        <label>
          Name:
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </label>

        <label>
          Email:
          <Field name="email" type="text" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </label>

        <label>
          Password:
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: 'red' }}
          />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
