import React from 'react';
import { InfoArea } from '../../components/InfoArea';
import { CardArea } from './components/CardArea/CardArea';


import './LandingPage.css';
export function LandingPage() {


  return (
    <div className='landingPage-Container'>
       <CardArea/>
        <hr/>
      <InfoArea/>
       
    </div>
  );
}