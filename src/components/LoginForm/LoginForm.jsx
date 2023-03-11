// import { Box, TextField, IconButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/operations';
import { loginSchema } from 'helpers/validation';
import { ErrorText, FormCont, LabelCont, Input, Text, SubmitButton, Title } from './LoginForm.styled';


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
      <FormCont autoComplete='off'>
        <Title>Login</Title>
        <LabelCont>
          <Text>Email</Text>
          <Input type="email" name="email" label='' placeholder='Enter your email'/>
          <FormError name="email" />
        </LabelCont>
        <LabelCont>
          <Text>Password</Text>
          <Input type="password" name="password" placeholder='Enter your password'/>
          <FormError name="password" />
        </LabelCont>
        <SubmitButton type="submit">Login</SubmitButton>
      </FormCont>
    </Formik>
  );
};
