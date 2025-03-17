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
  color: #d3d3d3;
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
    font-weight: bold;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
  }
`;
