import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import car from '../../assets/car.png'
import bg from '../../assets/bg.jpg'
export function Header({change}) {

  const list = [
    {
      label:'Início',
      value:bg
    },
    {
      label:'Serviços',
      value:car,
    },
    {
      label:'Consultas',
      value:logo,
    },
    {
     label:'Contato',
     value:'edit',
    },
  ]

  return (
    <div className='header-Container'>
      <div className='logoImg'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='buttonsHeader'>
      {
        list.map((element)=>(
          <button onClick={()=> change(element.value)}> {element.label} </button>
        ))
      }
      </div>
    </div>
  );
}