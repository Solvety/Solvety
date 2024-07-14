import { useTheme } from "../../../context/ThemeContext";
import { switchTheme } from "../../../data/data";
import { Download } from "lucide-react";
import ApexCharts from "./apex-charts";


const QuestionCard = ({ questionNumber, questionText, answered, skipped, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-xl`}>
      <div className="mb-8">
        <h1 className="text-lg font-semibold py-6 px-2">
          Question {questionNumber}
          <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
            multiple choice
          </span>
        </h1>
        <p className="px-2 mb-6">
          {questionText}
        </p>
        <span className="text-black px-4 py-2 ml-2 rounded-lg bg-[#FFF3C7] ">
          {answered} answered
        </span>
        <span className="px-4 py-2 ml-8 rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
          {skipped} skipped
        </span>
      </div>
      <div>
        <ApexCharts type={"bar"} />
      </div>
    </div>
  );
};

export default function Compare() {
  const { resTheme } = useTheme();

  const bgColor = switchTheme("bg-white", "bg-[#2a2a27]", resTheme);
  const textColor = switchTheme("text-black", "text-white", resTheme);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2 mt-8">Filter and Compare</h1>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <QuestionCard
          questionNumber={1}
          questionText="How inspired are you to be your best here?"
          answered={28}
          skipped={8}
          bgColor={bgColor}
          textColor={textColor}
        />
        <QuestionCard
          questionNumber={2}
          questionText="How inspired are you to be your best here?"
          answered={28}
          skipped={8}
          bgColor={bgColor}
          textColor={textColor}
        />
      </div>
      <button className="bg-[#5E6A82] py-2 px-6 rounded-md flex text-white">
        <span className="text-[#FFF3C7] inline mr-2">
          <Download />
        </span>{" "}
        <span className="">Download All</span>
      </button>
    </div>
  );
}