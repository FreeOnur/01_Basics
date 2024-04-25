import React from 'react'
import Tables from '../tables'
import Slidebar from '../header'
import Header from '../header'
export default function Tabelle() {
  return (

    <div className="bg-fixed w-full relative top h-1000px max-h-full bg-full m-0 grayscale-[80%] bg-bg-table flex  justify-center items-center">

      <div> <div className='text-[30px] border-solid flex justify-center items-center absolute top-0 left-2/4  bg-gray-800 hover:bg-gray-700 w-48 h-24 border-2 border-black '><Header link={"/"} name="Home" /></div></div>

      <div className='relative font-bold opacity-80 top-24 left-14'><Tables /></div>

    </div>
  )
}
