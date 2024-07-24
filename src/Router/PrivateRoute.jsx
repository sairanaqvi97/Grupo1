import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  
  return isAuthenticated() ? (
    <>
      {children}
     
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
