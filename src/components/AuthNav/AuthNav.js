import { AuthContainer, AuthLink } from './AuthNavStyled';
export const AuthNav = () => {
  return (
    <AuthContainer>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </AuthContainer>
  );
};
