import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './ConsultsPage.css';
export function ConsultsPage() {

  const listaConsultas=[
    'Urologia',
    'Cardiologia',
    'Ginecologia e Obstetrícia',
    'Oftalmologia',
    'Pediatria',
    'Pneumologia',
    'Gastro',
    'Reumatologia',
    'Ortopedia',
    'Neuro Pediatria',
    'Psiquiatria',
    'Vascular/Angiologia',
    'Otorrinolaringologia',
    'Cirurgia Geral',
    'Clínico Geral',
    'Nutrição',
    'Fonoaudiologia',
    'Psicologia',
  ]
 

  return (
    <div className='consultsPage-Container'>
      <Header/>
        {/*<button className='consultsPage-agendamentoButton'>
          <i className='fa fa-whatsapp'/>  Agendamento
          </button>
          <button  className='consultsPage-voltarButton' onClick={()=> navigate('/') }>
          <i className='fa fa-long-arrow-left'/> 
            Voltar
        </button> */}
    
      <h1 className='consultsPage-title'> Consultas </h1>
      {
        listaConsultas.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
      <hr/>
      <InfoArea/>
        
    </div>
  );
}