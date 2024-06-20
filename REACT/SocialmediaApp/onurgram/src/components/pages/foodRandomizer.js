import React from 'react'
import Sidebar from '../sidebar'
import Food_Random from '../Food-random/Food_Random'

export default function FoodRandomizer() {
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex items-center justify-center'> <Food_Random/></div>
      
    </div>
  )
}
