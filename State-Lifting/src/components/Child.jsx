import React from 'react'
import './Child.css'

const Child = (props) => {
  return (
    <div>
        <input type="text" onChange={(e) => props.changeName(e.target.value)}/>
        <p>This is a child {props.name}</p>
    </div>
  )
}

export default Child