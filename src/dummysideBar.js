import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
import Profile from './Profile';

function DummySidebarChat({profile,isHoverVisible,profile_pic,handleProfilePicSelection,handleProfilePicSelectionClose}) {

  return (
    <div>
      <div className='sidebarChat'>
      <button className='profileButton' onClick={() => handleProfilePicSelection(profile)}>
        <Avatar src = {profile} />
      </button>
      <div className='sidebarChat__Info'>
          <h2>Ethan Hunt</h2>
          <p>chat message</p>
      </div>
      {isHoverVisible && <Profile name='Ethan Hunt' handleProfilePicSelectionClose={handleProfilePicSelectionClose} profile_pic={profile_pic}/>}
     </div>
    </div>
  )
}

export default DummySidebarChat