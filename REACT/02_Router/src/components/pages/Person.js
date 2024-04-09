import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function Person() {
  const location = useLocation();
  const navigate = useNavigate();
  let arr = location.state
  if(arr.age <= 18) {
    console.log("Hans is " + arr.age + " years old")
  }
  return (
    <div>
      <h1>Hello Friends</h1>
      <Link to="./People"> People </Link>
      <div onClick={() => {
        navigate("/People")
      }}>go to People</div>
    </div >
  )

}
