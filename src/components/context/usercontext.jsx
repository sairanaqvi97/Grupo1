import React, { createContext, useState, useContext } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const contextValue = useUserContext();
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const [user, setUser] = useState(null);

  const updateUserData = async (updatedData) => {
    try {
      const response = await updateUser(updatedData);
      setUser(response);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return { user, setUser, updateUserData };
};








    
