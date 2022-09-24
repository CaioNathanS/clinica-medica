import React from 'react';
import { Header } from '../../components/Header/Header';
import './HomeScreen.css';
import bg from '../../assets/bg.jpg'
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';


export function HomeScreen() {
 
  const [img,setImg] = useState(bg);
  return (

  
    <div >
      <Header change={setImg} />
   
    <div className='carousel'>
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
                  <div>
                      <img src={img} alt='bg' />
                    
                  </div>
        </Carousel>
        <div className='newCards'>
          <div className='noBg'>
            card 1
          </div>
          <div className='bg'>
            card 2
          </div>
          <div className='noBg'>
            card 3
          </div>
          <div className='bg'>
            card 4
          </div>
    </div>
    </div>

  


    <div className='bottom'>
    <div className='bottomCardBg1'>
          btCard 1
        </div>
        <div className='bottomCardBg2'>
          btCard 2
        </div>
        <div className='bottomCard1'>
          btCard 3
        </div>
        <div className='bottomCard2'>
          btCard 4
        </div>

    </div>
     
        
    </div>
  );
}