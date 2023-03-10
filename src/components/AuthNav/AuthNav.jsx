import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register"><Button color="inherit">Register</Button></NavLink>
      <NavLink to="/login"><Button color="inherit" >Login</Button></NavLink>
    </div>
  );
};
