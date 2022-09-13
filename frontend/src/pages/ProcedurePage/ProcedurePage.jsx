import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './ProcedurePage.css';
export function ProcedurePage() {

  const listaProcedimentos=[
    'Hérnia',
    'Vesícula',
    'Botox',
    'Aplicação de Varizes',
    'Orelha rasgada',
    'Retirada de Verrugas',
    'Retirada de Lipomas',
    'Unha encravada',
    'Melasma',
  ]
 

  return (
    <div className='procedurePage-Container'>
      <Header/>
        {/*<button className='consultsPage-agendamentoButton'>
          <i className='fa fa-whatsapp'/>  Agendamento
          </button>
          <button  className='consultsPage-voltarButton' onClick={()=> navigate('/') }>
          <i className='fa fa-long-arrow-left'/> 
            Voltar
        </button> */}
    
      <h1 className='procedurePage-title'> Cirurgias e Procedimentos </h1>
      {
        listaProcedimentos.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
      <hr/>
      <InfoArea/>
        
    </div>
  );
}