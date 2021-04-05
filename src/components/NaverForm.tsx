import { Grid } from "@material-ui/core"
import React from "react"

import styles from '../styles/components/AddNaver.module.css'

interface NaverFormProps{
  handleOpen(): any;
  handleClose(): any;
}

const NaverForm: React.FC<NaverFormProps> = (props) => {
  return(
    <>
      <Grid item xs={12} sm={6}>
        <div >
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Nome" id="name"/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="birthdate">Idade</label>
            <input type="text" placeholder="Idade" id="birthdate"/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="project">Projetos que participou</label>
            <input type="text" placeholder="Projetos que participou" id="project"/>
          </fieldset>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div >
          <fieldset>
            <label htmlFor="job_role">Cargo</label>
            <input type="text" placeholder="Cargo" id="job_role"/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="admission_date">Tempo de empresa</label>
            <input type="text" placeholder="Tempo de empresa" id="admission_date"/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="url">URL da foto do Naver</label>
            <input type="text" placeholder="URL da foto do Naver" id="url"/>
          </fieldset>
    
          <button className={styles.addNaverSaveButton} onClick={props.handleOpen}>Salvar</button>
        </div>  
      </Grid>
    </>  

  )
}

export default NaverForm


