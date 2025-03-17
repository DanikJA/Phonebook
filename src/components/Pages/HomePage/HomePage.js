import { useAuth } from '../../../redux/hooks/auth';
import {
  Title,
  HomePageContainer,
  StyledNavLink,
  SubTitle,
} from './HomePageStyled';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomePageContainer>
      {!isLoggedIn ? (
        <>
          <Title>Welcome to the phone book!</Title>
          <StyledNavLink to="/login" title="Let's go">
            Let's go
          </StyledNavLink>
          <div style={{ fontSize: '35px' }}>📞</div>
        </>
      ) : (
        <SubTitle>Happy to see you here!</SubTitle>
      )}
    </HomePageContainer>
  );
};
