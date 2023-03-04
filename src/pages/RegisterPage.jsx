import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Register</title>
      </Helmet> */}
          <p>Welcome to RegisterPAGE</p>
          <RegisterForm/>
    </div>
  );
};

export default RegisterPage;
