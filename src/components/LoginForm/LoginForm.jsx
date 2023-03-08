// import { Box, TextField, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { logIn } from 'redux/auth/operations';
import { loginSchema } from 'helpers/validation';
import { ErrorText } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(logIn({ email: values.email, password: values.password }));
  };

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" label=''/>
          <FormError name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <FormError name="password" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
