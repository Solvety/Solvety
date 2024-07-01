import React from "react";

const OptionSlider = ({viewOption, handleViewOption}) => {
  return (
    <div
      className={`cursor-pointer py-[3.5px] sm:py-[5px] px-7 sm:px-11 rounded-[0.2rem] ${
        viewOption ? "bg-[#F2C523]" : "bg-white"
      } mx-auto`}
      onClick={handleViewOption}
    ></div>
  );
};

export default OptionSlider;
