import React from "react";
import { useNavigate } from "react-router-dom";
import OptionSlider from "./OptionSlider";
import QwestButton from "./QwestButton";
import { useQuest } from "../../../context/QwestContext";

const Question = ({ question, fade }) => (
  <div className="bg-white p-3 992:p-5 992:text-xl rounded-xl text-slate-500 w-[268px] 992:w-[356px] text-center">
    <h1 className={`transition-all duration-500 ${fade ? "opacity-100 translate-x-0" : "opacity-50 translate-x-3"}`}>
      {question.question}
    </h1>
  </div>
);

const Options = ({ answer, handleSelected, fade, option, index }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div
      className={`992:text-xl rounded-[1.2rem] w-[131.72px]  992:w-[179px] text-left ${
        answer ? "bg-[#8E5DF5] text-white" : "bg-white text-slate-500"
      } cursor-pointer py-2 992:py-3 px-1}`}
      onClick={handleSelected}
    >
      <p className={`pl-5 transition-all duration-500 ${fade ? "opacity-100 translate-x-0" : "opacity-50 translate-x-3"}`}>
        {alphabet[index]}. {option}
      </p>
    </div>
  );
};

const QuestionSection = ({ surveyQuestion, onEndQuest }) => {
  const {
    selectedAnswers,
    currentQuestion,
    currentOptionSet,
    fade,
    timer,
    isPaused,
    startTimer,
    togglePause,
    endQuiz,
    handleSelectedAnswer,
    nextQuestion,
    prevQuestion,
    handleNextOptionSet,
    handlePrevOptionSet,
    setCurrentOptionSet,
    showRetakePopup,
    handleRetake,
    handleCancel,
  } = useQuest();

  const presentQuestion = surveyQuestion[currentQuestion];
  const maxOptionsPerSet = 4;
  const totalOptionSets = Math.ceil(presentQuestion.options.length / maxOptionsPerSet);

  return (
    <div className="flex flex-col justify-center 992:items-center gap-5">
      <Question question={presentQuestion} fade={fade} />
      <div className="grid grid-cols-1 992:grid-cols-2 gap-y-2 992:gap-y-5 992:gap-x-14">
        {presentQuestion.options
          .slice(currentOptionSet * maxOptionsPerSet, (currentOptionSet + 1) * maxOptionsPerSet)
          .map((option, index) => (
            <Options
              key={index}
              answer={selectedAnswers[currentQuestion] === currentOptionSet * maxOptionsPerSet + index}
              handleSelected={() => handleSelectedAnswer(currentOptionSet * maxOptionsPerSet + index)}
              option={option}
              fade={fade}
              index={currentOptionSet * maxOptionsPerSet + index}
            />
          ))}
      </div>
      {presentQuestion.options.length > maxOptionsPerSet && (
        <div className="grid grid-cols-3 gap-y-2 gap-x-3 w-fit mt-2">
          {Array.from({ length: totalOptionSets }).map((_, index) => (
            <OptionSlider
              key={index}
              viewOption={currentOptionSet === index}
              handleViewOption={() => setCurrentOptionSet(index)}
            />
          ))}
        </div>
      )}
      <div className="w-fit">
        <div className="flex space-x-4 992:space-x-24 items-center justify-evenly">
          <QwestButton bgColor="#8E5DF5" onClick={prevQuestion}>
            Prev
          </QwestButton>
          <QwestButton color="#8E5DF5" bgColor="#E8DCFF" onClick={nextQuestion}>
            Next
          </QwestButton>
          <QwestButton color="black" bgColor="white" onClick={togglePause} hidden>
            {isPaused ? "Start" : "Pause"}
          </QwestButton>
          <QwestButton color="#8E5DF5" bgColor="#FA8787" onClick={onEndQuest} hidden>
            End
          </QwestButton>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
