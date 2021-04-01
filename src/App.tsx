import React from 'react';
import Routes from './routes';
import { AuthProvider } from './contexts/authentication';

import './styles/App.css'

function App() {
  
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider> 
  );

}

export default App;