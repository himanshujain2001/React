import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
        {props.children}
        <button id='btn' onClick={props.trackCount}>Click here</button>
    </div>
  )
}

export default Card