import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick(){
    alert("Button got clicked!");
  }

  function handleHover(){
    alert("Para got hovered!");
  }

  function handleSubmit(e){
    e.preventDefault(); // preventing default behaviour of submitting which is basically refreshing the page
    alert("Form get submitted.");
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
       <button onClick={handleClick} style={{"border-radius": "10px"}}>Click</button>
       <p onMouseOver={handleHover}>This is a para</p>
       <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default App
