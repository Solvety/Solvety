import React from "react";

const ProgressBar = ({ progress, label }) => {
  const labelPosition = `${progress}%`;
  
  return (
    <div className="relative shadow-sm w-full m:w-[70%]">
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>
      
      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={progress}
        className="block rounded-full bg-white"
        style={{ overflow: "hidden" }}
      >
        <span
          className="block h-3 rounded-full bg-[#37D8AD] text-center text-[10px]/4"
          style={{ width: `${progress}%` }}
        ></span>
      </span>
      
      <span
        className="absolute top-3"
        style={{ left: labelPosition }} 
      >
        <span className="rounded-md bg-white shadow-md text-center text-black w-8 h-8 flex justify-center items-center">
          {label}
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
