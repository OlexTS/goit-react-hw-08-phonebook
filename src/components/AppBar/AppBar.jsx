import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { HeaderNav } from './AppBar.styled';
import ToggleColorMode from 'components/Theme/Theme';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderNav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <ToggleColorMode/>
    </HeaderNav>
  );
};
