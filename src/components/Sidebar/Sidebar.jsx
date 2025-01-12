import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=page_info" />

function Sidebar() {
  return (



    <div className="sidebar">
    <div className="sidebar-header">

        <img src={logo} alt="" height="60px" width="60px" />
      <p className="title-left">GIRIRAJ</p> <p className="title-right">DIGITAL</p>
     
      
      </div>
      <div className="sidebar-text">
      <p>Software & Web Development</p>
      
      <p>Company - Umbraco Gold Partner</p>
      </div>
     
    
    <ul className="sidebar-menu">
      <li className="menu-item ">
      <HomeOutlinedIcon className="menu-icon" /> Home
      </li>
      <hr />
      <li className="menu-item active">
      <CreditCardIcon className="menu-icon" /> Cards <ArrowForwardOutlinedIcon className="active-icon active" />
      </li>
      <hr />
      <li className="menu-item">
      <ReceiptIcon className="menu-icon" /> Transactions
      </li>
      <hr />
      <li className="menu-item">
      <SettingsOutlinedIcon className="menu-icon" /> Settings
      </li>
    </ul>
    <div className="sidebar-footer logout-button">
      <ul className='sidebar-menu'>
        <li className="menu-item"><LogoutIcon className="menu-icon" /> Logout</li>
      </ul>


      
    </div>
  </div>

    // <div>
    //   <div className="headding">
    //     <div className="logo"> <img src={logo} alt="" /> </div>

    //     <div className="title">
    //         <p className='title-bold'>GIRIRAJ</p>
    //         <p className="title-regular">DIGITAL</p>
    //     </div>
    //   </div>

    //   <div className="company-info">
    //     <p>software and web development</p>
    //     <p>company - umbraco gold partner</p>
    //   </div>

    //   <div className="menu-list">

    //   </div>


    // </div>
  )
}

export default Sidebar



