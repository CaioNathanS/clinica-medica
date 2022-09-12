import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './ConsultsPage.css';
export function ConsultsPage() {

  const navigate = useNavigate();

 

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
      <hr/>
      <div className='table'> 
        <div className='tableHeader'>
          <p>Consultas</p>
          <p>Exames</p>
          <p>Procedimentos</p>
        </div>
        <div className='tableBody'>
        <div>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        </div>
        <div>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        </div>
        <div>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        <p>Consultas</p>
        <p>Exames</p>
        <p>Procedimentos</p>
        </div>
      </div>
      </div>
      <hr/>
      <InfoArea/>
        
    </div>
  );
}