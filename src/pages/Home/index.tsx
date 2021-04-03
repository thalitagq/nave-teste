// import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
// import React, { useEffect } from 'react';
// import { useAuth } from '../../contexts/authentication';
// import api from '../../services/api'

// import styles from '../../styles/pages/Home.module.css'

// export default function Home(){
  
//   const { signed, Logout } = useAuth();
//   const token = localStorage.getItem('@App:token')

//   async function handleLogout() {
//     Logout();
//   }

//   const config = {
//     headers: { Authorization: `Bearer ${token}` }
//   };

//   async function GetNavers() {
//     const response = await api.get('/navers/', {
//       headers: config,
//     });

//     // console.log(response)
//   }
  
//   useEffect(() => {
//     GetNavers()
//   }, [])

//   return (
//     <div>
//       <AppBar position="static" className={styles.navbar} elevation={0}>
//         <Toolbar>
//           <img src="./logo.svg" alt="Logo"/>
//           <Button onClick={handleLogout} className={styles.navbarButton}>Sair</Button>
//         </Toolbar>
//       </AppBar>
      
    
//     </div>
//   );
// };
import React from 'react';
import { useAuth } from '../../contexts/authentication';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { signed, Logout } = useAuth();

  console.log(signed);

  async function handleLogout() {
    Logout();
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
