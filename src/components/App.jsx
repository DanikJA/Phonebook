import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage.js';
import { LoginPage } from './Pages/LoginPage/LoginPage.js';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage.js';
import { AppBar } from './AppBar/AppBar.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/asyncFunctions.js';
import { useAuth } from '../redux/hooks/auth.js';
import { RestrictedRoute } from './RestrictedRoute.js';
import { PrivateRoute } from './PrivateRoute.js';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Navigate to="///" />} />
        </Routes>
      </div>
    )
  );
};
