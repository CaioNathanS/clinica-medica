import React from 'react';
import { Header } from '../../components/Header/Header';
import { InfoArea } from '../../components/InfoArea';
import { CardArea } from './components/CardArea/CardArea';
import './LandingPage.css';

export function LandingPage() {


  return (
    <div className='landingPage-Container'>
      <Header/>
      <hr/>
       <CardArea/>
        <hr/>
      <InfoArea/>
       
    </div>
  );
}