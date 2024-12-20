import React from 'react'
import './UseStateHook.css'
import { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='button-container'>
        <p>Button clicked {count} times.</p>
        <button id='button' onClick = {() => {setCount(count+1)}}>Click</button>
    </div>
  )
}

export default UseStateHook