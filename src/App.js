import React,{useState} from 'react';

const App = () => {
  const images=[
    './image/lake.jpg',               //1
     './image/landscape.jpg',         //2
     './image/sunset.jpg',            //3
     './image/21.jpg',                //4
     './image/lake.jpg',              //5
  ]

  const [current,setCurrent]=useState(0)

  const nextSlide =()=>{
    setCurrent(current===images.length-1 ? 0 : current + 1)
    console.log(current);
  }
  const prevSlide =()=>{
    setCurrent(current===0 ? images.length -1 : current - 1)
    console.log(current);
  }


  return (
    <div>
      <h2>IMAGE CAROUSEL PROJECT</h2>
      <div className='slider'>
        <div className='left-arrow' onClick={prevSlide}>⬅</div>
        <div className='right-arrow' onClick={nextSlide}>⮕</div>
        {
          images.map((item,index)=>
            current===index && (
            
              <div className='slide' key={item}>
                <img src={item} alt='landscape' />
              </div>

            )
          )
        }
        
        
      </div>
      
    </div>
  );
};

export default App;