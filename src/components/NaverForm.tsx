import { Grid } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { transformToDate } from "../services/functions"
import { Props } from "./Naver"

interface NaverFormProps{
  naver?: Props | null;
  inputChange(arg0: Props): any;
  formType: 'update' | 'create'
}

const NaverForm: React.FC<NaverFormProps> = (props) => {
  
  const [naver, setNaver] = useState<Props>(props.naver as Props);

  const handleInputChange = (event: { target: { id: any; value: any } }) => {
    setNaver((prevState) => ({
       ...prevState,
       [event.target.id]: event.target.value
    }));
  }

  useEffect(() => {
    props.inputChange(naver)
  }, [handleInputChange])

  return(
    <>
      <Grid item xs={12} sm={6}>
        <div >
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Nome" id="name" value={naver?.name} onChange={handleInputChange}/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="birthdate">Data de nascimento</label>
            {props.formType === 'update'
              ? <input type="date" placeholder="Idade" id="birthdate" value={transformToDate(naver?.birthdate)} onChange={handleInputChange}/>
              : <input type="date" placeholder="Idade" id="birthdate" value={naver?.birthdate} onChange={handleInputChange}/>
            }
          </fieldset>
    
          <fieldset>
            <label htmlFor="project">Projetos que participou</label>
            <input type="text" placeholder="Projetos que participou" id="project" value={naver?.project} onChange={handleInputChange}/>
          </fieldset>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div >
          <fieldset>
            <label htmlFor="job_role">Cargo</label>
            <input type="text" placeholder="Cargo" id="job_role" value={naver?.job_role} onChange={handleInputChange}/>
          </fieldset>
    
          <fieldset>
            <label htmlFor="admission_date">Data de admissão</label>
            {props.formType === 'update'
              ? <input type="date" placeholder="Idade" id="admission_date" value={transformToDate(naver?.admission_date)} onChange={handleInputChange}/>
              : <input type="date" placeholder="Idade" id="admission_date" value={naver?.admission_date} onChange={handleInputChange}/>
            }
          </fieldset>
    
          <fieldset>
            <label htmlFor="url">URL da foto do Naver</label>
            <input type="text" placeholder="URL da foto do Naver" id="url" value={naver?.url} onChange={handleInputChange}/>
          </fieldset>
        </div>  
      </Grid>
    </>  

  )
}

export default NaverForm


