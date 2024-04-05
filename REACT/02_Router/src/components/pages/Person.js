import React from 'react'
import { Link, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function Person() {
  const navigate = useNavigate();
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
