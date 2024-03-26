import React from 'react'

export default function Liste({text, text1, text2}) {
  return (
    <div class='w-60 m-3'>
        
        <div class='text-white p-5 py-4 hover:bg-teal-800 bg-teal-600 m-0.5 h-18'>{text}</div>
        <div class='text-white p-5 py-4 hover:bg-teal-800 bg-teal-600 m-0.5 h-17'>{text1}</div>
        <div class='text-white p-5 py-4 hover:bg-teal-800 bg-teal-600 m-0.5 h-17'>{text2}</div>
    </div>
    
  )
}
