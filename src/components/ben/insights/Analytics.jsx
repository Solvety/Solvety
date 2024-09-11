import React, { useState } from "react";
import TableChart from "./TableChart";
import VisualizationStyle from "./VisualizationStyle";
import { ListFilter } from "lucide-react";
import FilterModal from "./FilterModal";
import FilterAndCompareModal from "./FilterAndCompareModal";

const Filter = ({ onFilterClick, onFilterAndCompareClick }) => {
  return (
    <div className="flex items-center justify-center md:justify-normal gap-5">
      <button
        className="flex py-1 px-2 border-[1px] border-slate-400 gap-2 font-bold bg-white rounded-md drop-shadow-md whitespace-nowrap"
        onClick={onFilterAndCompareClick}
      >
        <ListFilter />
        filter and compare
      </button>
      <button
        className="flex py-1 px-2 border-[1px] border-slate-400 gap-2 font-bold bg-white rounded-md drop-shadow-md whitespace-nowrap"
        onClick={onFilterClick}
      >
        <ListFilter />
        filter
      </button>
    </div>
  );
};

const Analytics = () => {
  const [activeComponent, setActiveComponent] = useState("visualization");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterAndCompareLeftModalOpen, setIsFilterAndCompareLeftModalOpen] =
    useState(false);
  const [showFilterAndCompareChart, setShowFilterAndCompareChart] =
    useState(false);
  const [
    isFilterAndCompareRightModalOpen,
    setIsFilterAndCompareRightModalOpen,
  ] = useState(false);

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
    setShowFilterAndCompareChart(false);
    setIsFilterAndCompareLeftModalOpen(false);
    setIsFilterAndCompareRightModalOpen(false);
  };

  const handleOpenFilterAndCompareModal = () => {
    setShowFilterAndCompareChart(true);
    setIsFilterModalOpen(false);
    setIsFilterAndCompareLeftModalOpen(true);
    setIsFilterAndCompareRightModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFilterModalOpen(false);
    setIsFilterAndCompareLeftModalOpen(false);
    setIsFilterAndCompareRightModalOpen(false);
  };

  return (
    <main>
      <section className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        <div className="flex md:block justify-center  space-x-10">
          <button
            className={`bg-white font-bold text-md text-center w-[10em] py-[0.8em] rounded-xl drop-shadow-md whitespace-nowrap ${
              activeComponent === "table" ? "border-2 border-[#56f4ca]" : ""
            }`}
            onClick={() => {
              setActiveComponent("table");
              setShowFilterAndCompareChart(false);
            }}
          >
            Table Chart
          </button>
          <button
            className={`bg-white font-bold text-md text-center w-[10em] py-[0.8em] rounded-xl drop-shadow-md whitespace-nowrap ${
              activeComponent === "visualization"
                ? "border-2 border-[#56f4ca]"
                : ""
            }`}
            onClick={() => {
              setActiveComponent("visualization");
              setShowFilterAndCompareChart(false);
            }}
          >
            Visualization Style
          </button>
        </div>
        {activeComponent === "visualization" && (
          <Filter
            onFilterClick={handleOpenFilterModal}
            onFilterAndCompareClick={handleOpenFilterAndCompareModal}
          />
        )}
      </section>
      <div>
        {activeComponent === "table" && <TableChart />}
        {activeComponent === "visualization" && (
          <VisualizationStyle
            showFilterAndCompareChart={showFilterAndCompareChart}
          />
        )}
        <FilterModal open={isFilterModalOpen} handleClose={handleCloseModal} />
        {isFilterAndCompareLeftModalOpen && (
          <FilterAndCompareModal
            open={isFilterAndCompareLeftModalOpen}
            handleClose={handleCloseModal}
            position="left"
          />
        )}
        {isFilterAndCompareRightModalOpen && (
          <FilterAndCompareModal
            open={isFilterAndCompareRightModalOpen}
            handleClose={handleCloseModal}
            position="right"
          />
        )}
      </div>
    </main>
  );
};

export default Analytics;
