import React, { useContext } from 'react'
import ChildC from './ChildC'
import {usernameContext} from '../App'

const ChildB = () => {
    const username = useContext(usernameContext)
  return (
    <div>
        <ChildC />
        Username:{username.name}
    </div>
  )
}

export default ChildB