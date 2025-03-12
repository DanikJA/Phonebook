import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense, lazy } from 'react';

import { HomePage } from './Pages/HomePage/HomePage.js';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage.js';
import { LoginPage } from './Pages/LoginPage/LoginPage.js';
import { ContactsPage } from './Pages/ContactsPage/ContactsPage.js';
// import { useAuth } from '../redux/hooks/auth.js';
// import { Navigation } from '../components/Navigation/Navigation.js';

export const App = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <div>
      {/* <header>
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
      </header> */}
      {/* <Navigation /> */}

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
