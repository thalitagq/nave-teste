import React, { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import api from '../services/api'

interface AuthContextProps{
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
  Logout(): void;
}
 
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: AuthContextProps){

  const [user, setUser] = useState<object | null>(null);

  async function Login() {
    const response = await api.post('/users/login', {
      email: 'thalitagq@outlook.com',
      password: '123123',
    
    });

    localStorage.setItem('@App:user', JSON.stringify(response.data));
    localStorage.setItem('@App:token', response.data.token);
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  function Logout() {
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('App:token');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  
  const context = useContext(AuthContext);
  
  return context;
}
