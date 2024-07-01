import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  switchTheme,
  ResearchPageData,
  insigthGridCard,
  TotalResponseBody,
  TotalResponseHeading,
  ResponseByParticipants,
  ResponseByQuestions,
} from "../../data/data";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import styles from "../../assets/css/scrollbar.module.css";
import {
  AlignJustify,
  Download,
  MessageCircle,
  TrendingUp,
  Zap,
  ListOrdered,
  X,
} from "lucide-react";
import {
  GridCard,
  Button,
  SubInsight,
  TotalResponse,
} from "../../components/ben/insights";
import ResponseSortSelect from "../../components/actokuyt/response-sort-select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Insights = () => {
  const { resTheme } = useTheme();
  const { parameter } = useParams();

  const research = ResearchPageData.find(
    (item) => item.id === parseInt(parameter)
  );
  const title = research ? research.title : "Research not found";
  const amountSpent = research ? research.amountSpent : "Research not found";

  const insightCard = [
    { value: "Summary", icon: <AlignJustify size={26} /> },
    { value: "Responses", icon: <MessageCircle size={26} /> },
    { value: "Analytics", icon: <TrendingUp size={26} /> },
  ];

  //Response Page Modal Handlers
  const [openParticipantsModal, setOpenParticipantsModal] =
    React.useState(false);
  const [participantsModalTriggerId, setParticipantsModalTriggerId] =
    React.useState("");
  function handleParticipantsModalOpen(triggerId) {
    setParticipantsModalTriggerId(triggerId);
    setOpenParticipantsModal(true);
  }
  const handleParticipantsModalClose = () => setOpenParticipantsModal(false);

  const [openQuestionsModal, setOpenQuestionsModal] = React.useState(false);
  const [questionsModalTriggerId, setQuestionsModalTriggerId] =
    React.useState("");
  function handleQuestionsModalOpen(triggerId) {
    setQuestionsModalTriggerId(triggerId);
    setOpenQuestionsModal(true);
  }
  const handleQuestionsModalClose = () => setOpenQuestionsModal(false);

  const [activeCard, setActiveCard] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.screen.width);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  // borderColor switch statement
  const borderColor = (index) => {
    switch (index) {
      case 0:
        return "#D36D0D";
      case 1:
        return "#4D26EB";
      case 2:
        return "#095B75";
      case 3:
        return "#787A0B";
      case 4:
        return "#0B7A31";
      default:
        return "#667085";
    }
  };
  // valueColor switch statement
  const valueColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#ffffff" : "#D36D0D";
      case 1:
        return screenWidth <= 768 ? "#ffffff" : "#4D26EB";
      case 2:
        return "#095B75";
      case 3:
        return "#787A0B";
      case 4:
        return "#0B7A31";
      default:
        return screenWidth <= 768 ? "white" : "#667085";
    }
  };

  // labelColor switch statement
  const labelColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#ffffff" : "#000000";
      case 1:
        return screenWidth <= 768 ? "#ffffff" : "#000000";
      case 2:
        return screenWidth <= 768 ? "#095B75" : "#000000";
      case 3:
        return screenWidth <= 768 ? "#787A0B" : "#000000";
      case 4:
        return screenWidth <= 768 ? "#0B7A31" : "#000000";
      default:
        return screenWidth <= 768 ? "white" : "#000000";
    }
  };

  // bgColor switch statement
  const bgColor = (index, screenWidth) => {
    switch (index) {
      case 0:
        return screenWidth <= 768 ? "#FF9960" : "transparent";
      case 1:
        return screenWidth <= 768 ? "#795AF7" : "transparent";
      case 2:
        return screenWidth <= 768 ? "#B5E8F9" : "transparent";
      case 3:
        return screenWidth <= 768 ? "#F3F65B" : "transparent";
      case 4:
        return screenWidth <= 768 ? "#55F58C" : "transparent";
      default:
        return screenWidth <= 768 ? "#8694B2" : "transparent";
    }
  };

  useEffect(() => {
    borderColor();
    bgColor();
    valueColor();
    labelColor();
  }, [borderColor, bgColor, valueColor, labelColor]);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

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
        <div
          className={`home-main-section  ${switchTheme(
            "text-black",
            "text-white",
            resTheme
          )}`}
        >
          <h1 className="font-bold text-3xl hidden sm:grid">Insight</h1>
          {/* main */}
          <section className="w-full h-[100%] mb-20">
            {/* scroll header */}
            <div
              className={`w-full flex gap-10 md:gap-20 my-10 px-10 py-5 overflow-x-scroll ${styles["hide-scroll"]}`}
            >
              {insightCard.map((insightCard, index) => {
                return (
                  <SubInsight
                    key={index}
                    icon={insightCard.icon}
                    label={insightCard.value}
                    isActive={activeCard === index}
                    onClick={() => handleCardClick(index)}
                    iconBg={
                      index === 0
                        ? "#ED8989"
                        : index === 1
                        ? "#FFF3C7"
                        : "#C5FFF0"
                    }
                    iconColor={
                      index === 0
                        ? "#CD1313"
                        : index === 1
                        ? "#AB880C"
                        : "#10B186"
                    }
                  />
                );
              })}
            </div>

            {activeCard === 0 ? (
              <div className="w-full gap-5 flex flex-col 785:flex-row px-0 785:px-10 h-[100%]">
                <div className="w-full 785:w-[60%] pl-5 md:pl-0">
                  <div className="grid grid-cols-2 1207:grid-cols-3 gap-y-5">
                    {insigthGridCard.map((grid, index) => (
                      <GridCard
                        key={index}
                        label={grid.label}
                        value={grid.value}
                        borderColor={borderColor(index)}
                        bgColor={bgColor(index, screenWidth)}
                        valueColor={valueColor(index, screenWidth)}
                        labelColor={labelColor(index, screenWidth)}
                      />
                    ))}
                  </div>
                  {/* buttons */}
                  <div className="hidden  sm:flex w-full gap-5 mt-40">
                    <Button
                      p={`0.7rem 1.25rem`}
                      theme={switchTheme(
                        "bg-[#5E6A82]",
                        "bg-[#5E6A82]",
                        resTheme
                      )}
                    >
                      <Download size={26} />
                      Download Summary
                    </Button>
                    <Button
                      p={`0.7rem 2.7rem`}
                      theme={switchTheme(
                        "bg-[#5E6A82]",
                        "bg-[#5E6A82]",
                        resTheme
                      )}
                    >
                      <Download size={26} />
                      Download All
                    </Button>
                  </div>
                </div>
                <TotalResponse
                  TableBody={TotalResponseBody}
                  TableHeading={TotalResponseHeading}
                />
              </div>
            ) : activeCard === 1 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5em] mb-[5em]">
                  <div className="bg-white min-h-[30em] rounded-2xl">
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <span className="bg-[#EAE1FF] text-[#410FA8] w-[65%] md:w-[83%] text-lg rounded-full  h-[2.8em] flex items-center">
                        <p className="inline p-4">By Participants</p>
                        <span className="bg-[#CBB5FF] rounded-full py-[0.5em] px-[1em]">
                          {ResponseByParticipants.length}
                        </span>
                      </span>
                      <span className="w-[50%] md:justify-self-end">
                        <ResponseSortSelect />
                      </span>
                    </div>
                    <div className="w-full">
                      <div className="grid grid-cols-2 w-[90%] mx-auto p-4">
                        <div className="justify-self-center">
                          <h6 className="font-semibold">Names</h6>
                        </div>
                        <div className="justify-self-end">
                          <h6 className="font-semibold">Time</h6>
                        </div>
                      </div>
                      <div>
                        {ResponseByParticipants.map((participant, index) => (
                          <div key={index}>
                            <div
                              className="flex flex-row border-t-2 px-4 py-2 items-center"
                              onClick={() =>
                                handleParticipantsModalOpen(participant.name)
                              }
                            >
                              <img
                                src={participant.avatar}
                                alt={participant.name}
                                className="w-[50px] h-[50px]"
                              />
                              <div className="w-[70%] py-2 px-4">
                                <h4 className=" font-semibold">
                                  {participant.name}
                                </h4>
                                <div className="text-[#856B0C] text-xs">
                                  <h6 className="">{participant.date}</h6>
                                  <h6>{participant.time}</h6>
                                </div>
                              </div>
                              <h6>{participant.duration}</h6>
                            </div>
                            <Modal
                              open={openParticipantsModal}
                              // onClose={handleClose}
                              slotProps={{
                                backdrop: {
                                  sx: {
                                    display: `none`,
                                  },
                                },
                              }}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className="bg-white absolute top-[50%] left-[50%] w-[98%] rounded-xl shadow-black -translate-y-1/2 -translate-x-1/2 mx-auto p-4  md:right-0 md:max-w-[35%] md:max-h-[100%] md:-translate-x-0 md:mr-12">
                                <span
                                  onClick={handleParticipantsModalClose}
                                  className="block w-[24px] p-2 absolute right-8"
                                >
                                  <X />
                                </span>
                                {ResponseByParticipants.map(
                                  (participant, index) => {
                                    if (
                                      participant.name ===
                                      participantsModalTriggerId
                                    ) {
                                      return (
                                        <div>
                                          <div className="my-4">
                                            <h1 className="text-2xl font-semibold">
                                              {`Viewing ${participant.name}`}{" "}
                                            </h1>
                                            <p className="text-sm text-[#9A9696]">
                                              Participants answers are
                                              highlighted in yellow
                                            </p>
                                          </div>
                                          <div className="flex flex-col ">
                                            {participant.questions.map(
                                              (question, index) => {
                                                return (
                                                  <div
                                                    key={index}
                                                    className="flex flex-row items-center mb-4"
                                                  >
                                                    <span className="bg-[#E3E3FF] p-4 h-16 w-16 rounded-lg mr-4">
                                                      <ListOrdered size={35} />
                                                    </span>
                                                    <div>
                                                      <h1 className="font-semibold mb-2">{`Q ${
                                                        index + 1
                                                      }`}</h1>
                                                      <p className="text-[#636387] text-sm">
                                                        {question.type}
                                                      </p>
                                                      <p className="text-[#636387] text-sm mb-4">
                                                        {question.question}
                                                      </p>
                                                      <span className="text-[#636387] text-sm">
                                                        <span className="mr-2 text-[#37D8AD]">
                                                          Ans:
                                                        </span>
                                                        <span className="bg-[#FFF3C7] text-[#574505] p-2">
                                                          {question.answer}
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      );
                                    }
                                  }
                                )}
                              </Box>
                            </Modal>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white min-h-[30em] rounded-2xl">
                    <div className="p-4 grid grid-cols-2">
                      <span className="bg-[#EAE1FF] text-[#410FA8] w-[121%] md:w-[75%] text-lg rounded-full  h-[2.8em] flex items-center">
                        <p className="inline p-4">By Questions</p>
                        <span className="bg-[#CBB5FF] rounded-full py-[0.5em] px-[1em]">
                          {ResponseByQuestions.length}
                        </span>
                      </span>
                    </div>
                    <div className="w-full">
                      <div className="grid grid-cols-2 w-[95%] mx-auto p-4">
                        <div className="justify-self-center">
                          <h6 className="font-semibold">Question</h6>
                        </div>
                        <div className="justify-self-end">
                          <h6 className="font-semibold">Average Time</h6>
                        </div>
                      </div>
                      <div>
                        {ResponseByQuestions.map((question, index) => (
                          <div
                            key={index}
                            className="flex flex-row border-t-2 px-4 py-2 items-center"
                            onClick={() =>
                              handleQuestionsModalOpen(question.title)
                            }
                          >
                            <span className="text-[#8E5DF5]">
                              <Zap />
                            </span>
                            <span className="w-[70%] py-2 px-4">
                              {question.title}
                            </span>
                            <span>{question.averageTime}</span>
                          </div>
                        ))}
                      </div>
                      <Modal
                        open={openQuestionsModal}
                        // onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box className="bg-white absolute top-[50%] left-[50%] w-[98%] rounded-xl shadow-black -translate-y-1/2 -translate-x-1/2 mx-auto p-4  md:left-[19em] md:max-w-[35%] md:max-h-[95%] md:-translate-x-0 md:ml-12">
                          <span
                            onClick={handleQuestionsModalClose}
                            className="block w-[24px] p-2 absolute right-8"
                          >
                            <X />
                          </span>
                          {ResponseByQuestions.map((question, index) => {
                            if (question.title === questionsModalTriggerId) {
                              return (
                                <div>
                                  <div className="my-4">
                                    <h1 className="text-2xl font-semibold">
                                      {`Viewing ${question.title}`}{" "}
                                    </h1>
                                    <p className="text-[#636387]">
                                      {question.question}
                                    </p>
                                    <p className="text-sm text-[#9A9696]">
                                      Participants answers are highlighted in
                                      yellow
                                    </p>
                                  </div>
                                  <div className="flex flex-col ">
                                    {question.participants.map(
                                      (participant, index) => {
                                        return (
                                          <div
                                            key={index}
                                            className="flex flex-row items-center mb-4 pdx-4 py-2"
                                          >
                                            <img
                                              src={participant.avatar}
                                              alt={participant.participant}
                                              className="w-[50px] h-[50px]"
                                            />
                                            <div className="w-[70%] py-2 px-4">
                                              <h4 className=" font-semibold">
                                                {participant.participant}
                                              </h4>
                                              <div className="text-[#856B0C] text-xs">
                                                <h6 className="">
                                                  {participant.date}
                                                </h6>
                                                <h6>{participant.time}</h6>
                                              </div>
                                            </div>
                                            <div className="bg-[#FFF3C7] text-[#3A3A53] p-2">
                                              {participant.answer}
                                            </div>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
                <Button
                  p={`0.7rem 2.7rem`}
                  theme={switchTheme("bg-[#5E6A82]", "bg-[#5E6A82]", resTheme)}
                >
                  <Download size={26} />
                  Download All
                </Button>
              </div>
            ) : activeCard === 2 ? (
              <div>
                <div className="grid text-black grid-cols-2 gap-4 w-[90%] mx-auto">
                  <button className="bg-white w-[9em] py-[0.8em] rounded-xl drop-shadow-md">
                    Table Chart
                  </button>
                  <button className="bg-white w-[9em] py-[0.8em] rounded-xl drop-shadow-md">
                    Visualization Style
                  </button>
                </div>
              </div>
            ) : (
              <>
              </>
            )}
          </section>
        </div>
      </div>
      <div className="research-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Insights;
