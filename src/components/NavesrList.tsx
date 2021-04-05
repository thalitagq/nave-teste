import React, { useEffect, useState } from "react";
import Naver from "./Naver";

import styles from "../styles/components/NaversList.module.css"
import { useAuth } from "../contexts/authentication";
import api from "../services/api";

interface NaversListProps{
  showAdd(): any;
}

const NaversList: React.FC <NaversListProps> = (props) =>{

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

  return(
  <div className={styles.naversListContainer}>
    <div className={styles.naversListTitleContainer}>
      <h1>Navers</h1>
      <button type="button" onClick={props.showAdd}>Adicioar Naver</button>
    </div>
    <div>
      {navers.map((item: any) => (
          <Naver naver={item} key={item.id}></Naver>
      ))} 
    </div>
  </div>
  );


}

export default NaversList;
