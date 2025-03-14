import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AuthLink = styled(NavLink)`
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
    background: #4a90e2;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  &.active {
    color: #4a90e2;
    font-weight: bold;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    width: 100%;
  }
`;
