import React from 'react'
import { Link } from 'react-router-dom'

export default function ContextualPanel() {
  return (
    <>
      <ul className="context-panel">
        <li className="element">
          <Link to="/home">home</Link>
        </li>
        <li className="element">
          <Link to="/home?context=existing">existing user</Link>
        </li>
        <li className="element">
          <Link to="/home?context=new">new user</Link>
        </li>
      </ul>
      <style>
        {`
        .context-panel { display: flex; padding: 16px; list-style: none;} 
        .element {padding-right: 12px;}
        `}
      </style>
    </>
  )
}
