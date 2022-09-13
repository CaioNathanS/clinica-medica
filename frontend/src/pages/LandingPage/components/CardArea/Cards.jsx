import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Card({title,pageRoute,imagem}) {

  
  const navigate = useNavigate();
  return (
    <div className='card' 
      role='button' 
      tabIndex={0} 
      onClick={()=>{ if(pageRoute) navigate(`${pageRoute}`)}}>
      <div className='ap'>
          <img className='imagem' src={imagem} alt='icone'/>
      </div> 
      <div>
        <p> {title} </p> 
      </div>  
    </div>
  );
}