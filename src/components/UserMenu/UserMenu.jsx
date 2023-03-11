import { useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Container, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={handleClick}>
        <ImExit size={36} fill="#960909" />
      </Button>
    </Container>
  );
};
