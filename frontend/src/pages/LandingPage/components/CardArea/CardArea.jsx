import React from 'react';
import { Card } from './Cards';
export function CardArea() {


  return (
    <div>
        <div className='cards'>
          <Card title='Consultas' icon='fa fa-user-md' pageRoute='consultas' />
          <Card title='Exames' icon='fa fa-heartbeat' pageRoute='exames' />
          <Card title='Quem Somos' icon='fa fa-info' pageRoute='sobre' />
          {/*  <Card title='Contato' icon='fa fa-whatsapp' pageRoute='contato'/> */}
          <Card title='Agendamento' icon='fa fa-whatsapp' pageRoute='agendamento' />
        </div>
    </div>
  );
}