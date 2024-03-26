import React from 'react'


export default function Card(props) {
  return (
    <div className='w-96 h-96'>
      <img src="https://www.w3schools.com/w3css/img_avatar3.png" className='m-8 size-96' alt="Avatar"></img>
        <div className='sbg-white w-96 h-32 shadow-2xl h-20 relative left-8 bottom-8'>
            <h1 className=' font-bold text-2xl m-8 relative top-6'> {props.name} </h1>
            <h1 className='text-xl m-8 relative top-4'>{props.job}</h1>
        </div>
    </div>
  )
}
