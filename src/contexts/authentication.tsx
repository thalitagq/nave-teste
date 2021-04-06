import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');
    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    var response
    try {
      response = await api.post('/users/login', userData);
      setUser(response.data);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('@App:user', JSON.stringify(response.data));
      localStorage.setItem('@App:token', response.data.token);
      console.log(user)
    } catch (e) {
      console.log(e)
      console.error(e.message);
    }
  }

  function Logout() {
    setUser(null);

    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
