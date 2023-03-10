import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <NavLink to="/"><Button color="inherit">Home</Button></NavLink>
      {isLoggedIn && <NavLink to="/contacts"><Button color="inherit">Contacts</Button></NavLink>}
    </div>
  );
};
