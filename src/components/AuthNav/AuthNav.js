import { AuthContainer, AuthLink } from './AuthNavStyled';

// import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </AuthContainer>
  );
};
