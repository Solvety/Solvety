import React from "react";
import docs from "../../../assets/images/docs.png";
import excel from "../../../assets/images/excel.png";

const TableChart = () => {
  return (
    <section className="bg-transparent grid place-content-center h-fit p-2 sm:p-8 md:p-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mt-8 sm:mt-0">
        Export your data
      </h1>
      <p className="text-slate-500 text-center py-5">
        Download your data into a CSV file for use in other applications
      </p>
      <div className="text-center space-y-8 mt-8">
        <button className="w-full md:w-[90%] whitespace-nowrap text-white flex gap-3 items-center justify-center bg-[#4285F4] text-center py-1 px-3 rounded-md">
          <div className="bg-white rounded-md p-1.5 contents">
            <img src={docs} alt="google docs" />
          </div>
          Export to Google Sheets
        </button>
        <button className="w-full md:w-[90%] whitespace-nowrap text-white flex gap-3 items-center justify-center bg-[#2AAC6E] text-center py-1.5 px-3 rounded-md">
          <img src={excel} width={25} alt="Microsoft Excel" />
          Export to Microsoft Excel
        </button>
      </div>
    </section>
  );
};

export default TableChart;
