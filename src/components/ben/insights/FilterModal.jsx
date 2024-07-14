import React, { useState } from "react";
import {
  Box,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { X } from "lucide-react";

const GridButtonGroup = ({ gridConfig }) => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (index) => {
    setSelectedButtons((prevSelectedButtons) =>
      prevSelectedButtons.includes(index)
        ? prevSelectedButtons.filter((i) => i !== index)
        : [...prevSelectedButtons, index]
    );
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      {gridConfig.map((config, index) => (
        <button
          className={`font-semibold py-2 ${
            config.col
          } text-center py-0 px-4 rounded-lg ${
            selectedButtons.includes(index)
              ? "bg-[#5D5FEF] text-white"
              : "bg-slate-200"
          }`}
          key={index}
          onClick={() => handleButtonClick(index)}
        >
          Question {index + 1}
        </button>
      ))}
    </div>
  );
};

const FilterSelect = ({ label, value, onChange, options }) => (
  <FormControl variant="outlined" className="mt-4 w-1/2">
    <InputLabel id={`${label}-label`}>{label}</InputLabel>
    <Select
      labelId={`${label}-label`}
      id={`${label}-select`}
      value={value}
      onChange={onChange}
      label={label}
      sx={{ borderRadius: 4 }}
    >
      {options.map((option, index) => (
        <MenuItem value={option.value} key={index}>
          <em>{option.label}</em>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const FilterModal = ({ open, handleClose }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const gridConfigs = [
    [{ col: "col-start-2 col-end-5" }, { col: "col-start-5 col-end-8" }],
    [
      { col: "col-start-3 col-end-6" },
      { col: "col-start-6 col-end-9" },
      { col: "col-start-9 col-end-12" },
    ],
    [{ col: "col-start-4 col-end-7" }, { col: "col-start-7 col-end-10" }],
  ];

  const filterOptions = {
    "By Participant": [
      { value: "", label: "Male" },
      { value: 10, label: "Option 1" },
      { value: 20, label: "Option 2" },
      { value: 30, label: "Option 3" },
    ],
    "By Location": [
      { value: "", label: "Lagos" },
      { value: 10, label: "Option 1" },
      { value: 20, label: "Option 2" },
      { value: 30, label: "Option 3" },
    ],
    "By Device Used": [
      { value: "", label: "Android" },
      { value: 10, label: "Option 1" },
      { value: 20, label: "Option 2" },
      { value: 30, label: "Option 3" },
    ],
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: {
            display: `none`,
          },
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="bg-white absolute top-[50%] left-[50%] w-[98%] rounded-xl shadow-xl -translate-y-1/2 -translate-x-1/2 mx-auto p-4  md:right-0 md:max-w-[35%] md:max-h-[100%] md:-translate-x-0 md:mr-12"
        sx={{}}
      >
        <section className="p-4">
          <div className="p-0 flex items-center justify-between">
            <h1 className="font-bold text-xl">Analytics Filter</h1>
            <span className="cursor-pointer" onClick={handleClose}>
              <X size={30} />
            </span>
          </div>
          <div className="space-y-4 mt-4">
            {gridConfigs.map((config, index) => (
              <GridButtonGroup gridConfig={config} key={index} />
            ))}
          </div>
          <section className="flex flex-col gap-2 mt-4">
            {Object.keys(filterOptions).map((label, index) => (
              <div key={index}>
                <p className="pb-4">{label}</p>
                <FilterSelect
                  label={label}
                  value={selectedValue}
                  onChange={handleChange}
                  options={filterOptions[label]}
                />
              </div>
            ))}
          </section>
        </section>
      </Box>
    </Modal>
  );
};

export default FilterModal;
