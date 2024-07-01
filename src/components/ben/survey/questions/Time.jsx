import React, { useState, useEffect } from "react";
import { Clock4, XIcon } from "lucide-react";
import { switchTheme } from "../../../../data/data";
import { useTheme } from "../../../../context/ThemeContext";

const Time = () => {
  const [longText, setLongText] = useState("");
  const [placeholder, setPlaceholder] = useState("00-00");
  const [isFocused, setIsFocused] = useState(false);
  const { resTheme } = useTheme();

  const handleOptionChange = (value) => {
    console.log(value);
    setLongText(value);
  };

  const removeText = () => {
    setLongText("");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 1000);
  };

  return (
    <div className="px-3 py-3 mt-5 md:mt-3">
      <div className="flex items-center mb-2">
        <input
          type="text"
          className={`border-x-0  ${switchTheme('placeholder:text-[#636387] border-gray-400','placeholder:text-[#7673D8] border-b-[#7673D8]', resTheme)}   placeholder:text-xl  border-b-[1px] focus:outline-none bg-transparent  px-2 py-1 mr-2`}
          disabled={true}
          value={longText}
          placeholder={placeholder}
          onChange={(e) => handleOptionChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Clock4 color={switchTheme('black','white',resTheme)} />
        {isFocused && (
          <XIcon
            size={20}
            color={switchTheme("black", "white", resTheme)}
            className="cursor-pointer"
            onClick={removeText}
          />
        )}
      </div>
    </div>
  );
};

export default Time;
