import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Email = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #61dafb;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  color: white;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e60000;
  }
`;
