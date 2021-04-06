import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../contexts/authentication';
import styles from '../styles/pages/Home.module.css'

const Navbar: React.FC = () => {

  const { Logout } = useAuth();

  async function handleLogout() {
    Logout();
  }


  return(
    <AppBar position="static" className={styles.navbar} elevation={0}>
      <Toolbar>
        <img src="./logo.svg" alt="Logo"/>
        <Button onClick={handleLogout} className={styles.navbarButton}>Sair</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar