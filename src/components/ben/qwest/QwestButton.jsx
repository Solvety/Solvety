import React, { useState } from "react";

const QwestButton = ({ bgColor = "#8E5DF5", color = "white", hidden = false, onClick, children = "Qwest" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-10 992:px-12 py-1.5 992:py-2 shadow-lg rounded-lg transform transition-transform duration-300 ${
        isClicked ? "scale-110" : "scale-100"
      } ${hidden ? 'block sm:hidden' : ''}`}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
};

export default QwestButton;
