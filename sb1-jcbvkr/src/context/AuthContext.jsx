import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (credentials) => {
    // Mock login - in real app, this would make an API call
    if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
      const userData = {
        id: '1',
        name: 'Demo User',
        email: credentials.email
      };
      setUser(userData);
      toast.success('Welcome back!');
      return true;
    }
    toast.error('Invalid credentials');
    return false;
  };

  const register = (userData) => {
    // Mock registration - in real app, this would make an API call
    setUser({
      id: Date.now().toString(),
      ...userData
    });
    toast.success('Registration successful!');
    return true;
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}