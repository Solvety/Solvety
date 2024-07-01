import { SearchIcon } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { switchTheme, darkTheme } from "../../data/data"



const Searchbar = ({
  placeholder = "Placeholder...",
  handleSearch,
  showIcon = true,
  padding= 'px-5',
}) => {
  
const { resTheme } = useTheme();


  return (
    <div
      className={`flex w-full items-center gap-2 my-5 rounded-xl px-2 md:${padding} focus-within:border-[#8E5DF5] shadow-sm ${switchTheme('bg-[#F0F0F5]', darkTheme + " border-gray-400", resTheme)} border-[2px]`}
    >
      {showIcon && <SearchIcon color={switchTheme('black','white',resTheme)}/>}
      <input
        type="text"
        placeholder={placeholder}
        onClick={handleSearch}
        className={`w-full px-3 py-2 md:py-3 ${switchTheme('placeholder:text-black', darkTheme + " placeholder:text-white", resTheme)}  placeholder:font-bold placeholder:text-md md:placeholder:text-xl bg-transparent focus:outline-none`}
      />
    </div>
  );
};

export default Searchbar;
