import React, { useContext } from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(themeContext);

    function handleTheme(){
        if(theme==='light')
         setTheme('dark')
        else
        setTheme('light')
    }

  return (
    <div>
        <button onClick={handleTheme}>
            Change Theme
        </button>
        {theme}
    </div>
  )
}

export default ChildC