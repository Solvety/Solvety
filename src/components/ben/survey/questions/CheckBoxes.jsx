import React, { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { switchTheme } from "../../../../data/data";
import { useTheme } from "../../../../context/ThemeContext";
import "../../../../assets/css/checkboxes.css";
import Check from "../../../../assets/ben/check.png";

const CheckBoxes = () => {
  const [options, setOptions] = useState([""]);
  const { resTheme } = useTheme();

  useEffect(() => {
    handleOptionChange(0, "");
  }, []);

  const addOption = () => {
    const newOptions = [...options, ""];
    setOptions(newOptions);
    console.log("Options Array:", newOptions);
  };

  const removeOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
    console.log("Options Array:", newOptions);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    console.log("Options Array:", newOptions);
  };

  const getPlaceholder = (index) => {
    return `Option ${index + 1}`;
  };

  return (
    <div className="px-3 py-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          {/* checkbox */}
          <div className="relative mr-2 cursor-pointer">
            <input
              type="checkbox"
              className="relative peer shrink-0 appearance-none w-6 h-6 border-2 border-none outline-none rounded-md bg-gray-300 mt-1"
            />
            <img
              src={Check}
              alt="check"
              className="absolute top-1/2 transform -translate-y-1/2 ml-1 hidden peer-checked:block"
            />
          </div>
          <input
            type="text"
            className={`border-x-0 ${switchTheme('placeholder:text-[#636387] border-b-gray-400','placeholder:text-[#7673D8] border-b-[#7673D8]', resTheme)} w-full md:w-[70%] focus:border-b-[1px] focus:outline-none bg-transparent px-2 py-1 mr-2`}
            value={option}
            placeholder={getPlaceholder(index)}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          {options.length > 1 && (
            <XIcon
              size={20}
              color={switchTheme("black", "white", resTheme)}
              className="cursor-pointer"
              onClick={() => removeOption(index)}
            />
          )}
        </div>
      ))}
      <button
        className="bg-transparent text-[#8E5DF5] px-3 py-1 rounded-md mt-2"
        onClick={addOption}
      >
        Add options
      </button>
    </div>
  );
};

export default CheckBoxes;
