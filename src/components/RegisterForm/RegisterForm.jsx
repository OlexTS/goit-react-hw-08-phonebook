import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { register } from 'redux/auth/operations';
import { ErrorText } from './RegisterForm.styled';
import { registerSchema } from 'helpers/validation';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
        confirm: values.confirm,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" placeholder="Jack Daniel" />
          <FormError name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" placeholder="jackdaniel@gmail.com" />
          <FormError name="email" />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter a password"
          />
          <FormError name="password" />
        </label>
        <label>
          Password confirm
          <Field
            type="password"
            name="confirm"
            placeholder="Enter a password once again"
          />
          <FormError name="confirm" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
