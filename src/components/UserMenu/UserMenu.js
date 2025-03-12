import { useDispatch } from '@reduxjs/toolkit';
import { useAuth } from '../../redux/hooks/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return <div></div>;
};
