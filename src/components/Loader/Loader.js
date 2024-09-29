import { HashLoader } from 'react-spinners';
import React from 'react';

const Spinner = props => {
  const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <div style={spinnerStyle}>
      <HashLoader
        ariaLabel="loading-indicator"
        color="#00d4ff"
        size={100}
      />
    </div>
  );
};

export default Spinner;
