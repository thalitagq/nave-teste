import { CardActions, Container, Dialog, DialogContent, Grid, Icon, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import NaverForm from './NaverForm';
import { Props } from './Naver';

import styles from '../styles/components/AddNaver.module.css'

const AddNaver: React.FC = () => {

  const token = localStorage.getItem('@App:token')
  const config = {
    headers: { Authorization: `Bearer ${token}` , 'Content-Type': 'application/json'}
  }

  const [open, setOpen] = useState(false);
  const history = useHistory()
  let naver = {} as Props
  const [addNaver, setAddNaver] = useState<Props>(naver);
  const [msg, setMsg] = useState(' ')

  // modal confirmação
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  async function AddNaver() {
    var response
    if (addNaver['birthdate']) {
      addNaver['birthdate'] = new Date(addNaver['birthdate']).toLocaleDateString('pt-br', {timeZone: 'UTC'})    
    }
    if(addNaver['admission_date']){
      addNaver['admission_date'] = new Date(addNaver['admission_date']).toLocaleDateString('pt-br', {timeZone: 'UTC'})
    }
    console.log(typeof addNaver['birthdate'])
    try {
      response = await api.post('/navers', addNaver, {headers: config});
      setMsg('Naver criado com sucesso!')

    } catch (e) {
      console.log(e)
      console.error(e.message);
      setMsg('Ocorreu um erro. Cheque os dados e tente novamente.')
    }
  }

  function handleChangeForm(newValue: React.SetStateAction<Props> | Props) {
    setAddNaver(newValue);
  }

  function handleCreate(){
    AddNaver()
    setTimeout(function(){  handleOpen() }, 1000);
  }

  return(
    <Container maxWidth="md">
      <Grid container spacing={3} className={styles.addNaverContainer}>
        <Grid item xs={12}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <IconButton aria-label="voltar" onClick={() => history.goBack()}>
              <Icon className={styles.addNaverButtonIcon}>arrow_back_ios_new</Icon>
            </IconButton>
            <h1>Adicionar Naver</h1>
          </div>
        </Grid>
        <NaverForm 
          naver={addNaver} 
          inputChange={handleChangeForm}
          formType='create'
        />
        <Grid item xs={12} direction="row-reverse">
          <button className={styles.addNaverSaveButton} onClick={handleCreate}>Salvar</button>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
      >
        <CardActions className={styles.addNaverModalTitle}>
          <h1>Naver Criado</h1>
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

export default AddNaver;
