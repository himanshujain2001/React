import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child.jsx'

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Child name={name} changeName={setName} />
      <Child name={name} changeName={setName} />
      <p>This is a parent {name}</p>
    </div>
  )
}

export default App
