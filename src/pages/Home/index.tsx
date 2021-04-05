
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Naver from '../../components/Naver';
import { useAuth } from '../../contexts/authentication';
import api from '../../services/api'

import styles from '../../styles/pages/Home.module.css'

const Home: React.FC = () => {
  const { signed, Logout } = useAuth();
  const token = localStorage.getItem('@App:token')

  const [navers, setNavers] = useState(Array);

  async function handleLogout() {
    Logout();
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  async function GetNavers() {
    await api.get('/navers/', {
      headers: config,
    }).then( res => setNavers(res.data));
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
      <div className={styles.homeContainer}>
        <div className={styles.homeTitleContainer}>
          <h1>Navers</h1>
          <button>Adicioar Naver</button>
        </div>
        <div>
          {navers.map((item: any) => (
              <Naver naver={item} key={item.id}></Naver>
          ))} 
        </div>
      </div>
      
     </div>
  );
};

export default Home;
