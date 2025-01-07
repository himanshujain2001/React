import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
  }

  return (
    <div>
      About Page
      <button onClick={handleClick}>Go To Home Page</button>
    </div>
  )
}

export default About