import React, { useEffect, useState } from "react";
import { darkTheme, switchTheme } from "../../../data/data";
import { useTheme } from "../../../context/ThemeContext";

const ResearchCardToast = ({ noResearchMessage }) => {
  const { resTheme } = useTheme();

  const tailwindEffect = `transition-all duration-500 ease-in-out transform`;

  return (
    <div
      className={`rounded-2xl w-full ${tailwindEffect} py-20 px-5 border-[1px] mb-5 ${switchTheme(
        "bg-white border-gray-400",
        darkTheme + " text-white border-gray-700",
        resTheme
      )}`}
    >
      <h1
        className={`${switchTheme(
          "text-black",
          "text-white",
          resTheme
        )} font-bold text-center text-2xl`}
      >
        {noResearchMessage}
      </h1>
    </div>
  );
};

export default ResearchCardToast;
