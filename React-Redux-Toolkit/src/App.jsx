import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/CounterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleActionClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input type="Number" value={amount} placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleActionClick}>Action with payload</button>
    </div>
  )
}

export default App
