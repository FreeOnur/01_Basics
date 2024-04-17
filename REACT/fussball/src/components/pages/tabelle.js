import React from 'react'
import Tables from '../tables'
import Slidebar from '../slidebar'

export default function Tabelle() {
  return (
    <div>
        <div className=' w-32 h-56 text-[]'><Slidebar link={"/"} name="Home" /></div>
        <Tables/>
    </div>
  )
}
