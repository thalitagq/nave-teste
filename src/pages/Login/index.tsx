import React, { useContext } from 'react';
import { useAuth } from '../../contexts/authentication';
export default function Login(){
  
  const context = useAuth();
  
  function handleLogin() {
    context.Login();
  }

 return (
   <div>
     <button onClick={handleLogin}>Login</button>
   </div>
   
 );
};