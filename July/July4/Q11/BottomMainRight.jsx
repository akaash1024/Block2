import React from 'react';

function BottomMainRight({ name }) {
  return (
    <div style={{ border: '1px solid #666', padding: '10px' }}>
      <h4>Bottom Main Right</h4>
      <p>Hello, {name || "Stranger"}!</p>
    </div>
  );
}

export default BottomMainRight;
