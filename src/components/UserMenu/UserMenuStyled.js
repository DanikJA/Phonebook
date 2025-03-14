import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Email = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #4a90e2;
`;

export const LogoutButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  background: #e74c3c;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
  }
`;
