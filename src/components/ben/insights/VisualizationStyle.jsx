import React from "react";
import VisualizationBarChart from "./VisualizationBarChart";
import LineChart from "../LineChart";
import Compare from "./Compare";

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
}) => {
  return (
    <main className="">
      <section className="bg-white mt-8 p-4 rounded-xl">
        <ChartDetails
          no={no}
          questionType={questionType}
          question={question}
          skipped={skipped}
          answered={skipped}
        />
        {/* <div className="flex w-full"> */}
        <VisualizationBarChart />
        {/* <div className="flex flex-col gap-2">
            <p className="flex items-center gap-5">
              <span className="p-2 h-[5px] w-[5px] block bg-purple-900 rounded-full"></span>
              YES
            </p>
            <p className="flex items-center gap-5">
              <span className="p-2 h-[5px] w-[5px] block bg-purple-900 rounded-full"></span>
              NO
            </p>
            <p className="flex items-center gap-5">
              <span className="p-2 h-[5px] w-[5px] block bg-purple-900 rounded-full"></span>
              OTHER
            </p>
          </div> */}
        {/* </div> */}
        <p className="text-center text-slate-400">Month</p>
      </section>
      <section>
        <LineChart />
      </section>
      {/* <Compare /> */}
    </main>
  );
};

export default VisualizationStyle;
