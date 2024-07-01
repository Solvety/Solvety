import React from "react";
import { darkTheme, switchTheme } from "../../../data/data";

const DropdownSelect = ({
  selectedStatus,
  setSelectedStatus,
  statusOptions,
  selectedTimePeriod,
  setSelectedTimePeriod,
  timePeriodOptions,
  resTheme
}) => {
  return (
    <div className="flex gap-2 flex-col 237:flex-row">
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className={`py-2 w-[70px] hidden md:grid outline-none rounded-md border-[2px] ${switchTheme(
          "border-gray-300",
          darkTheme + " text-gray-400 border-gray-700",
          resTheme
        )}`}
      >
        {statusOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        value={selectedTimePeriod}
        onChange={(e) => setSelectedTimePeriod(e.target.value)}
        className={`py-2 w-[90px] hidden md:grid outline-none rounded-md border-[2px] ${switchTheme(
          "border-gray-300",
          darkTheme + " text-gray-400 border-gray-700",
          resTheme
        )}`}
      >
        {timePeriodOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
