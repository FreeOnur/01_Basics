import React from 'react'

export default function Food_Random() {
    let rotation = Math.random() * 360 + 360
  return (
    <div className='size-[800px]'>
      <div>
        <div id='wheel' className='h-[800px] border-8 border-white rounded-full rotate-180  animate-rotate ease-in-out' >
            <h1>hello</h1>
        </div>
      </div> 
    </div>
  )
}
