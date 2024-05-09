import React, { useState } from 'react'
import menu from './images/speisekarte.png'

export default function Sidebar( props ) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (

    <div>
     
    <ul className={isOpen ? ' fixed bg-white w-[320px] h-[1920px] duration-300 translate-x-0' : ' relative duration-300 translate-x-[-275px] bg-white w-[320px] h-[1920px] '} >
    <div>
            <img onClick={toggleSidebar} className={isOpen ? 'size-5 relative left-2 top-2' : ' size-5 relative left-[285px] top-2 '} src={menu} alt='menu'/>
            </div>
          {Object.entries(props).map(([propNamem, propValue], index)=> (
            <li key={index} className='mb-[20px] '>
            <span className='text-[25px] drop-shadow-[10px] text-shadow'>{propValue}</span>
            </li>
          ))}
    </ul>
    
    </div>
  )
}
