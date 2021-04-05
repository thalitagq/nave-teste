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

  const [openShowNaver, setOpenShowNaver] = useState(false);
  const [openDeleteNaver, setOpenDeleteNaver] = useState(false);

  const handleOpen = (modal: string) => {
    if(modal === 'show'){
      setOpenShowNaver(true)
    }
    else if(modal === 'delete'){
      setOpenDeleteNaver(true)
    }
  };

  const handleClose = (modal: string) => {
    if(modal === 'show'){
      setOpenShowNaver(false)
    }
    else if(modal === 'delete'){
      setOpenDeleteNaver(false)
    }
    
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
        <CardActionArea onClick={() => handleOpen('show')}>
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
          <IconButton aria-label="deletar" onClick={() => handleOpen('delete')}>
            <Icon>delete</Icon>
          </IconButton>
          <IconButton aria-label="editar">
            <Icon>create</Icon>
          </IconButton>
        </CardActions>
      </Card>

      {/* modal show naver */}
      <Dialog
        open={openShowNaver}
        onClose={() => handleClose('show')}
        maxWidth='md'
      >
        <div className={styles.modalNaver}>
          <img src={props.naver.url} alt={props.naver.name}/>

          <div>
            <CardActions className={styles.modalNaverIcons}>
              <IconButton aria-label="fechar modal" style={{marginLeft: 'auto'}} onClick={() => handleClose('show')}>
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
              <IconButton aria-label="deletar" onClick={() => handleOpen('delete')}> 
                <Icon>delete</Icon>
              </IconButton>
              <IconButton aria-label="editar">
                <Icon>create</Icon>
              </IconButton>
            </CardActions>
          </div>  
        </div>
      </Dialog>

      <Dialog
        open={openDeleteNaver}
        onClose={() => handleClose('delete')}
        maxWidth='md'
      >
        <DialogContent className={styles.modalDelete}>
          <h1>Excluir Naver</h1>
          <span>Tem certeza que deseja excluir este Naver?</span>
        </DialogContent>
        <DialogActions className={styles.modalButtons}>
          <button >Cancelar</button>
          <button>Excluir</button>
        </DialogActions>

      </Dialog>
    </div>  
  )
}

export default Naver;