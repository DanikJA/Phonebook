import { useAuth } from '../../redux/hooks/auth';
import { Nav, StyledNavLink } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};
