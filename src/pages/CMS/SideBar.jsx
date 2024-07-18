import React, { useState } from "react";
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

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

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
      icon: <FaHome />,
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

  return (
    <div className="w-full flex flex-col fixed top-0 bottom-0 overflow-y-auto h-screen  994:w-1/4 994:rounded-br-[30px] border border-black">
      <div className="flex items-center justify-between p-4 994:flex-col 994:items-center 994:justify-center">
        <Link to="/" className="994:mb-4">
          <img src={Logo} alt="logo of solvety" className="h-[40px] md:h-[70px] " />
        </Link>
        <button
          className="text-2xl  994:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`flex-col items-center gap-1.5 w-[70vw] bg-[#8E5DF5B5] flex-1 p-5 overflow-x-hidden transition-transform transform ${isOpen ? 'translate-x-[0]' : '-translate-x-full'}  994:translate-x-0 994: w-[300px] ` }>
      <div className="md:w-[231px] bg-white flex mt-5 mb-10 shadow-md px-[14px] py-[10px] gap-[8px] rounded-[8px] items-center">
          <IoSearch />
          <input type="search" 
                 placeholder="Search" 
                 className="border-0 flex-1 focus:outline-none w-[40%] md:w-[70%]" />
        </div>

        <div className="flex flex-col items-center w-full gap-3">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? " w-[200px] sm:w-full flex items-center gap-2 p-2 rounded-[4px] shadow-[0px_0px_2px_1px_#fff] "
                  : "w-[200px] sm:w-full flex items-center gap-2 p-2 hover:shadow-[0px_0px_2px_1px_#fff] rounded-[4px] transition-all  "
              }
            >
              {index === 1 ? item.icon : <img src={item.icon} alt={item.name} className="h-6 w-6" />}
              <div>{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
