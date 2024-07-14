import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ResearchCard from "../../components/ben/research/ResearchCard";
import {
  ResearchPageData,
  darkTheme,
  filterOptions,
  researchTypeOptions,
  statusOptions,
  switchTheme,
  timePeriodOptions,
} from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import ResearchCardToast from "../../components/ben/research/ResearchCardToast";
import DropdownSelect from "../../components/ben/research/DropdownSelect";
import { useNavigate } from "react-router-dom";
import { getSelectsur } from "../../api/axios";
import toast, { Toaster } from "react-hot-toast";

const ResearchPage = () => {
  const { resTheme } = useTheme();
  const [sortBy, setSortBy] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedResearchType, setSelectedResearchType] =
    useState("Research Type");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("This Year");
  const [selectedFilteredOption, setSelectedFilteredOption] =
    useState("Research Type");
  const [selectedDropdown, setSelectedDropdown] = useState("Filter");
  const [clickedOnce, setClickedOnce] = useState(false);
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const sortArrowDown = () => {
    setSortType("active");
    setSortBy("desc");
  };

  const sortArrowUp = () => {
    setSortType("active");
    setSortBy("asc");
  };

  const filteredResearchData = ResearchPageData.filter(
    (research) =>
      (selectedStatus === "Status" ||
        research.status.toLowerCase() === selectedStatus.toLowerCase()) &&
      (selectedResearchType === "Research Type" ||
        research.researchType.toLowerCase() ===
          selectedResearchType.toLowerCase()) &&
      (selectedTimePeriod === "This Year" ||
        research.date.toLowerCase() === selectedTimePeriod.toLowerCase())
  );

  let noResearchMessage = "";
  if (selectedStatus !== "Status" && filteredResearchData.length === 0) {
    noResearchMessage = `No research found for ${selectedStatus} status`;
  }
  if (
    selectedResearchType !== "Research Type" &&
    filteredResearchData.length === 0
  ) {
    noResearchMessage = `No research found for ${selectedResearchType} research type`;
  }
  if (selectedTimePeriod !== "This Year" && filteredResearchData.length === 0) {
    noResearchMessage = `No research found for ${selectedTimePeriod}`;
  }

  const handleNavigate = (id) => {
    if (clickedOnce) {
      redirectToInsight(id);
      clearTimeout(timer);
      setClickedOnce(false);
    } else {
      setClickedOnce(true);
      setTimer(
        setTimeout(() => {
          setClickedOnce(false);
        }, 300)
      );
    }
  };

  const redirectToInsight = (id) => {
    navigate(`/researcher/insight/${id}`);
  };

  const timeProperties = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  function getOptionsForCard(status) {
    switch (status) {
      case "completed":
        return [
          "Edit",
          "Delete",
          "View Insight",
          "Duplicate",
          new Date().toLocaleString("en-US", timeProperties),
          "Copy Link",
        ];
      case "ongoing":
        return [
          "Edit",
          "Delete",
          "View Insight",
          "Duplicate",
          "End",
          "Pause",
          new Date().toLocaleString("en-US", timeProperties),
          "Copy Link",
        ];
      case "paused":
        return [
          "Edit",
          "Delete",
          "View Insight",
          "Duplicate",
          "Resume",
          "End",
          new Date().toLocaleString("en-US", timeProperties),
          "Copy Link",
        ];
      default:
        return [];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getSelectsur();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [getOptionsForCard]);

  return (
    <div className={`researcher-content ${resTheme}`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        <div className="home-main-section">
          <div className="w-full  rounded-2xl  flex justify-center my-10">
            <section
              className={`${switchTheme(
                "bg-white",
                darkTheme + " text-white",
                resTheme
              )} w-full  1097:w-[90%] rounded-xl`}
            >
              <div className="heading 531:flex 531:justify-between  531:items-center py-5 px-2 531:px-10">
                <h1 className="text-3xl font-bold hidden 531:grid">Research</h1>
                <div className=" flex gap-2 flex-col 237:flex-row">
                  <DropdownSelect
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    statusOptions={statusOptions}
                    selectedTimePeriod={selectedTimePeriod}
                    setSelectedTimePeriod={setSelectedTimePeriod}
                    timePeriodOptions={timePeriodOptions}
                    resTheme={resTheme}
                  />
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={`w-[70px] py-2 outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                    style={{
                      display: selectedDropdown === "Status" ? "block" : "none",
                    }}
                  >
                    {statusOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedResearchType}
                    onChange={(e) => setSelectedResearchType(e.target.value)}
                    className={`py-2 w-[130px] outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                    style={{
                      display: selectedDropdown === "Filter" ? "block" : "none",
                    }}
                  >
                    {researchTypeOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedTimePeriod}
                    onChange={(e) => setSelectedTimePeriod(e.target.value)}
                    className={`w-[90px] py-2 outline-none rounded-md border-[2px] ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                    style={{
                      display:
                        selectedDropdown === "This Year" ? "block" : "none",
                    }}
                  >
                    {timePeriodOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedDropdown}
                    onChange={(e) => setSelectedDropdown(e.target.value)}
                    className={`grid md:hidden py-2 outline-none rounded-md border-[2px] border-gray-300
                    ${switchTheme(
                      "border-gray-300",
                      darkTheme + " text-gray-400 border-gray-700",
                      resTheme
                    )}`}
                  >
                    {filterOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sorting px-10 hidden sm:flex gap-5 mb-5">
                <h1 className="text-xl font-semibold">Number reached</h1>
                <div className="flex cursor-pointer">
                  <ArrowDown
                    onClick={sortArrowDown}
                    color={
                      sortType === "active" && sortBy === "desc"
                        ? "#8E5DF5"
                        : switchTheme("#000000", "#ffffff", resTheme)
                    }
                  />
                  <ArrowUp
                    onClick={sortArrowUp}
                    color={
                      sortType === "active" && sortBy === "asc"
                        ? "#8E5DF5"
                        : switchTheme("#000000", "#ffffff", resTheme)
                    }
                  />
                </div>
              </div>
              <div className="w-full px-2 531:px-10 h-screen">
                {filteredResearchData.length === 0 ? (
                  <ResearchCardToast noResearchMessage={noResearchMessage} />
                ) : (
                  filteredResearchData
                    .sort((a, b) => {
                      if (sortBy === "asc") {
                        return (
                          parseInt(a.numberReached) - parseInt(b.numberReached)
                        );
                      } else if (sortBy === "desc") {
                        return (
                          parseInt(b.numberReached) - parseInt(a.numberReached)
                        );
                      } else {
                        return 0;
                      }
                    })
                    .map((research, index) => (
                      <div
                        key={index}
                        onClick={() => handleNavigate(research.id)}
                        onDoubleClick={() => redirectToInsight(research.id)}
                      >
                        <ResearchCard
                          status={research.status}
                          index={index}
                          statusColorBg={
                            research.status === "completed"
                              ? "#C7FBC6"
                              : research.status === "paused"
                              ? "#FBF9C6"
                              : "#E9DFFF"
                          }
                          statusColorText={
                            research.status === "completed"
                              ? "green"
                              : research.status === "paused"
                              ? "#B7B00E"
                              : "purple"
                          }
                          title={research.title}
                          researchType={research.researchType}
                          numberReached={research.numberReached}
                          amountSpent={research.amountSpent}
                          options={getOptionsForCard(research.status)}
                          id={research.id} // Pass the ID to the ResearchCard component
                        />
                      </div>
                    ))
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResearchPage;
