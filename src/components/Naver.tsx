import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import styles from '../styles/components/Naver.module.css'

interface Props {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string
}

interface NaverProps {
  naver: Props;
}

const Naver: React.FC<NaverProps> = (props) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function calculate_age(date: string) { 
    var dateForm = new Date(date)
    var diff_ms = Date.now() - dateForm.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return(
    <div>
      <Card className={styles.card} elevation={0}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            image={props.naver.url}
            style={{height: '280px'}}
          />
        </CardActionArea>
        <CardContent>
          <h1>{props.naver.name}</h1>
          <span>{props.naver.job_role}</span>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="editar">
            <Icon>create</Icon>
          </IconButton>
          <IconButton aria-label="deletar">
            <Icon>delete</Icon>
          </IconButton>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
      >
      <div className={styles.modalNaver}>
        <img src={props.naver.url} alt={props.naver.name}/>

        <div>
          <CardActions className={styles.modalNaverIcons}>
          <IconButton aria-label="fechar modal" style={{marginLeft: 'auto'}} onClick={handleClose}>
            <Icon>close</Icon>
          </IconButton>
          </CardActions>
          <DialogContent>
            <h1>{props.naver.name}</h1>
            <span>{props.naver.job_role}</span>

            <h2>Idade</h2>
            <span>{calculate_age(props.naver.birthdate) + ' anos'}</span>

            <h2>Tempo de empresa</h2>
            <span>{calculate_age(props.naver.admission_date) > 1 ? calculate_age(props.naver.admission_date) + ' anos' : ' 1 ano'}</span>

            <h2>Projetos que participou</h2>
            <span>{props.naver.project}</span>
          </DialogContent>
          <CardActions disableSpacing className={styles.modalNaverIcons}>
            <IconButton aria-label="deletar">
              <Icon>delete</Icon>
            </IconButton>
            <IconButton aria-label="editar">
              <Icon>create</Icon>
            </IconButton>
          </CardActions>
        </div>  
      </div>
      </Dialog>
    </div>  
  )
}

export default Naver;