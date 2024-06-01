import React from 'react'
import Sidebar from '../sidebar'
import QrCode_SMS from '../QR-code/qrCode_SMS'

export default function QrCodeSMSPage() {
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex justify-center items-center'><QrCode_SMS/></div>
      
    </div>
  )
}
