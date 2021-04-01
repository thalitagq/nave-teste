import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/authentication';
import api from '../../services/api'

import styles from '../../styles/pages/Home.module.css'

export default function Home(){
  
  const { user, Logout } = useAuth();
  const token = localStorage.getItem('@App:token')

  async function handleLogout() {
    Logout();
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  async function GetNavers() {
    const response = await api.get('/navers/', {
      headers: config,
    });

    console.log(response)
  }
  
  useEffect(() => {
    GetNavers()
  }, [])

  return (
    <div>
      <AppBar position="static" className={styles.navbar} elevation={0}>
        <Toolbar>
          <img src="./logo.svg" alt="Logo"/>
          <Button onClick={handleLogout} className={styles.navbarButton}>Sair</Button>
        </Toolbar>
      </AppBar>
      
    
    </div>
  );
};
function componentDidUpdate(prevProps: any) {
  throw new Error('Function not implemented.');
}

function componentDidMount(prevProps: any) {
  throw new Error('Function not implemented.');
}

