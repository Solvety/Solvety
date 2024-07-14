import React from "react";
import VisualizationBarChart from "./VisualizationBarChart";
import Compare from "./Compare";
import { Download } from "lucide-react";

const ChartDetails = ({
  no = "1",
  questionType = "multiple choice",
  skipped = "8",
  answered = "28",
  question = "How inspired are you to be your best here?",
}) => {
  return (
    <section className={`flex justify-between items-start mt-3`}>
      <div className="mb-8">
        <h1 className="text-lg font-semibold pb-6 px-2">
          Question {no}
          <span className="ml-8 p-2 rounded-full bg-green-100 text-green-700 text-base">
            {questionType}
          </span>
        </h1>
        <p className="px-2 mb-6">{question}</p>
        <div className="space-x-10">
          <span className="text-black px-2 py-1 w-[9em]  rounded-lg bg-[#FFF3C7] ">
            {answered} answered
          </span>
          <span className="px-2 py-1 w-[9em]  rounded-lg bg-[#FFCACA] text-[#9A0A0A] ">
            {skipped} skipped
          </span>
        </div>
      </div>
      <h1 className="font-bold">Bar chart</h1>
    </section>
  );
};

const VisualizationStyle = ({
  no = "1",
  questionType = "multiple choice",
  skipped = "8",
  answered = "28",
  question = "How inspired are you to be your best here?",
  showFilterAndCompareChart,
}) => {
  return (
    <main className="">
      {!showFilterAndCompareChart ? (
        <>
          <section className="bg-white mt-8 p-4 rounded-xl">
            <ChartDetails
              no={no}
              questionType={questionType}
              question={question}
              skipped={skipped}
              answered={skipped}
            />
            <VisualizationBarChart />
            <p className="text-center text-slate-400">Month</p>
          </section>
          <button className="bg-[#5E6A82] py-2 px-6 rounded-md flex text-white mt-8">
            <span className="text-[#FFF3C7] inline mr-2">
              <Download />
            </span>{" "}
            <span className="">Download All</span>
          </button>
        </>
      ) : (
        <section>
          <Compare />
        </section>
      )}
    </main>
  );
};

export default VisualizationStyle;
