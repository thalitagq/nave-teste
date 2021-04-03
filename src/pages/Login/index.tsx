// import { Grid, Paper } from '@material-ui/core';
// import { inherits } from 'node:util';
// import React, { useContext } from 'react';
// import { useAuth } from '../../contexts/authentication';

// import styles from '../../styles/pages/Login.module.css'

// export default function Login(){
//   const { signed, Login } = useAuth();

//   var email = '', password = '';

//   async function handleLogin() {
//     await Login({
//         email: email,
//         password: password,
//     });
//     if(!signed){
//       alert("Email e/ou senha incorreto(s)");
//     }
//   }

//   function handleInputChange(event: { target: any; }) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     if(name === 'email'){
//       email = value
//     }
//     else{
//       password = value
//     }
//   }
  
//   return (
//     <Grid
//       container
//       direction="row"
//       justify="center"
//       alignItems="center"
//       style={{height: "inherit"}}
//     >
//       <Paper variant="outlined" square className={styles.formBox}>
//         <img src="logo.svg" alt="" style={{width: '235px', marginBottom: '40px'}}/>
//         <form>
//           <fieldset>
//             <label htmlFor="email">Email</label>
//             <input type="email" name='email' id="email" onChange={handleInputChange} required/>
//           </fieldset>
//           <fieldset>
//             <label htmlFor="password">Senha</label>
//             <input type="password" name='password' id="password" onChange={handleInputChange} required/>
//           </fieldset>
//           <button type="submit" onClick={handleLogin}>Login</button>
//         </form>
//       </Paper>
//     </Grid>
   
//   );
// };

import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../../contexts/authentication';

import styles from '../../styles/pages/Login.module.css'

const Login: React.FC = () => {
  const { user, Login } = useAuth();

  
  var email = '', password = '';

  async function handleLogin() {
    await Login({
        email: email,
        password: password,
    })
    if(!localStorage.getItem('@App:user')){
      alert("Email e/ou senha incorreto(s)");
    }
  }

  function handleInputChange(event: { target: any; }) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if(name === 'email'){
      email = value
    }
    else{
      password = value
    }
  }

  return (
    // <div>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{height: "inherit"}}
    >
      <Paper variant="outlined" square className={styles.formBox}>
        <img src="logo.svg" alt="" style={{width: '235px', marginBottom: '40px'}}/>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id="email" onChange={handleInputChange} required/>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Senha</label>
            <input type="password" name='password' id="password" onChange={handleInputChange} required/>
          </fieldset>
          <button type="button" onClick={handleLogin}>Login</button>
      </Paper>
    </Grid>
  );
};

export default Login;