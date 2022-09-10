import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Card({title,icon,pageRoute}) {
  const navigate = useNavigate();
  return (
    <div className='card' 
      role='button' 
      tabIndex={0} 
      onClick={()=>{ if(pageRoute) navigate(`${pageRoute}`)}}>
      <div>
          <i className={`${icon}`}></i>
      </div> 
      <div>
        <p> {title} </p> 
      </div>  
    </div>
  );
}