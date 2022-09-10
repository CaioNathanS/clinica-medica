import React from 'react';
import { CardArea } from './components/CardArea/CardArea';
import { InfoArea } from './components/InfoArea/InfoArea';

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