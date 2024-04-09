import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function Person() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
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
