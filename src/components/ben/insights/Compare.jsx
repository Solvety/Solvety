import { useTheme } from "../../../context/ThemeContext";
import { switchTheme } from "../../../data/data";
import { Download } from "lucide-react";
import ApexCharts from "./apex-charts";

export default function Compare() {
  const { resTheme } = useTheme();

  const bgColor = switchTheme("bg-white", "bg-[#2a2a27]", resTheme);
  const textColor = switchTheme("text-black", "text-white", resTheme);
  const borderColor = switchTheme(
    "border-gray-800",
    "border-[#9a9a98]",
    resTheme
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8" >Filter and Compare</h1>

      <div className="grid grid-cols-2 gap-8 mb-8" >
        <div className="grid grid-cols-1 gap-8 mb-8">
          <div className={`${bgColor} ${textColor} rounded-xl`}>
            <div className="mb-8">
              <h1 className="text-lg font-semibold py-6 px-2">
                Question 1
                <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                  multiple choice
                </span>
              </h1>
              <p className="px-2 mb-6">
                How inspired are you to be your best here?
              </p>
              <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                28 answered
              </span>
              <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                8 skipped
              </span>
            </div>
            <div className=""><ApexCharts type={"bar"} /></div>
          </div>

          <div className={`${bgColor} ${textColor} rounded-xl`}>
            <div className="mb-8">
              <h1 className="text-lg font-semibold py-6 px-2">
                Question 1
                <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                  multiple choice
                </span>
              </h1>
              <p className="px-2 mb-6">
                How inspired are you to be your best here?
              </p>
              <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                28 answered
              </span>
              <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                8 skipped
              </span>
            </div>
            <div className=""><ApexCharts type={"line"} /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-8">
          <div className={`${bgColor} ${textColor} rounded-xl`}>
            <div className="mb-8">
              <h1 className="text-lg font-semibold py-6 px-2">
                Question 2
                <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                  multiple choice
                </span>
              </h1>
              <p className="px-2 mb-6">
                How inspired are you to be your best here?
              </p>
              <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                28 answered
              </span>
              <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                8 skipped
              </span>
            </div>
            <div className=""><ApexCharts type={"bar"} /></div>
          </div>

          <div className={`${bgColor} ${textColor} rounded-xl`}>
            <div className="mb-8">
              <h1 className="text-lg font-semibold py-6 px-2">
                Question 2
                <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
                  multiple choice
                </span>
              </h1>
              <p className="px-2 mb-6">
                How inspired are you to be your best here?
              </p>
              <span className="text-black px-2 py-4 ml-2 rounded-lg bg-[#FFF3C7] ">
                28 answered
              </span>
              <span className="px-2 py-4 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
                8 skipped
              </span>
            </div>
            <div className=""><ApexCharts type={"line"} /></div>
          </div>
        </div>
      </div>
      <button className="bg-[#5E6A82] p-4 rounded-2xl flex text-white">
            <span className="text-[#FFF3C7] inline mr-2">
              <Download />
            </span>{" "}
            <span className="">Download All</span>
          </button>
    </div>
  );
}