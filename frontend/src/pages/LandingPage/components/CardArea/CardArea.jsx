import React from 'react';
import { Card } from './Cards';
export function CardArea() {


  return (
    <div>
        <h1 className='title'> Landing Page </h1>
        <div className='cards'>
          <Card title='Consultas' icon='fa fa-user-md' pageRoute='consultas' />
          <Card title='Exames' icon='fa fa-heartbeat' pageRoute='exames' />
          <Card title='Quem Somos' icon='fa fa-info' pageRoute='sobre' />
          {/*  <Card title='Contato' icon='fa fa-whatsapp' pageRoute='contato'/> */}
          <Card title='Agendamento' icon='fa fa-address-book-o' pageRoute='agendamento' />
        </div>
    </div>
  );
}