import React, { useEffect, useState } from 'react';

export default function Food_Random() {
  const [rotation, setRotation] = useState(0);

  const clickRotation = () =>{
    const randomRotation = Math.floor(Math.random() * 3000 + 12000)
    setRotation(randomRotation)
  }
  let l = document.getElementById("wheel");
  const lol = () => {
    
    if(l){l.addEventListener('transitionend', ()=> {
      console.log("hallo")
    })}
    
    
  }
  lol()
  return (
    <div className='size-[800px]'>
      <textarea className='absolute right-[0px] m-[100px] top-[30%]'></textarea>
      <button onClick={clickRotation}>click me</button>
      <button className='p-[30px] border border-black' onClick={() => setRotation(-120)}>Reset</button>
      <button onClick={lol}>dasf</button>
      <div>
        <div id='wheel' className='h-[800px] border-8 border-white rounded-full ease-in-out' style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 7s'  }}>
        <div class="absolute top-[50%] left-[50%] w-[390px] h-0.5 bg-black origin-left rotate-[30deg]"></div>
        <div class="absolute top-[50%] left-[50%] w-[390px] h-0.5 bg-black origin-left rotate-[60deg]"></div>
        </div>
      </div>
    </div>
  );
}