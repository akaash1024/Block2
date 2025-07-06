import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function Navbar() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ marginBottom: '20px' }}>
      <button onClick={toggleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

export default Navbar;
