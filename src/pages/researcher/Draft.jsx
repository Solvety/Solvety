import React from "react";
import Searchbar from "../../components/ben/Searchbar";
import { headings, draftTableData, switchTheme } from "../../data/data";
import Button from "../../components/ben/Button";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";

const Draft = () => {
  const { resTheme } = useTheme();

  return (
    <div className={`researcher-content ${resTheme}`}>
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        {/* content */}
        <div className="home-main-section">
          <section className={`w-full  rounded-2xl h-[100h]`}>
            <h1
              className={`draft font-bold text-3xl ${switchTheme(
                "text-black",
                "text-white",
                resTheme
              )}`}
            >
              Drafts
            </h1>
            <Searchbar placeholder="Search drafts..." showIcon={true} />
            {/* main */}

            <div className="w-full rounded-xl md:border-[1px] md:border-gray-400 p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 1320:grid-cols-4 gap-5">
                {Object.keys(headings).map((key, index) => (
                  <div
                    key={index}
                    className={`px-5 py-3 rounded-lg font-bold ${
                      index === 1
                        ? "hidden 1320:grid"
                        : index === 2
                        ? "hidden md:grid"
                        : index === 0
                        ? "hidden md:grid"
                        : ""
                    }`}
                  >
                    <span
                      className={switchTheme(
                        "text-black",
                        "text-white",
                        resTheme
                      )}
                    >
                      {headings[key].text}
                    </span>
                  </div>
                ))}
                <div className="px-5 py-3 rounded-lg font-bold hidden md:grid"></div>
                {draftTableData.body.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className={`px-5 py-3 rounded-lg flex flex-col justify-between ${
                        index === 0
                          ? "bg-[#D0EDFD]"
                          : index === 1
                          ? "bg-[#C6FFF0]"
                          : "bg-[#F8CBFF]"
                      }`}
                    >
                      <span>{item.Title}</span>
                      {/* btns */}
                      <div
                        className="w-full  md:hidden  flex 280:flex-row flex-col pt-20 justify-center items-center gap-5 px-5"
                        key={index}
                      >
                        <button
                          className={`shadow-md px-8  py-2 font-bold rounded-lg hover:bg-gray-300 text-black bg-white`}
                        >
                          Edit
                        </button>
                        <button
                          className={`shadow-md px-5  py-2 font-bold rounded-lg hover:bg-gray-300 text-black bg-white`}
                        >
                          Launch
                        </button>
                      </div>
                    </div>
                    <div
                      className={`px-5 py-3 rounded-lg hidden 1320:grid ${
                        index === 0
                          ? "bg-[#D0EDFD]"
                          : index === 1
                          ? "bg-[#C6FFF0]"
                          : "bg-[#F8CBFF]"
                      }`}
                      key={index}
                    >
                      <span className="text-black">{item.Summary}</span>
                    </div>
                    <div
                      className={`px-5 py-3 rounded-lg text-center font-bold whitespace hidden md:grid ${
                        index === 0
                          ? "bg-[#D0EDFD] text-[#0C5076]"
                          : index === 1
                          ? "bg-[#C6FFF0] text-[#107359]"
                          : "bg-[#F8CBFF] text-[#60066F]"
                      }`}
                      key={index}
                    >
                      <span className="text-black">{item.LastEdited}</span>
                    </div>
                    <div
                      className="hidden md:flex flex-col gap-5 justify-center items-center"
                      key={index}
                    >
                      <Button
                        hoverBgColor="bg-[#8E5DF5]"
                        hoverTextColor="text-white"
                        theme={switchTheme(
                          "bg-white text-black",
                          "bg-[#363334] text-white",
                          resTheme
                        )}
                      >
                        Edit
                      </Button>
                      <Button
                        bgColor="bg-[#8E5DF5]"
                        textColor="text-white"
                        hoverBgColor="bg-white"
                        hoverTextColor="text-black"
                      >
                        Launch
                      </Button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Draft;