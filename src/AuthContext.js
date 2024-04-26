// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (userData) => {
    // Add validation and API call for signup
    const accessToken = generateAccessToken();
    const userWithToken = { ...userData, accessToken };
    setUser(userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
  };

  const login = (userData) => {
    // Add validation and API call for login
    const accessToken = generateAccessToken();
    const userWithToken = { ...userData, accessToken };
    setUser(userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const generateAccessToken = () => {
    // Generate random access token (you can use a more secure method)
    return Math.random().toString(36).substring(2, 18);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
