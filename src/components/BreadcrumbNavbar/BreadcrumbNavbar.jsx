import React from 'react'
import './BreadcrumbNavbar.css'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function BreadcrumbNavbar() {
  return (
    <div className='breadcrumb-navbar'>
      <span className='page-name'>Home </span>
      <ArrowForwardIosIcon className="breadcrumb-icon" />
      <span className="page-name">Cards</span>

    </div>
  )
}

export default BreadcrumbNavbar
