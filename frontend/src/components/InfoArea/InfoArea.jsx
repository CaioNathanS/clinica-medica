import React from 'react';
export function InfoArea() {


  return (
    <div>
        <div className='infos'> 
            <div className='info-item atendimento'>
                 <p className='info-title'> Atendimento </p>
                 <p className='warning'> Fique por dentro de nossos horários <br/> de atendimento para sua conveniência.</p>
                 <b> Segunda - Sexta </b>
                 <p> 7h - 19h</p>
                 <b> Sábado</b>
                 <p> 7h - 12h30</p>
            </div>
            <div className='info-item local'>
                <p className='info-title'> Localização </p>
                <p className='warning'>  <i class="fa fa-home" aria-hidden="true"></i>
                <a 
                target="_blank"
                href='https://www.google.com.br/maps/place/R.+Agenor+Diamantino,+1169+-+Parque+Bandeirante,+Rio+Verde+-+GO,+75905-670/@-17.7953219,-50.9173315,18.92z/data=!4m5!3m4!1s0x9361db70206f9c9d:0x1beece6da506c48a!8m2!3d-17.7950989!4d-50.9170239'>
                {''} Rua Agenor Diamantino  <br/>
                 N 1169 - Parque Bandeirante <br/>
                 Rio Verde - GO  <br/>
                 75905-670
                </a> 
                </p>
            </div>
            <div className='info-item contato'>
                 <p className='info-title'> Contato </p>
                    <i className='fa fa-phone first'/> <a href='tel:+55 (64)3822-0000'> {' +55 (64)3822-0000'}</a> <br/>
                    <i className='fa fa-whatsapp'/> <a href='tel:+55 (64)3822-0000'> {' +55 (64)93822-0000'}</a>  <br/>
                    <i className='fa fa-envelope-o'/> <a href='mailto:clinica@email.com'> {' clinica@email.com'}</a> <br/>
                   
            </div>
            <div className='info-item social'>
                 <p className='info-title'>Redes Sociais </p>
                 <i className='fa fa fa-instagram'/> <a href='#'> {' clinica'}</a> 
            </div>
        </div>
    </div>
  );
}