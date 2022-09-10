import React from 'react';
import { Card } from './Cards';
import './LandingPage.css';
export function LandingPage() {


  return (
    <div className='landingPage-Container'>
        <h1 className='title'> Landing Page </h1>
        <div className='cards'>
          <Card title='Consultas' icon='fa fa-user-md' />
          <Card title='Exames' icon='fa fa-heartbeat' />
          <Card title='Quem Somos' icon='fa fa-info' />
          <Card title='Contato' icon='fa fa-whatsapp' />
          <Card title='Agendamento' icon='fa fa-address-book-o' />
        </div>
    </div>
  );
}