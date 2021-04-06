import { CardActions, Container, Dialog, DialogContent, Grid, Icon, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
      addNaver['birthdate'] = new Date(addNaver['birthdate']).toLocaleDateString()    
    }
    if(addNaver['admission_date']){
      addNaver['admission_date'] = new Date(addNaver['admission_date']).toLocaleDateString()
    }
    console.log(typeof addNaver['birthdate'])
    try {
      response = await api.post('/navers', addNaver, {headers: config});
      console.log('post response ' + response)

    } catch (e) {
      console.log(e)
      console.error(e.message);
    }
  }

  function handleChangeForm(newValue: React.SetStateAction<Props> | Props) {
    setAddNaver(newValue);
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
          handleOpen={handleOpen} 
          handleClose={handleClose} 
          naver={addNaver} 
          inputChange={handleChangeForm}
        />
        <Grid item xs={12} direction="row-reverse">
          <button className={styles.addNaverSaveButton} onClick={AddNaver}>Salvar</button>
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
          
          <span>Naver criado com sucesso!</span>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default AddNaver;
