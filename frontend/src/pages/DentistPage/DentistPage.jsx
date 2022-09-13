import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './DentistPage.css';
export function DentistPage() {

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
    <div className='dentistPage-Container'>
      <Header/>
    
      <h1 className='dentistPage-title'> Odontologia </h1>
      {
        listaConsultas.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
      <hr/>
      <InfoArea/>
        
    </div>
  );
}