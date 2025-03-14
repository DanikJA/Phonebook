import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Email = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: greenyellow;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  color: white;
  background: gray;
  border: none;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #4a4a4a;
    transform: translateY(+1px);
  }
`;
