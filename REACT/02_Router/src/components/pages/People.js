import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function People() {
  return <div>
    <h1>Hello People</h1>
    <Link to="/" state={{name:"Hans", age:17}}> Person </Link>


  </div >;

}