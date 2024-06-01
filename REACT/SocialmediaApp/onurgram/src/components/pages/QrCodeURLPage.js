import React from 'react'
import Sidebar from '../sidebar'
import QrCode_URL from '../QR-code/qrCode_URL'

export default function QrCodeURLPage() {
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex justify-center items-center'><QrCode_URL/></div>
      
    </div>
  )
}
