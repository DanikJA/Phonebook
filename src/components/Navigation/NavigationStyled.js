import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  padding: 12px 20px;
  background: transparent;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #e0e0e0;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    background: greenyellow;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  &.active {
    color: white;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    width: 100%;
  }
`;
