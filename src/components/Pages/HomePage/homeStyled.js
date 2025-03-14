import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: none;
  margin: 2px;
`;

export const SubTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: none;
  margin-bottom: 60px;
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
