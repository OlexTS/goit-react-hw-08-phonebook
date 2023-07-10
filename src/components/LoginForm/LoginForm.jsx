import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/operations';
import {
  ErrorText,
  FormCont,
  LabelCont,
  Input,
  Text,
  SubmitButton,
  Title,
} from './LoginForm.styled';
import { loginSchema } from 'helpers/validation';

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
  const dispatch = useDispatch();
  const handleSubmit = values => {
  dispatch(logIn({ email: values.email, password: values.password }));
};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
      <FormCont autoComplete="off">
        <Title>Login</Title>
        <LabelCont>
          <Text>Email</Text>
          <Input
            type="email"
            name="email"
            label=""
            placeholder="Enter your email"
          />
          <FormError name="email" />
        </LabelCont>
        <LabelCont>
          <Text>Password</Text>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <FormError name="password" />
        </LabelCont>
        <SubmitButton type="submit">Login</SubmitButton>
      </FormCont>
    </Formik>
  );
};
