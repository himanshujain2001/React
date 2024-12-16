import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from "./components/UserCard"

function App() {

  return (
    <div className='cards-container'>
        <UserCard username="First Card" carddesc="This is card 1" style={{"border-radius":"10px"}}/>
        <UserCard username="Second Card" carddesc="This is card 2"/>
        <UserCard username="Third Card" carddesc="This is card 3"/>
    </div>
  )
}

export default App
