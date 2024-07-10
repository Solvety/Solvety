import React, { useState } from "react";
import TableChart from "./TableChart";
import VisualizationStyle from "./VisualizationStyle";
import { ListFilter } from "lucide-react";

const Filter = () => {
  return (
    <div className="flex items-center justify-center md:justify-normal gap-5">
      <button className="flex py-1 px-2 border-[1px] border-slate-400 gap-2 font-bold bg-white rounded-md drop-shadow-md whitespace-nowrap">
        <ListFilter />
        filter and compare
      </button>
      <button className="flex py-1 px-2 border-[1px] border-slate-400 gap-2 font-bold bg-white rounded-md drop-shadow-md whitespace-nowrap">
        <ListFilter />
        filter
      </button>
    </div>
  );
};
const Analytics = () => {
  const [activeComponent, setActiveComponent] = useState("table");
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        <div className="flex md:block justify-center  space-x-10">
          <button
            className={`bg-white font-bold text-md text-center w-[10em] py-[0.8em] rounded-xl drop-shadow-md whitespace-nowrap ${
              activeComponent === "table" ? "border-2 border-[#56f4ca]" : ""
            }`}
            onClick={() => setActiveComponent("table")}
          >
            Table Chart
          </button>
          <button
            className={`bg-white font-bold text-md text-center w-[10em] py-[0.8em] rounded-xl drop-shadow-md whitespace-nowrap ${
              activeComponent === "visualization"
                ? "border-2 border-[#56f4ca]"
                : ""
            }`}
            onClick={() => setActiveComponent("visualization")}
          >
            Visualization Style
          </button>
        </div>
        {activeComponent === "visualization" && <Filter />}
      </section>
      <div>
        {activeComponent === "table" && <TableChart />}
        {activeComponent === "visualization" && <VisualizationStyle />}
      </div>
    </main>
  );
};

export default Analytics;
