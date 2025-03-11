import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to phone book</h1>
      <NavLink to="/login" title="Let's go">
        Let's go
      </NavLink>
    </div>
  );
};
