import React, { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';
import { switchTheme } from '../../../../data/data';
import { useTheme } from '../../../../context/ThemeContext';

const MultipleChoiceQuestion = () => {
  const [options, setOptions] = useState([]); 
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
    <div className='px-3 py-2'>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            className={`border-x-0 ${switchTheme('placeholder:text-[#636387] border-b-gray-400','placeholder:text-[#7673D8] border-b-[#7673D8]', resTheme)} w-full md:w-[70%] focus:border-b-[1px] focus:outline-none bg-transparent   px-2 py-1 mr-2`}
            value={option}
            placeholder={getPlaceholder(index)}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          {options.length > 1 && (
            <XIcon
              size={20}
              color={switchTheme('black','white',resTheme)}
              className='cursor-pointer'
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

export default MultipleChoiceQuestion;
