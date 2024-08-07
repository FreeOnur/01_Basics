import React, { useEffect, useState } from 'react';

export default function Food_Random() {
  const [rotation, setRotation] = useState(0);
  const [output, setOutput] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    loadData();
});


     const loadData = () => {
        
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((result) => {
            result.json().then((data) => {
              const names = data.meals.map(meal => meal.strMeal);
              setFoodList(names);
                
                
    
            })
        })
    }

  const clickRotation = () =>{
    const randomRotation = Math.floor(Math.random() * 3000 + 12000)
    setRotation(randomRotation)
  }
  let wheel = document.getElementById("wheel");
  
    if (wheel) {
      wheel.addEventListener('transitionend', () => {
        let listLength = foodList.length;
        let aufteilZahl = 360 / listLength;
        let Rotation = ((rotation % 360) + 360) % 360;
        let sectionIndex = Math.floor(Rotation / aufteilZahl);
       
        setOutput(<div className=' border bg-white border-black size-[100px]'> Gewonnen: {foodList[sectionIndex]}</div>)
        
      });
    }
    console.log(output)
  

  let listLength = foodList.length
  let aufteilZahl = 360 / listLength;
  let teilZahl = 0;
  
  const wheelDivs = [];
  for (let index = 0; index < foodList.length; index++) {
    teilZahl += aufteilZahl;
    wheelDivs.push(
      <div id={index} key={index} className="absolute top-[50%] left-[50%] w-[390px] h-0.5 bg-black origin-left" style={{ transform: `rotate(${teilZahl}deg)` }}><div className='relative bottom-[170px] rotate-[-30deg]'>{foodList[index]}</div></div>
    );
   
  }
  

  return (
    <div className='size-[800px]'>
      <button onClick={clickRotation} className='p-[30px] border border-black relative left-[800px]'>Spin!</button>
      <button className='p-[30px] border border-black ml-[100px] relative left-[400px]' onClick={() => setRotation(-120)}>Reset</button>

      <div id='output'>
      <div class="relative top-[800px] left-[400px] h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-black"></div>

        <div id='wheel' className='h-[800px] border-8 border-white rounded-full ease-in-out' style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 7s' }}>
          {wheelDivs}
        </div>
        <div>{output}</div>
      </div>
    </div>
  );
}