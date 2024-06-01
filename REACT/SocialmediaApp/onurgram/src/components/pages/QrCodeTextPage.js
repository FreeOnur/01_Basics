import React from 'react'
import Sidebar from '../sidebar'
import QrCode_Text from '../QR-code/qrCode_TEXT'

export default function QrCodeTextPage() {
  return (
    <div className=' bg-[#2B2B2B] h-[1020px] w-full'>
      <div><Sidebar/></div>
      
      <div className='flex justify-center items-center'><QrCode_Text/></div>
      
    </div>
  )
}
