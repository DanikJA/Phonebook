import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
// import { Suspense, lazy } from 'react';

import { HomePage } from './Pages/HomePage/HomePage.js';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage.js';
import { LoginPage } from './Pages/LoginPage/LoginPage.js';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage.js';

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
