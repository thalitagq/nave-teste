import { CardActions, Container, Dialog, DialogActions, DialogContent, Grid, Icon, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import styles from '../styles/components/AddNaver.module.css'
import NaverForm from './NaverForm';

interface AddNaverProps{
  hideAdd(): any;
}

const AddNaver: React.FC<AddNaverProps> = (props) => {

  const [open, setOpen] = useState(false);

  // modal confirmação
  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return(
    <Container maxWidth="md">
      <Grid container spacing={3} className={styles.addNaverContainer}>
        <Grid item xs={12}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <IconButton aria-label="voltar" onClick={props.hideAdd}>
              <Icon className={styles.addNaverButtonIcon}>arrow_back_ios_new</Icon>
            </IconButton>
            <h1>Adicionar Naver</h1>
          </div>
        </Grid>
        <NaverForm handleOpen={handleOpen} handleClose={handleClose}/>
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
