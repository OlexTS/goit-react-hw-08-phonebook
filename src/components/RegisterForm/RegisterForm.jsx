import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';
import {
  ErrorText,
  FormCont,
  Text,
  SubmitButton,
  LabelCont,
  Input,
  Title,
} from './RegisterForm.styled';
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
      <FormCont autoComplete="off">
        <Title>Registration</Title>
        <LabelCont>
          <Text>Name</Text>
          <Input type="text" name="name" placeholder="Jack Daniel" />
          <FormError name="name" />
        </LabelCont>
        <LabelCont>
          <Text>Email</Text>
          <Input type="email" name="email" placeholder="jackdaniel@gmail.com" />
          <FormError name="email" />
        </LabelCont>
        <LabelCont>
          <Text>Password</Text>
          <Input
            type="password"
            name="password"
            placeholder="Enter a password"
          />
          <FormError name="password" />
        </LabelCont>
        <LabelCont>
          <Text>Password confirm</Text>
          <Input
            type="password"
            name="confirm"
            placeholder="Enter a password once again"
          />
          <FormError name="confirm" />
        </LabelCont>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormCont>
    </Formik>
  );
};
