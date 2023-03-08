import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { HeaderNav } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderNav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderNav>
  );
};
