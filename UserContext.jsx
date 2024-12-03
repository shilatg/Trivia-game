import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Updated login function to accept first and last name
  const loginUser = (email, password, firstName, lastName) => {
    const userInfo = { email,password, firstName, lastName };
    setUser(userInfo);
    return userInfo;
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
