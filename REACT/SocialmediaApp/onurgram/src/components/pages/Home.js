import React from 'react'
import Sidebar from '../sidebar'
import QrCode_WLAN from '../QR-code/qrCode_WLAN'



export default function Home() {
  
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex justify-center items-center'><QrCode_WLAN/></div>
      
    </div>
    
  )
}
