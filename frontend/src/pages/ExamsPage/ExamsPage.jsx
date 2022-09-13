import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './ExamsPage.css';
export function ExamsPage() {

  const listaExames=[
    'Endoscopia',
    'Colonoscopia',
    'Teste Ergométrico',
    'Mapa',
    'Holter',
    'Ecocardiograma',
    'Raio-x',
    'Eletrocardiograma',
  ]
  const listaUltrassom=[
    'Doppler por Membro',
    'Doppler Carótida',
    'Tireóide',
    'Abdômen Total',
    'Abdômen Superior',
    'Vias Urinárias',
    'Próstata',
    'Músculo Esquelético',
  ]
 
 

  return (
    <div className='examsPage-Container'>
      <Header/>
        {/*<button className='ExamsPage-agendamentoButton'>
          <i className='fa fa-whatsapp'/>  Agendamento
          </button>
          <button  className='ExamsPage-voltarButton' onClick={()=> navigate('/') }>
          <i className='fa fa-long-arrow-left'/> 
            Voltar
        </button> */}

      <div className='examsPage-grid'>
        <div>
        <h1 className='examsPage-title'> Exames </h1>
      {
        listaExames.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
        </div>
        <div>
        <h1 className='examsPage-title'> Ultrassom </h1>
      {
        listaUltrassom.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
        </div>
      

      </div>
    
    
      <hr/>
      <InfoArea/>
        
    </div>
  );
}