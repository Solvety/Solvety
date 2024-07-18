import { useState, useEffect } from "react"
import Logo from "../../assets/images/Logo.png"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Header({handleDropDown, dropdown}) {
  return (
    <div className="cms-header ">
        <div className="cms-logo">
           <Link to="/">
            <img src={Logo}
                    alt="logo of solvety"/>
                
           </Link>
              
        </div>

        <div className="cms-menu-icon"
             onClick={handleDropDown}
             title="menu">
          {dropdown?<IoMdClose size={'2rem'} /> : <CiMenuFries size={'2rem'}/>}
        </div>
    </div>
  )
}
export default Header