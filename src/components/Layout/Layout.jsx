import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
