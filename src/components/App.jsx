import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';
import { refresh } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// import { Container, MainTitle, Title } from './App.styled';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <div>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage/>}/>} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>} />
          <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<ContactsPage/>}/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
