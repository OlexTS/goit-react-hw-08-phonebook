import { Link, Nav } from "components/Navigation/Navigation.styled";

export const AuthNav = () => {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
};
