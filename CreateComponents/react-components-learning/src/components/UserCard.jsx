import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='card-container' style={props.style}>
        <img className='card-img' src="https://picsum.photos/id/20/100/100" alt="" />
        <h2 className='card-name'>{props.username}</h2>
        <p className='card-desc'>{props.carddesc}</p>
    </div>
  )
}

export default UserCard