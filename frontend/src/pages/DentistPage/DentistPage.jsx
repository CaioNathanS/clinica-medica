import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './DentistPage.css';
export function DentistPage() {

  const listaOdontologica=[
    'Endodontia',
    'Periodontia', 
    'Ortodontia',
    'Clínica geral',
    'Implante dentário',
   ' Clareamento',
    'Toxina botulínica',
    'Lentes'
  ]
 

  return (
    <div className='dentistPage-Container'>
      <Header/>
    
      <h1 className='dentistPage-title'> Odontologia </h1>
      {
        listaOdontologica.map((element,index)=> <p className='list-row' key={index}> {element} </p>)
      }
      <hr/>
      <InfoArea/>
        
    </div>
  );
}