import React from 'react';
export function InfoArea() {


  return (
    <div>
        <div className='infos'> 
            <div className='info-item atendimento'>
                 <h1> Atendimento </h1>
                 <p className='warning'> Fique por dentro de nossos horários <br/> de atendimento para sua conveniência.</p>
                 <b> Segunda - Sexta </b>
                 <p> 7h - 19h</p>
                 <b> Sábado</b>
                 <p> 7h - 12h30</p>
            </div>
            <div className='info-item local'>
                <h1> Localização </h1>
                <p className='warning'>  <i class="fa fa-home" aria-hidden="true"></i> 
                 {''} Rua Paraná, S/N  <br/>
                   Quadra 9, Lote 11 e 12 <br/>
                 Eldorado Prolongamento <br/>
                 Rio Verde - GO
                </p>
            </div>
            <div className='info-item contato'>
                 <h1> Contato </h1>
                    <i className='fa fa-phone first'/> <a href='#'> {' +55 (64)3822-0000'}</a> <br/>
                    <i className='fa fa-whatsapp'/> <a href='#'> {' +55 (64)93822-0000'}</a>  <br/>
                    <i className='fa fa-envelope-o'/> <a href='#'> {' clinica@email.com'}</a> <br/>
                   
            </div>
            <div className='info-item social'>
                 <h1>Redes Sociais </h1>
                 <i className='fa fa fa-instagram'/> <a href='#'> {' clinica'}</a> 
            </div>
        </div>
    </div>
  );
}