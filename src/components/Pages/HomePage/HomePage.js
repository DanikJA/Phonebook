import { Title, HomePageContainer, StyledNavLink } from './HomeStyled';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Welcome to phone book</Title>
      <StyledNavLink to="/login" title="Let's go">
        Let's go
      </StyledNavLink>
      <div style={{ fontSize: '30px', marginTop: '20px' }}>🐣</div>
    </HomePageContainer>
  );
};
