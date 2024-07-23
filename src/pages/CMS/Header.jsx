import { useState, useEffect } from "react"
import Logo from "../../assets/images/Logo.png"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Header({handleDropDown, dropdown}) {
  return (
    <div className={`cms-header z-10 ${dropdown ? 'fixed top-[0] left-0 right-0  overflow-hidden' : ''}`}>
      <div className={`cms-logo 994:mb-4 994:hidden ${dropdown?'hidden':''} p-4`}>
        <Link to="/">
          <img src={Logo} alt="logo of solvety" className="h-10 md:h-16"/>
        </Link>
      </div>

      <div className="cms-menu-icon ml-auto p-5 z-0" onClick={handleDropDown} title="menu">
        {dropdown ? <IoMdClose size={'2rem'} /> : <CiMenuFries size={'2rem'}/>}
      </div>
    </div>
  )
}

export default Header;
