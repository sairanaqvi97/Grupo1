import PropTypes from 'prop-types'; // Importa PropTypes

import { Navigate, useLocation } from 'react-router-dom';

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

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // children debe ser un nodo React
};

export default PrivateRoute;
