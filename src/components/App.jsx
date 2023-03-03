import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';

// import { Container, MainTitle, Title } from './App.styled';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
   return (
    <div>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
    
  );
};

export default App;
