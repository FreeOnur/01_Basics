import React from 'react'
import Tables from '../tables'
import Slidebar from '../slidebar'
export default function Tabelle() {
  return (
    <div className="w-full h-full bg-cover bg-bg-table flex  justify-center items-center">
      
        
        <div className='text-[30px] flex justify-center items-center absolute top-0 left-2/4 bg-gray-700 w-48 h-24 border-2 border-black text-[]'><Slidebar link={"/"} name="Home" /></div>
        <div className='relative top-24 left-14'><Tables/></div>
        
    </div>
  )
}
