import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #282c34;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #61dafb;
    color: #282c34;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
