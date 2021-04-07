import { CardActions, Container, Dialog, DialogContent, Grid, Icon, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import {useLocation, useHistory} from "react-router-dom";
import api from '../services/api';
import styles from '../styles/components/AddNaver.module.css'
import { Props } from './Naver';
import NaverForm from './NaverForm';

const EditNaver: React.FC = () => {

  const [open, setOpen] = useState(false);
  const history = useHistory()
  const [naver, setEditNaver] = useState(useLocation().state as Props)
  const [msg, setMsg] = useState(' ')


  const token = localStorage.getItem('@App:token')
  const config = {
    headers: { Authorization: `Bearer ${token}` , 'Content-Type': 'application/json'}
  }

  // modal confirmação
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  function handleChangeForm(newValue: React.SetStateAction<Props> | Props) {
    setEditNaver(newValue);
  }

  async function UpdateNaver() {
    var response
    if (naver['birthdate']) {
      naver['birthdate'] = new Date(naver['birthdate']).toLocaleDateString('pt-br', {timeZone: 'UTC'})    
    }
    if(naver['admission_date']){
      naver['admission_date'] = new Date(naver['admission_date']).toLocaleDateString('pt-br', {timeZone: 'UTC'})
    }
    console.log(naver['birthdate'])
    let temp = {...naver, id: undefined, user_id: undefined}
    try {
      response = await api.put(`/navers/${naver.id}`, temp, {headers: config})
      setMsg('Naver atualizado com sucesso!')
      // history.goBack()
    } catch (e) {
      console.log(e)
      console.error(e.message);
      setMsg('Ocorreu um erro. Cheque os dados e tente novamente.')
    }
  }

  function handleUptade(){
    UpdateNaver()
    setTimeout(function(){  handleOpen() }, 1000);
  }

  return(
    <Container maxWidth="md">

      {console.log(naver)}
      <Grid container spacing={3} className={styles.addNaverContainer}>
        <Grid item xs={12}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <IconButton aria-label="voltar" onClick={() => history.goBack()}>
              <Icon className={styles.addNaverButtonIcon} >arrow_back_ios_new</Icon>
            </IconButton>
            <h1>Editar Naver</h1>
          </div>
        </Grid>
        <NaverForm 
          naver={naver} 
          inputChange={handleChangeForm}
          formType='update'
        />
        <Grid item xs={12} direction="row-reverse">
          <button className={styles.addNaverSaveButton} onClick={handleUptade}>Salvar</button>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
      >
        <CardActions className={styles.addNaverModalTitle}>
          <h1>Naver Atualizado</h1>
          <IconButton aria-label="fechar modal" onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>
        </CardActions>
        <DialogContent className={styles.addNaverModalConent}>
          <span>{msg}</span>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default EditNaver;
