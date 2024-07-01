import React from "react";

const Button = ({
  onClick,
  theme,
  children,
  p
}) => {
  return (
     <button
       className={`shadow-md text-white flex items-center gap-3 font-bold rounded-lg ${theme} whitespace-nowrap`}
       onClick={onClick}
       style={{padding: `${p}`}}
     >

      {children}
    </button>
  );
};

export default Button;
