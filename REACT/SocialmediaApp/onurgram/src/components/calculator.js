import React from 'react'
import Smallboxes from './calculator/Smallboxes'
import Smallboxesgray from './calculator/SmallboxesGray'
import Smallboxesdark from './calculator/Smallboxesdark'


export default function Calculator() {
    const addToDisplay = (value) => {
        
        document.getElementById('display').value += value;
      };
      const tan = (value) => {
        
        console.log(Math.tan(value))
      }
      
      
      
  return (
    <div>
         <input type='text' id='display' className='  w-[540px] h-[100px] border  absolute left-[50%] border-black'></input>
        <div className='flex'>
           
        <div className='grid grid-cols-3 '>
        <div  onClick={() => addToDisplay('1')}><Smallboxes text={"1"}/></div>
        <div onClick={() => addToDisplay('2')}><Smallboxes text={"2"}/></div>
        <div onClick={() => addToDisplay('3')}><Smallboxes text={"3"}/></div>
        <div onClick={() => addToDisplay('4')}><Smallboxes text={"4"}/></div>
        <div onClick={() => addToDisplay('5')}><Smallboxes text={"5"}/></div>
        <div onClick={() => addToDisplay('6')}><Smallboxes text={"6"}/></div>
        <div onClick={() => addToDisplay('7')}><Smallboxes text={"7"}/></div>
        <div onClick={() => addToDisplay('8')}><Smallboxes text={"8"}/></div>
        <div onClick={() => addToDisplay('9')}><Smallboxes text={"9"}/></div>
        <div onClick={() => addToDisplay('0')}><Smallboxes text={"0"}/></div>
        <div onClick={() => addToDisplay('.')}><Smallboxes text={"."}/></div>
        <div onClick={() => addToDisplay('-')}><Smallboxes text={"(-)"}/></div>
        <div onClick={() => addToDisplay('sin')}><Smallboxesdark text={"sin"}/></div>
        <div onClick={() => addToDisplay('cos')}><Smallboxesdark text={"cos"}/></div>
        <div onClick={() => addToDisplay('tan')}><Smallboxesdark text={"tan"}/></div>
        </div>

        <div className='grid grid-cols-1 '>
        <div><Smallboxesgray text={"*"}/></div>
        <div><Smallboxesgray text={"/"}/></div>
        <div><Smallboxesgray text={"%"}/></div>
        <div><Smallboxesgray text={"-"}/></div>
        <div><Smallboxesgray text={"+"}/></div>
        </div>
                
        <div className='grid grid-cols-1 '>
        <div onClick={() => {
            
            addToDisplay("tan()")
            let val = parseFloat(document.getElementById("display").value)
            let tan = Math.tan(val)
            console.log(tan)
        }}><Smallboxesdark text={"arcsin"}/></div>
        <div><Smallboxesdark text={"arccos"}/></div>
        <div><Smallboxesdark text={"arctan"}/></div>
        <div><Smallboxesdark text={"x^2"}/></div>
        <div><Smallboxesdark text={"x"}/></div>
        
        </div>
        <div className='grid grid-cols-1'>
        <div><Smallboxesdark text={"mod"}/></div>
        <div><Smallboxesdark text={"≈"}/></div>
        <div><Smallboxesdark text={"("}/></div>
        <div><Smallboxesdark text={")"}/></div>
        <div><Smallboxesdark text={"√"}/></div>
        </div>
        <div className='grid grid-cols-1'>
        <div><Smallboxesdark text={"!"}/></div>
        <div><Smallboxesdark text={"π"}/></div>
        <div><Smallboxesdark text={"e"}/></div>
        <div><Smallboxesdark text={"i"}/></div>
        <div><Smallboxesdark text={"Random"}/></div>
        <div onClick={()=> {
            let val = document.getElementById("display").value
            eval(val)
            
        }}> <Smallboxesgray text={"Enter"}/></div>
        </div>
        
        
        </div>
        
        
    </div>
  )
}
