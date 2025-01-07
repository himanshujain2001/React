import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'

const themeContext = createContext();
const usernameContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState({name: "React course"});

  return (
    <div>
    <usernameContext.Provider value={username}> 
       <themeContext.Provider value={{theme, setTheme}}>
         <div className='container-div' style={{backgroundColor: theme==='light' ? 'peachpuff':'grey'}}>
           <ChildA />
         </div>
       </themeContext.Provider>
       </usernameContext.Provider>
    </div>
  )
}

export default App
export {themeContext}
export {usernameContext}