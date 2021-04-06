import { CardActions, Container, Dialog, DialogActions, DialogContent, Grid, Icon, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import {useLocation, useHistory} from "react-router-dom";
import styles from '../styles/components/AddNaver.module.css'
import { Props } from './Naver';
import NaverForm from './NaverForm';

const EditNaver: React.FC = () => {

  const [open, setOpen] = useState(false);
  const history = useHistory()
  const [naver, setEditNaver] = useState(useLocation().state as Props)

  // modal confirmação
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

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
          handleOpen={handleOpen} 
          handleClose={handleClose} 
          naver={naver} 
          inputChange={()=>setEditNaver}
        />
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
          <span>Naver atualizado com sucesso!</span>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default EditNaver;
