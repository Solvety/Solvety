import { Circle, EllipsisVertical } from "lucide-react";
import React, { useEffect, useState } from "react";
import { darkTheme, switchTheme } from "../../../data/data";
import { useTheme } from "../../../context/ThemeContext";
import toast from "react-hot-toast";

const ResearchCard = ({
  status,
  index,
  statusColorBg,
  statusColorText,
  title,
  options,
  researchType,
  numberReached,
  amountSpent,
  id,
}) => {
  const { resTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const tailwindEffect = `transition-all duration-500 ease-in-out transform`;

  useEffect(() => {
    const closeSidebar = (event) => {
      if (open && !event.target.closest(".options")) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeSidebar);

    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, [open]);

  const handleCopyLink = (id) => {
    const baseUrl = window.location.origin;
    const link = `${baseUrl}/researcher/insight/${id}`;
    navigator.clipboard.writeText(link);
    toast.success(`Link copied: ${link}`);
  };

  return (
    <section className="relative">
      <div
        className={`cursor-pointer rounded-2xl w-full ${tailwindEffect} p-5 border-[1px] mb-5 ${switchTheme(
          "bg-white border-gray-400",
          darkTheme + " text-white border-gray-700",
          resTheme
        )}`}
      >
        <div className="flex justify-between">
          <span
            className={`inline-flex items-center justify-center gap-1 rounded-full px-2.5 py-0.5`}
            style={{ backgroundColor: statusColorBg }}
          >
            <Circle color={statusColorText} size={16} fill={statusColorText} />
            <p
              className={`whitespace-nowrap text-sm font-semibold`}
              style={{
                color: switchTheme(statusColorText, statusColorText, resTheme),
              }}
            >
              {status}
            </p>
          </span>
          <EllipsisVertical
            onClick={handleToggle}
            className="options cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-lg md:text-2xl py-3">{title}</h1>
        <div className="w-full flex flex-col 531:flex-row justify-between">
          <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
            <h2 className="font-semibold text-lg 531:text-xl">Research type</h2>
            <p className="text-md 531:text-lg font-semibold">{researchType}</p>
          </div>
          <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
            <h2 className="font-semibold text-lg 531:text-xl">
              Number reached
            </h2>
            <p className="text-md 531:text-lg font-semibold">{numberReached}</p>
          </div>
          <div className="text-center w-full flex justify-between 531:grid 531:w-fit">
            <h2 className="font-semibold text-lg 531:text-xl">Amount spent</h2>
            <p className="text-md 531:text-lg font-semibold">{amountSpent}</p>
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`option ${switchTheme(
            "bg-white",
            "bg-white",
            resTheme
          )} text-black rounded-lg py-2 absolute top-11 -right-3 shadow-md z-50`}
        >
          {options.map((value, index) => (
            <p
              className="cursor-pointer px-3 font-semibold pt-1 border-[1px] border-x-transparent border-t-transparent hover:border-b-[#763cbd] border-b-gray-300"
              key={index}
              onClick={() => {
                if (value === "Copy Link") {
                  handleCopyLink(id);
                } else {
                  console.log(value);
                }
              }}
            >
              {value}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResearchCard;
