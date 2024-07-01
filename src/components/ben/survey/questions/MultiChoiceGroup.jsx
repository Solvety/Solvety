import React, { useState } from "react";
import { ToggleLeft, ToggleRight, XIcon } from "lucide-react";
import { switchTheme } from "../../../../data/data";
import { useTheme } from "../../../../context/ThemeContext";

const MultiChoiceGroup = () => {
  const [groups, setGroups] = useState([{ options: [""] }]);
  const [toggle, setToggle] = useState(false);
  const { resTheme } = useTheme();

  const handleOptionChange = (groupIndex, optionIndex, value) => {
    const newGroups = [...groups];
    newGroups[groupIndex].options[optionIndex] = value;
    setGroups(newGroups);
  };

  const addOption = (groupIndex) => {
    const newGroups = [...groups];
    newGroups[groupIndex].options.push("");
    setGroups(newGroups);
  };

  const removeOption = (groupIndex, optionIndex) => {
    const newGroups = [...groups];
    newGroups[groupIndex].options.splice(optionIndex, 1);
    setGroups(newGroups);
  };

  const addGroup = () => {
    const newGroups = [...groups, { options: [""] }];
    setGroups(newGroups);
  };

  const removeGroup = (groupIndex) => {
    const newGroups = groups.filter((_, index) => index !== groupIndex);
    setGroups(newGroups);
  };

  const getPlaceholder1 = (index) => `Group ${index + 1}`;

  const getPlaceholder2 = (index) => `Option ${index + 1}`;

  const handleToggle = () => setToggle(true);

  const handleRemoveToggle = () => setToggle(false);

  return (
    <section className="w-full px-3 py-2">
      {groups.map((group, groupIndex) => (
        <div className={`w-full flex items-center`} key={groupIndex}>
          <div className="w-full flex flex-col md:flex-row mt-3">
            {/* Left section */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-2">
                <h1
                  className={`${switchTheme(
                    "text-[#636387]",
                    "text-[#7673D8]",
                    resTheme
                  )} font-bold text-md`}
                >
                  {groupIndex + 1}
                </h1>
                <input
                  type="text"
                  className={`${switchTheme(
                    "placeholder:text-gray-400 border-gray-400",
                    "placeholder:text-[#7673D8] border-[#7673D8]",
                    resTheme
                  )} border-x-0 placeholder:font-bold placeholder:text-lg w-full md:w-1/2 focus:border-b-[1px] focus:outline-none bg-transparent px-2 py-1 mr-2`}
                  placeholder={getPlaceholder1(groupIndex)}
                  onChange={(e) =>
                    handleOptionChange(groupIndex, 0, e.target.value)
                  }
                />
              </div>
            </div>
            {/* Right section */}
            <div className={`w-1/2 ${groupIndex > 0 ? "ml-0 md:ml-5" : ""}`}>
              {group.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  <input
                    type="radio"
                    className={`appearance-none rounded-full border-2 w-4 h-4 ${switchTheme(
                      "border-gray-400",
                      "border-[#7673D8]",
                      resTheme
                    )}`}
                  />
                  <input
                    type="text"
                    className={`border-x-0 w-full ${switchTheme(
                      "placeholder:text-black border-gray-400",
                      "placeholder:text-white border-[#7673D8]",
                      resTheme
                    )}  md:w-1/2 focus:border-b-[1px] focus:outline-none bg-transparent  px-2 py-1 mr-2`}
                    value={option}
                    placeholder={getPlaceholder2(optionIndex)}
                    onChange={(e) =>
                      handleOptionChange(
                        groupIndex,
                        optionIndex,
                        e.target.value
                      )
                    } // Update the corresponding option
                  />
                  {group.options.length > 1 && (
                    <XIcon
                      size={20}
                      color={switchTheme("black", "white", resTheme)}
                      className="cursor-pointer"
                      onClick={() => removeOption(groupIndex, optionIndex)}
                    />
                  )}
                </div>
              ))}
              <button
                className={`bg-transparent ${switchTheme(
                  "text-black",
                  "text-white",
                  resTheme
                )} px-3 rounded-md`}
                onClick={() => addOption(groupIndex)}
              >
                Add options
              </button>
            </div>
          </div>
          {groupIndex !== 0 && (
            <XIcon
              size={20}
              color={switchTheme("#8E5DF5", "white", resTheme)}
              className="groupRemover cursor-pointer"
              onClick={() => removeGroup(groupIndex)}
            />
          )}
        </div>
      ))}
      {/* add new group */}
      <button
        className="bg-transparent text-[#8E5DF5] px-3 py-1 rounded-md mt-2"
        onClick={addGroup}
      >
        <p className="underline underline-offset-8 font-bold text-lg decoration-[#7673D8]">
          Add another group
        </p>
      </button>
      {/*toggle required or not */}
      <div className="flex w-full gap-3 justify-center md:justify-end mt-10">
        <h1 className="font-bold text-lg text-gray-400">
          Require a response in each group
        </h1>
        <div onClick={toggle ? handleRemoveToggle : handleToggle}>
          {toggle ? (
            <ToggleRight size={32} strokeWidth={3} color="#8E5DF5" />
          ) : (
            <ToggleLeft size={32} strokeWidth={3} color="gray" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MultiChoiceGroup;
