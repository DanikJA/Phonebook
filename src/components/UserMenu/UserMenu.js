import { useDispatch } from '@reduxjs/toolkit';
import { useAuth } from '../../redux/hooks/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome,{user.name}</p>
      <button type="button" onClick={() => dispatch()}></button>
    </div>
  );
};
