import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
import Profile from './Profile';

function SidebarChat({chat,isHoverVisible,handleProfilePicSelection,handleProfilePicSelectionClose}) {

  return (
    <div className='sidebarChat'>
      <button className='profileButton' onClick={() => handleProfilePicSelection(chat.profile)}>
        <Avatar src = {chat.profile} />
      </button>
      <div className='sidebarChat__Info'>
          <h2>{chat.name}</h2>
          <p>{chat.message}</p>
      </div>
      {isHoverVisible && <Profile name={chat.name} handleProfilePicSelectionClose={handleProfilePicSelectionClose} profile_pic={chat.profile} />}
    </div>
  )
}

export default SidebarChat