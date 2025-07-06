import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ marginBottom: '20px' }}>
      <h2>{isLoggedIn ? 'You are logged in!' : 'Please login to continue.'}</h2>
    </main>
  );
}

export default Main;
