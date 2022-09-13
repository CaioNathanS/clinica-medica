import React from 'react';
import { useState } from 'react';
import { Card } from './Cards';
import iconConsults from '../../../../assets/consultsIcon.png'
import examesIcon from '../../../../assets/examesIcon.png'
import odontoIcon from '../../../../assets/odontoIcon.png'
import cirurgiaIcon from '../../../../assets/cirurgiaIcon.png'
import wppIcon from '../../../../assets/wppIcon.png'
import infoIcon from '../../../../assets/infoIcon.png'



export function CardArea() {
const [show,setShow]=useState(false);
  return (
    <div>
      
        <div className='cards'>
          <div onClick={()=> setShow(!show) }>
          <Card title='Consultas' imagem={iconConsults}  pageRoute='consultas' />
          </div>
   
          <Card title='Exames' imagem={examesIcon} pageRoute='exames' />
        
          <Card title='Cirurgias e Procedimentos' imagem={cirurgiaIcon} pageRoute='procedimentos' />
          <Card title='Odontologia' imagem={odontoIcon} pageRoute='odonto' />
          <Card title='Quem Somos' imagem={infoIcon} pageRoute='sobre' />
          <a href='https://wa.me/XXXXXXXX'> <Card title='Agendamento' imagem={wppIcon} />   </a>
          
        </div>
    </div>
  );
}