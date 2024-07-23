import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
import '../../assets/css/cms/style.css';
import Box from "../../components/mahtot/cms/Box";

function HomePage() {
  const [dropdown, setDropdown] = useState(false);
  const [userType, setUserType] = useState('researcher');
  const [isOpen, setIsOpen] = useState(false);
  const itemValues = [
    {
      item: 'Homepage Views & Visits',
      value: '3000',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Homepage Bounce-Off rate',
      value: '30%',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Average Sign-up Rate',
      value: '50%',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Avg. Product Session Count',
      value: '2 Hrs',
      bgColor: '#ECE064D4'
    },
    {
      item: 'Average Referral Count',
      value: '6',
      bgColor: '#ECE064D4'
    },
    {
      item: 'Average Escrow Amount',
      value: '$500',
      bgColor: '#ECE064D4'
    },
    {
      item: 'Research Count',
      value: '150',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Avg. Research Rate',
      value: '5',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Avg. Customer Life & Value',
      value: '3yrs and $5,000',
      bgColor: '#8E5DF5BF'
    },
    {
      item: 'Avg. Research Count Per User',
      value: '5',
      bgColor: '#ECE064D4'
    },
    {
      item: 'Net Promoter Score',
      value: '60% = 9-10',
      bgColor: '#ECE064D4'
    }
  ];

  const handleBtnClick = (type) => {
    setUserType(type);
  };

  const handleDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={`cms-container bg-[#F4F4F4] min-h-screen flex flex-col overflow-x-hidden ${dropdown?'overflow-y-hidden':''}`}>
      <div className="cms-top z-10 h-[100px]">
        <Header handleDropDown={handleDropDown} dropdown={dropdown} />
      </div>

      <div className="flex">
        <div className={`cms-side-bar overflow-x-hidden relative z-30 ${dropdown ? 'fixed top-0 left-0 right-0 bottom-0' : ''}`}>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} dropdown={dropdown} setDropdown={setDropdown} />
        </div>

        {/* main content */}
        <div className={`flex flex-col mt-4 ml-4 left-3 relative 994:left-[30%] ${dropdown ? 'fixed top-0 left-0 right-0 overflow-y-hidden z-[-10]' : ''}`}>
          <div className="flex text-[16px] flex-col sm:text-[24px] 280:flex-row gap-10 994:text-[36px]">
            <button
              onClick={() => handleBtnClick('researcher')}
              className={`w-auto h-[54px] 994:w-[25vw] 994:h-[94px] border border-black-[0.25px] shadow-[0px_4px_4px_0px_#00000040] px-3 transition-colors ${userType === 'researcher' ? 'bg-white border-white ' : 'bg-inherit '}`}
            >
              Researcher
            </button>
            <button
              onClick={() => handleBtnClick('participant')}
              className={`w-auto h-[54px] 994:w-[25vw] 994:h-[94px] border border-black-[0.25px] shadow-[0px_4px_4px_0px_#00000040] px-3 transition-colors ${userType === 'participant' ? 'bg-white' : 'bg-inherit'}`}
            >
              Participant
            </button>
          </div>

          {/* key and values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
            {itemValues.map((element, index) => (
              <Box key={index} item={element.item} val={element.value} bgColor={element.bgColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
