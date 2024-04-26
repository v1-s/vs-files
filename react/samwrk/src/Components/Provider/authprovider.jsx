import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || '',
  });

  const setToken = (token) => {
    localStorage.setItem('token', token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ token: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;