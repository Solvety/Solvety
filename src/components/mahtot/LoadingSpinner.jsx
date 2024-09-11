import React from 'react';
import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', alignItems: 'center' }} className='loading-spinner'>
    <Circles
      height="20"
      width="20"
      color="#ffffff"
      ariaLabel="circles-loading"
      style={{ marginLeft: '10px' }}

    />
  </div>
);

export default LoadingSpinner;
