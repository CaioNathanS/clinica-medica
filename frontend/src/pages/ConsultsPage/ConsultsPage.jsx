import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoArea } from '../../components/InfoArea';
import './ConsultsPage.css';
export function ConsultsPage() {

  const navigate = useNavigate();

 

  return (
    <div className='consultsPage-Container'>
      <div className='consultsPage-actions'> 
        <h1 className='title'> Consultas </h1>
          <button className='consultsPage-agendamentoButton'>
          <i className='fa fa-whatsapp'/>  Agendamento
          </button>
          <button  className='consultsPage-voltarButton' onClick={()=> navigate('/') }>
          <i className='fa fa-long-arrow-left'/> 
            Voltar
          </button>
      </div>
      <div>
        Lista de Consultas
      </div>
      <hr/>
      <InfoArea/>
        
    </div>
  );
}