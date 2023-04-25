import React from 'react'
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import '../style/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import { SupervisorAccount } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat'
import HeaderOptions from '../components/HeaderOptions';
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="linkedin_icon" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={SupervisorAccount} title='My Network'/>
        <HeaderOptions Icon={ChatIcon} title='Chat'/>
        <HeaderOptions Icon={NotificationsIcon} title='Notication' />
      </div>
    </div> 

  )
}

export default Header