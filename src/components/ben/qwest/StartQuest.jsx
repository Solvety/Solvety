import React from "react";
import avatar from "../../../assets/images/qwestavatar1.png";
import "../../../assets/css/startquest.css";
import { useTheme } from "../../../context/ThemeContext";

const StartQuest = ({ onYesClick, onNoClick }) => {
  const { resTheme } = useTheme();
  return (
    <section className={`w-full h-screen relative text-white flex flex-col justify-center items-center`}>
      {/* box */}
      <div className={`question bg-[#F2ECFF] p-[2rem] 992:p-[3rem] w-fit rounded-[1rem] 992:rounded-[3rem] space-y-5 992:space-y-14 mb-0 992:mb-[8rem]`}>
        <h1 className="text-black font-bold">
          Would you like to take a quest survey?
        </h1>
        <div className="flex gap-3 justify-around 992:justify-between">
          <button
            onClick={onYesClick}
            className="bg-white text-black text-[1.2rem] font-bold rounded-lg py-1 px-5 992:px-12"
          >
            Yes
          </button>
          <button
            onClick={onNoClick}
            className="bg-white text-black text-[1.2rem] font-bold rounded-lg py-1 px-5 992:px-12"
          >
            No
          </button>
        </div>
      </div>

      {/* circles */}
      <div className="child space-y-3 992:absolute 992:right-[22rem] 992:mt-[13rem]">
        <div
          className="circle bg-white mt-5 w-[77px] h-[58px]"
          style={{ borderRadius: "50%" }}
        ></div>
        <div
          className="circle bg-white w-[40px] h-[30px] ml-14 top-14"
          style={{ borderRadius: "50%" }}
        ></div>
      </div>

      {/* images */}
      <div className="child 992:absolute ml-40 992:ml-0 992:right-[9rem] 992:bottom-5">
        <img
          src={avatar}
          alt="avatar"
          className="w-[60px] 992:w-[120px] object-cover object-center animated-avatar"
        />
      </div>
    </section>
  );
};

export default StartQuest;
