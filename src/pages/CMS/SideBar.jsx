import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import AcquisitionsIcon from "../../assets/images/cmsIcons/Acqu.png";
import ActivationIcon from "../../assets/images/cmsIcons/Activation.png";
import EngagementIcon from "../../assets/images/cmsIcons/engagement.png";
import ConversionIcon from "../../assets/images/cmsIcons/conversion.png";
import RetentionIcon from "../../assets/images/cmsIcons/retention.png";
import SummaryIcon from "../../assets/images/cmsIcons/summary.png";
import { IoSearch } from "react-icons/io5";
import Logo from "../../assets/images/Logo.png";

function SideBar({isOpen, setIsOpen, dropdown, setDropdown}) {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: "/cms/summary",
      name: "Summary",
      icon: SummaryIcon,
    },
    {
      path: "/",
      name: "Homepage",
      icon: <FaHome size={'1.5rem'}/>,
    },
    {
      path: "/cms/acquisitions",
      name: "Acquisitions",
      icon: AcquisitionsIcon,
    },
    {
      path: "/cms/activation",
      name: "Activation and Onboarding",
      icon: ActivationIcon,
    },
    {
      path: "/cms/engagement",
      name: "Engagement",
      icon: EngagementIcon,
    },
    {
      path: "/cms/conversion",
      name: "Conversion",
      icon: ConversionIcon,
    },
    {
      path: "/cms/retention",
      name: "Retention",
      icon: RetentionIcon,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && !event.target.closest('.sidebar')) {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown, setDropdown]);

  return (
    <div className={`994:fixed top-0 bottom-0 flex flex-col  994:h-screen ${dropdown?'w-[100vw] fixed':'w-[0] z-0' } sm:${dropdown?'w-[50vw]':'w-auto z-0' } overflow-y-auto 994:bg-white 994:w-1/4 md:rounded-br-[30px]  transition-transform transform 994:translate-x-0 z-[1000] `}>
      <div className={`p-4 ${dropdown?'block':'hidden' } 994:block`}>
        <Link to="/" className="994:mb-4">
          <img src={Logo} alt="logo of solvety" className="h-10 md:h-16" />
        </Link>
      </div>

      <div className={`sidebar z-40 flex flex-col items-center sm:relative 994:items-stretch gap-1.5 ${dropdown?'w-[auto]':'none w-[0px]'} 994:w-full bg-[#8E5DF5B5] flex-1 p-5 overflow-x-hidden transition-transform transform ${dropdown ? 'translate-x-0' : '-translate-x-full'} 994:translate-x-0 overflow-x-hidden`}>
        <div className="flex items-center w-[201px] sm:w-[231px] h-[44px] px-3 py-2 mt-5 mb-5 bg-white shadow-md md:w-56 rounded-md gap-2">
          <IoSearch />
          <input
            type="search"
            placeholder="Search"
            className="flex-1 border-0 focus:outline-none w-10"
          />
        </div>

        <div className="flex flex-col gap-3">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 p-2  w-[209px] md:w-[230px] rounded-md shadow-[0px_0px_2px_1px_#fff]"
                  : "flex items-center gap-2 p-2 w-[209px] md:w-[230px] rounded-md hover:shadow-[0px_0px_2px_1px_#fff] transition-all"
              }
            >
              {index === 1 ? item.icon : <img src={item.icon} alt={item.name} className="h-6 w-6" />}
              <div className="text-sm md:text-base">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
