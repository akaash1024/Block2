import React from 'react';
import MainRight from './MainRight';

function MainContainer({ name }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h2>Main Container</h2>
      <MainRight name={name} />
    </div>
  );
}

export default MainContainer;
