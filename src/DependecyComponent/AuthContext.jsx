import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform authentication logic, e.g., sending credentials to the server
    // Upon successful authentication, set the user in the context
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic, e.g., clearing session data
    // Clear the user from the context
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
