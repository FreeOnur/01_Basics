import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function Header(props) {
  return <div>
    <Link to={props.link}> {props.name} </Link>
  </div >;
}













