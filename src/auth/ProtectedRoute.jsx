
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {


  const isAuthenticated = () => {
    const token = localStorage.getItem('jwtToken');
    return token !== null; 
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? 
          <>{children}</>
          : 
          <Navigate to="/login" />
        
      }
    />
  );
};

export default ProtectedRoute;
