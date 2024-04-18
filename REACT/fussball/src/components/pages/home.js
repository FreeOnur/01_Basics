import React from 'react'

import Slidebar from '../slidebar'

export default function Home() {
  return (<div className="w-full relative top h-1000px max-h-full bg-full m-0 grayscale-[80%] bg-gradient-to-r from-orange-500 to-red-500 flex  justify-center items-center">
              <h1 className=' opacity-0 hover:duration-700 hover:opacity-100 hover:animate-ping text-[100px]'>Meine Fußball Seite</h1>   
    <div className=' text-[30px] border-solid flex justify-center items-center absolute top-0 left-[51%]  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Slidebar link={"./table"} name="Tabelle" /> </div>
    <div className=' text-[30px] border-solid flex justify-center items-center absolute top-0 left-[41%]  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Slidebar link={"/"} name="Home" /></div>
    
    </div>
  )
}
