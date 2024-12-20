import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);

  function countTrack() {
    setCount(count+1);
  }

  return (
      <div className='card-container'>

        <Card trackCount={countTrack}>
          <p>Button got clicked {count} times</p>
        </Card>
      </div>
  )
}

export default App
