import React, { useEffect, useState } from 'react';

export default function Food_Random() {
  const [rotation, setRotation] = useState(0);
  const [textValueArr, setTextValueArr] = useState("")
  const clickRotation = () =>{
    const randomRotation = Math.floor(Math.random() * 3000 + 12000)
    setRotation(randomRotation)
  }
  let wheel = document.getElementById("wheel");
  const whenTransitioned = () => {
    
    if(wheel){wheel.addEventListener('transitionend', ()=> {
      alert("hallo")
    })}
    
    
  }

  whenTransitioned()
  let list = textValueArr.split('\n');
  console.log(list)
  return (
    <div className='size-[800px]'>
      <button onClick={clickRotation} className='p-[30px] border border-black relative left-[800px]'>Spin!</button>
      <button className='p-[30px] border border-black ml-[100px] relative left-[400px]' onClick={() => setRotation(-120)}>Reset</button>

        <textarea className='relative left-[500px] top-[300px]' onChange={(e) => {setTextValueArr(e.target.value)}}></textarea>
      {/* <div className='absolute right-[100px] mt-[100px] border border-black'>
        <div className=' mb-[50px] overflow-auto'>Which food of which country do you want to choose from:</div>
      <fieldset>
        <label for='türkei'>Türkei</label>
        <input type='checkbox' value={""}/>
      </fieldset>
      </div> */}
      
      <div>
        <div id='wheel' className='h-[800px] border-8 border-white rounded-full ease-in-out' style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 7s'  }}>
        <div class="absolute top-[50%] left-[50%] w-[390px] h-0.5 bg-black origin-left rotate-[30deg]"></div>
        <div class="absolute top-[50%] left-[50%] w-[390px] h-0.5 bg-black origin-left rotate-[60deg]"></div>
        </div>
      </div>
    </div>
  );
}