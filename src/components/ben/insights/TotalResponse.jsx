import React from "react";
import { darkTheme, switchTheme } from "../../../data/data";
import { useTheme } from "../../../context/ThemeContext";

const TotalResponse = ({TableBody, TableHeading}) => {
  const { resTheme } = useTheme()
  return (
    <section className={`w-full ${switchTheme('bg-white', darkTheme, resTheme)} 785:w-[40%] rounded-xl h-fit mx-2 md:mx-0`}>
      <div className="bg-[#8E5DF5] rounded-xl py-5">
        <p className="text-center py-3 text-white">
          Total responses (participants)
        </p>
        <h1 className="font-bold text-white text-center text-4xl md:text-5xl py-3">
          50
        </h1>
      </div>
      {/* table */}
      <div className="px-5 w-full overflow-x-auto">
      <table className="w-full  my-10 mx-auto table-auto">
        {/* table head */}
        <thead className="text-center">
          <tr>
            {Object.keys(TableHeading).map((key, index) => (
              <th className="pb-3" key={index}>{TableHeading[key].text}</th>
            ))}
          </tr>
        </thead>
        {/* table body */}
        <tbody className="w-full text-center">
          {TableBody.map((data, index) => (
            <tr key={index}>
              <td className="py-2">{data.perDay}</td>
              <td className="py-2">{data.responses}</td>
              <td className="py-2">{data.perState}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default TotalResponse;
