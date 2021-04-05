
import { AppBar, Button, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/authentication';
import NaversList from '../../components/NavesrList'

import styles from '../../styles/pages/Home.module.css'
import AddNaver from '../../components/AddNaver';

const Home: React.FC = () => {
  const { Logout } = useAuth();

  const [addNaver, setAddNaver] = useState(false);

  async function handleLogout() {
    Logout();
  }

  function showNaversList(){
    setAddNaver(true);
  }

  function hideNaversList(){
    setAddNaver(false);
  }

  return (
    
    <div>
      <AppBar position="static" className={styles.navbar} elevation={0}>
        <Toolbar>
          <img src="./logo.svg" alt="Logo"/>
          <Button onClick={handleLogout} className={styles.navbarButton}>Sair</Button>
        </Toolbar>
      </AppBar>

      {addNaver ? <AddNaver hideAdd={hideNaversList}/> : <NaversList showAdd={showNaversList}/> }  
       
      
     </div>
  );
};

export default Home;
