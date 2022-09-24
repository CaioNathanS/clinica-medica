import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import { CardArea } from './components/CardArea/CardArea';
import './LandingPage.css';

import iconConsults from '../../assets/consultsIcon.png'
import car from '../../assets/car.png'
import odontoIcon from '../../assets/odontoIcon.png'
import { Card } from './components/CardArea/Cards';

export function LandingPage() {

  const list = [
    'Início',
    'Serviços',
    'Consultas',
    'Contato'
  ]
  return (
    <div className='landingPage-Container'>
      <Header/>
    
      <div className='teste'>
              <Carousel showArrows={false}  >
                <div>
                    <img src={car} />
                </div>
             </Carousel>
             <div className='try'>
      {
        list.map((element,index)=>(
          <Card title='Consultas' imagem={iconConsults} bg={index&1 ? true : false}> {element} </Card>
        ))
      }
      </div>
      </div>
    
      
      {
        /* 
        <Header/>
         <CardArea/>
          <hr/>
        <InfoArea/>
        
        */
      }
       
    </div>
  );
}