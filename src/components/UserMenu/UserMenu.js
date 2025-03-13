import { useDispatch } from 'react-redux';
import { useAuth } from '../../redux/hooks/auth';
import { logOut } from '../../redux/auth/asyncFunctions';
import { MenuContainer, LogoutButton, Email } from './UserMenuStyled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuContainer>
      <Email>{user.email}</Email>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogoutButton>
    </MenuContainer>
  );
};
