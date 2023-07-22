import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Profile.css'

function Profile({name,handleProfilePicSelectionClose, profile_pic}) {
    
  return (
    <div className="hover_profile" style={{ backgroundImage: `url(${profile_pic})` }}>
        <div className='profile_top'>
            <div className='profile_name'>
                {name}
            </div>
            <div>
                <CloseOutlinedIcon className='close_profile' onClick={handleProfilePicSelectionClose}/>
            </div>
        </div>
        
        <div className='profile_options'> 
            <div className='option_contents'>
                <CommentOutlinedIcon/>
            </div>
            <div className='option_contents'>
                <LocalPhoneIcon/>
            </div>
            <div className='option_contents'>
                <InfoOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Profile