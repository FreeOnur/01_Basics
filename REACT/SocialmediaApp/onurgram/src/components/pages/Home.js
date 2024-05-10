import React from 'react'
import Sidebar from '../sidebar'
import QrCode from '../qrCode'



export default function Home() {
  
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <Sidebar/>
     <QrCode/>
    </div>
    
  )
}
