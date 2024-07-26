import { Navigate } from "react-router-dom";

// export const PrivateRoute = ({ authData, children }) => {
//   const userLoggedIn = localStorage.getItem("user");


//   if (!authData) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

export const PrivateRoute = ({ authData, children }) => {
  // const isAuthenticated = authData || localStorage.getItem("user");
  
  if (!authData) {
    return <Navigate to="/login" />;
  }
  return children;
};

