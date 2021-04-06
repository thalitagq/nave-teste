import React, { useEffect, useState } from "react";
import Naver from "./Naver";
import api from "../services/api";
import { Link } from "react-router-dom";

import styles from "../styles/components/NaversList.module.css"

const NaversList: React.FC = () =>{

  const token = localStorage.getItem('@App:token')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const [navers, setNavers] = useState(Array);

  async function GetNavers() {
    await api.get('/navers/', {
      headers: config,
    }).then( res => setNavers(res.data));
  }
  
  useEffect(() => {
    GetNavers()
    console.log(navers)
  }, [navers.length])

  return(
    <div className={styles.naversListContainer}>
      <div className={styles.naversListTitleContainer}>
        <h1>Navers</h1>
        <button type="button" ><Link to='/create'>Adicioar Naver</Link></button>
      </div>
      <div className={styles.naversListCards}>
        {navers.map((item: any) => (
          <Naver naver={item} key={item.id}></Naver>
        ))} 
      </div>
    </div>
  );
}

export default NaversList;
