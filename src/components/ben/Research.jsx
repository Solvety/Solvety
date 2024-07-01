import React from "react";
import Sidebar from "../ben/Sidebar";
import { CircleHelp, Clock, Layers, Plus } from "lucide-react";

const Research = () => {
  return (
    <div className="bg-white w-full h-screen">
      <section className="flex w-full h-[100h]">
        {/* sample sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full h-[100%] flex justify-center bg-gray-300 p-2 md:p-10">
          <section className="w-full h-[100h] rounded-2xl">
            <div className="bg-white w-full px-10 py-10 md:py-20 rounded-xl mb-5 flex flex-col md:flex-row justify-around gap-5">
              <button className="hover:shadow-md justify-center items-center w-full font-bold flex whitespace-nowrap gap-3 text-xl bg-[#FFF1BE] rounded-lg py-10 md:py-20">
                <Plus />
                Create new research
              </button>
              <button className="hover:shadow-md justify-center items-center w-full font-bold flex whitespace-nowrap gap-3 text-xl bg-[#8E5DF5] text-white rounded-lg py-10 md:py-20">
                <Layers />
                Create from scratch
              </button>
            </div>
            <div className="bg-transparent w-full grid grid-col-2 md:grid-cols-3 gap-5 rounded-xl">
              <div className="cursor-pointer w-full py-[4rem] md:py-[7rem] rounded-xl bg-[#D0FFF2] font-bold text-xl flex gap-3 flex-col justify-center items-center md:col-span-2">
                <Clock />
                <p className="text-center">
                  See All Scheduled <br /> research
                </p>
              </div>
              <div className="cursor-pointer w-full px-10 md:px-10 py-[4rem] md:py-[7rem] rounded-xl bg-white font-semibold  text-xl flex gap-3 flex-col justify-center items-center">
                <CircleHelp size={20} />
                <p className="text-center">About creating research</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Research;
