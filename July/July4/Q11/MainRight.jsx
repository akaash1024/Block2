import React from 'react';
import BottomMainRight from './BottomMainRight';

function MainRight({ name }) {
  return (
    <div style={{ border: '1px solid #aaa', padding: '10px' }}>
      <h3>Main Right</h3>
      <BottomMainRight name={name} />
    </div>
  );
}

export default MainRight;
