// FileUpload.js
import React, { useState } from "react";
import { switchTheme } from "../../../../data/data";
import { useTheme } from "../../../../context/ThemeContext";


const LinearScale = () => {
  const { resTheme } = useTheme();
  const [startPoint, setStartPoint] = useState("1");
  const [endPoint, setEndPoint] = useState("10");
  const [startPointLabel, setStartPointLabel] = useState("");
  const [endPointLabel, setEndPointLabel] = useState("");

  return (
    <div className="px-5 mt-5 md:mt-3">
      <div className="flex gap-10">
        {/*startPoint select */}
        <select
          className="bg-transparent outline-none font-semibold text-lg text-[rgb(99,99,135)]"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <h1 className="font-semibold text-lg text-[#636387]">To</h1>

        {/* endPoint select */}
        <select
          className="bg-transparent outline-none font-semibold text-lg text-[#636387]"
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      {/* labels */}
      {/* startPointLabel */}
      <div className="flex gap-3 my-5">
        <h1 className="font-semibold pl-1 text-lg text-[#636387]">{startPoint}</h1>
        <input
          type="text"
          className={`border-x-0 ${switchTheme('placeholder:text-[#636387] border-b-gray-400','placeholder:text-[#7673D8] border-b-[#7673D8]', resTheme)} w-full placeholder:text-xl md:w-[70%] border-b-[1px] focus:outline-none bg-transparent  px-2 py-1 mr-2`}
          value={startPointLabel}
          placeholder="Label (optional)"
          onChange={(e) => setStartPointLabel(e.target.value)}
        />
      </div>
      {/* endPointLabel */}
      <div className="flex gap-3 mb-5">
        <h1 className="font-semibold pl-1 text-lg text-[#636387]">{endPoint}</h1>
        <input
          type="text"
          className={`border-x-0 ${switchTheme('placeholder:text-[#636387] border-b-gray-400','placeholder:text-[#7673D8] border-b-[#7673D8]', resTheme)} w-full placeholder:text-xl md:w-[70%] border-b-[1px] focus:outline-none bg-transparent px-2 py-1 mr-2`}
          value={endPointLabel}
          placeholder="Label (optional)"
          onChange={(e) => setEndPointLabel(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LinearScale;
