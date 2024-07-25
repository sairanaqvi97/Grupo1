import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ authData, children }) => {
    
  if (!authData) {
    return <Navigate to="/login" />;
  }
  return children;
};
