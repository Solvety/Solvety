import React, { useState } from "react";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/ThemeContext";
import { darkTheme, switchTheme } from "../../data/data";
import { CirclePlus } from "lucide-react";
import ProgressBar from "../../components/ben/survey/ProgressBar";
import QuestionInput from "../../components/ben/survey/QuestionInput";
import { Link } from "react-router-dom";

export const Btn = ({ children, onClick, theme, width, padding }) => {
  return (
    <div>
      <button
        className={`${theme} shadow-md text-sm font-bold whitespace-nowrap rounded-md`}
        onClick={onClick}
        style={{ width: width, padding: padding }}
      >
        {children}
      </button>
    </div>
  );
};

const Survey = () => {
  const { resTheme } = useTheme();
  const [questions, setQuestions] = useState([1]);
  const progress = questions.length + 1;

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
          {/* heading */}
          <section
            className={`w-full  rounded-2xl h-[100h] my-10 p-3 ${switchTheme(
              "bg-gray-100",
              darkTheme,
              resTheme
            )}`}
          >
            <h1
              className={`draft font-bold text-3xl ${switchTheme(
                "text-black",
                "text-white",
                resTheme
              )}`}
            >
              Prepare your survey
            </h1>
            {/* subtitle */}
            <div className="my-2">
              <p
                className={`${switchTheme(
                  "text-gray-500",
                  "text-[#199AE2]",
                  resTheme
                )} font-bold text-xl`}
              >
                The impact of covid-19 on the tourism industry
              </p>
              <p
                className={`${switchTheme(
                  "text-gray-500",
                  "text-[#85B3CD]",
                  resTheme
                )} py-2`}
              >
                This research paper explores the impact ot COVID-19 on the
                global tourism industry. including changes in consumer behavior,
                travel restrictions, and the long-term economic consequences
              </p>
            </div>
            {/* set question */}
            <div>
              {/* section 1 */}
              <div
                className={`${switchTheme(
                  "text-black",
                  "text-white",
                  resTheme
                )}`}
              >
                <div className="uploadFile my-20">
                  <label
                    htmlFor="file-upload"
                    className={`${switchTheme(
                      "transparent",
                      darkTheme,
                      resTheme
                    )} rounded-2xl h-fit shadow-md  whitespace-nowrap font-semibold  border-[1px] border-gray-500  px-5 py-1 cursor-pointer`} // Styling for the upload image badge
                  >
                    upload file
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                {/* create question */}
                <section
                  className={`mb-10 ${switchTheme(
                    "text-black",
                    "text-white",
                    resTheme
                  )} `}
                >
                  {/* input */}
                  <section className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row h-fit items-center gap-10 w-full">
                      <QuestionInput resTheme={resTheme} />
                      <button
                        onClick={() =>
                          setQuestions([...questions, questions.length + 1])
                        }
                        className={`flex w-full h-fit sm:w-fit gap-3 py-3 px-8 rounded-md font-bold justify-center items-center whitespace-nowrap ${switchTheme(
                          "bg-[#8E5DF5] text-white",
                          "bg-[#8E5DF5] text-white",
                          resTheme
                        )}`}
                      >
                        <CirclePlus />
                        <span>Add</span>
                      </button>
                    </div>
                    {/* additonal question input down here */}
                     {questions.map((questionIndex) => (
                      <QuestionInput key={questionIndex} resTheme={resTheme} />
                    ))} 
                  </section>
                </section>
              </div>
            </div>
          </section>

          <section className="w-full 1320:w-[70%] px-5 md:px-0">
            <p
              className={`font-semibold py-3 ${switchTheme(
                "text-black",
                "text-white",
                resTheme
              )}`}
            >
              Total Questions
            </p>
            <div className="flex flex-col md:flex-row gap-10 md:gap-40 justify-center md:justify-between items-center w-full mb-20">
              <ProgressBar progress={progress} label={progress} />
              <Link to="/researcher/preview-survey">
                <Btn
                  padding={`0.7rem 20px`}
                  theme={switchTheme(
                    "bg-[#8E5DF5] text-white",
                    "bg-[#8E5DF5] text-white",
                    resTheme
                  )}
                >
                  Preview survey
                </Btn>
              </Link>
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

export default Survey;
