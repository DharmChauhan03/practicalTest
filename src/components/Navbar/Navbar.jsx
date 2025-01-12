import React from 'react'
import './Navbar.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <MenuOutlinedIcon className="navbar-icon" />
        <p>Cards</p>
      </div>
      <div className="navbar-right">
        <AccountCircleOutlinedIcon className="navbar-icon" />
        <KeyboardArrowDownOutlinedIcon className=" icon-right" />
      </div>
    </div>
  )
}

export default Navbar
