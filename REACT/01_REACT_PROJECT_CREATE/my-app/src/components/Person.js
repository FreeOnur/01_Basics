
import React from 'react'

export default function Person({name, description}) {
    console.log('name:' ,name)
  return (
    <div className='people'>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}
