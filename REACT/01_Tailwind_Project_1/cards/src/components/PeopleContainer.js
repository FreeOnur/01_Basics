import React, { useEffect, useState } from 'react'
import Card_v2 from './Card_v2';


export default function PeopleContainer() {
const [people, setPeople] = useState([])
useEffect(() => {
   fetch("https://660576fd2ca9478ea180618d.mockapi.io/Person").then(res => res.json().then(data=> {
    setPeople(data);
   })) 
},[])
  return (
    <div>
      <h1>People</h1>
      <div className=' grid grid-cols-4 lg:grid-cols-4 gap-2'>
        {people.map(element => {
            return <Card_v2 name={element.firstName} title={element.jobTitle} imageUrl={element.avatar}/>
        })}
      </div>
    </div>
  )
}
