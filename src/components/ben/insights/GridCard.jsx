import React from "react";
import { darkTheme, switchTheme } from "../../../data/data";
import { useTheme } from "../../../context/ThemeContext";

const GridCard = ({
  label,
  value,
  borderColor,
  bgColor,
  valueColor,
  labelColor,
}) => {
  const { resTheme } = useTheme();
  return (
    <div
      className={`rounded-2xl w-[90%] h-[150px] 785:h-[200px] relative hover:shadow-xl`}
      style={{
        border: `3px solid ${borderColor}`,
        backgroundColor: `${switchTheme(bgColor, "transparent", resTheme)}`,
      }}
    >
      <p
        className={`pt-2 pl-2 font-bold`}
        style={{ color: `${switchTheme(labelColor, 'white', resTheme)}` }}
      >
        {label}
      </p>
      <h1
        className={`font-bold text-4xl md:text-5xl absolute left-1/2 -bottom-0 -translate-x-1/2 -translate-y-1/2 transform`}
        style={{ color: `${valueColor}` }}
      >
        {value}
      </h1>
    </div>
  );
};

export default GridCard;
