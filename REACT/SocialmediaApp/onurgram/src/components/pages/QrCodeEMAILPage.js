import React from 'react'
import Sidebar from '../sidebar'
import QrCode_EMAIL from '../QR-code/qrCode_EMAIL'

export default function QrCodeEMAILPage() {
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex justify-center items-center'><QrCode_EMAIL/></div>
      
    </div>
  )
}
