import React, { useEffect, useState } from 'react'
import Card_v2 from './Card_v2';


export default function PeopleContainer() {
const [people, setPeople] = useState([])
const [filteredpeople, setFilteredPeople] = useState([])

useEffect(() => {
   fetch("https://660576fd2ca9478ea180618d.mockapi.io/Person").then(res => res.json().then(data=> {
    setPeople(data);
    setFilteredPeople(data)
   })) 
},[])
const filterpeople = (filter) => {
    var filtered = people.filter(person => person.name.includes(filter))
    document.getElementById("butt").addEventListener("click", () => {
     filtered = people.filter(person =>person.jobTitle.includes(filter))
     document.getElementById("butt").innerHTML = "JobTitel" 
     setFilteredPeople(filtered);
    })
    setFilteredPeople(filtered)

 }

    

  return (
    <div className='p-8'>
      <h1 className=' font-bold font-medium'>People</h1>
        <div className='border'>
            <button id='butt' className="border bg-green-400 left-32 top-7 fixed">
                      Name
                    </button>
            <input className=' border p-6 bg-cyan-400 text-white fixed w-full'
              type="text"
              placeholder='Search'
                
              onChange={(element)=>{
                    console.log(element.target.value);
                    filterpeople(element.target.value);
              }}/>
        </div>
      <div className=' grid grid-cols-4 lg:grid-cols-4 gap-2 p-32'>
        {filteredpeople.map(element => {
            return <Card_v2 name={element.name} title={element.jobTitle} imageUrl={element.avatar}/>
        })}
      </div>
    </div>
  )
}
