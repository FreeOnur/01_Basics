import React from 'react'
import Tables from '../tables'
import Slidebar from '../slidebar'
export default function Tabelle() {
  return (
    
    <div className="w-full relative top h-1000px max-h-full bg-full m-0 grayscale-[80%] bg-bg-table flex  justify-center items-center">
      
       <div> <div className='text-[30px] border-solid flex justify-center items-center absolute top-0 left-2/4  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Slidebar link={"/"} name="Home" /></div></div> 
       
        <div className='relative opacity-80 font-bold top-24 left-14'><Tables/></div>
        
    </div>
  )
}
