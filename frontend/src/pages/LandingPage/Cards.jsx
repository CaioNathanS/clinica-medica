import React from 'react';

export function Card({title,icon}) {

console.log(icon)
  return (
    <div className='card'>
        <div>
            <i className={`${icon}`}></i>
        </div> 
        <div>
           <p> {title} </p> 
        </div>  
       
    </div>
  );
}