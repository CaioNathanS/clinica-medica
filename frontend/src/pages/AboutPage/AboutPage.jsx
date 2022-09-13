import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import './AboutPage.css';
export function AboutPage() {

  return (
    <div className='aboutPage-Container'>
      <Header/>
        <h1 className='aboutPage-title'> Sobre nós </h1>
        <p className='aboutPage-text'> 
        A Clínica chegou à Rio verde com diversas especialidades médicas e exames, tudo em um único lugar a preço popular.<br/>
Com estrutura nova e completa, contamos com profissionais capacitados e equipamentos para um diagnóstico preciso,<br/>
incluindo sala de exames, laboratórios, consultórios médicos, sala de espera, WI-FI e atendimento personalizado.<br/>
Agende sua consulta!
        </p>
        <div className='wppButton'>
          <a href='https://wa.me/XXXXXXXX'>
          <button ><i className='fa fa-whatsapp'> </i> Agendar</button>
          </a>
        
        </div>
       
        <hr/>
      <InfoArea/>
    </div>
  );
}