import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage.js';
import { LoginPage } from './Pages/LoginPage/LoginPage.js';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage.js';
import { AppBar } from './AppBar/AppBar.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/asyncFunctions.js';
import { useAuth } from '../redux/hooks/auth.js';

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    )
  );
};
