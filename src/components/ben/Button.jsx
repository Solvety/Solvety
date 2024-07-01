import React from "react";

const Button = ({
  textColor,
  bgColor,
  hoverTextColor = "text-purple-400",
  hoverBgColor = "bg-white",
  onClick,
  py="py-3",
  theme,
  children,
}) => {
  return (
     <button
       className={`shadow-md w-1/2 px-8 ${py} font-bold rounded-lg hover:${hoverTextColor} hover:${hoverBgColor} ${textColor} ${bgColor} ${theme} whitespace-nowrap`}
       onClick={onClick}
     >

      {children}
    </button>
  );
};

export default Button;
