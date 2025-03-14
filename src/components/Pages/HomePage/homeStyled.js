import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: green;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(1, 222, 95, 0.1);
  }
`;
