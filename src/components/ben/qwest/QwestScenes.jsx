import React, { useEffect, useState } from "react";
import CoinGrid from "./CoinGrid";
import BalanceCard from "./BalanceCard";
import QuestionSection from "./QuestionSection";
import { surveyQuestions } from "../../../data/data";
import { QwestProvider, useQuest } from "../../../context/QwestContext";
import EndSection from "../../share/qwest/EndSection";
import Fire from "../../share/qwest/Fire";
import avatarF from "../../../assets/images/solvety-avatar.png";
import avatarSec from "../../../assets/images/Solvety-baby-with-water.png"


const QwestScenesContent = ({ onEndQuest }) => {
  const [questStarted, setQuestStarted] = useState(false);

  useEffect(() => {
    const questState = localStorage.getItem("questStarted");
    if (questState) {
      setQuestStarted(true);
    }
  }, []);
  const { coins, togglePause, isPaused, endQuiz,showRetakePopup, changeAvatar } = useQuest();

  return (
    <div className="relative z-10 text-white h-screen">
      <div className="flex items-center min-[462px]:px-0 overflow-x-auto justify-between gap-0  992:block whitespace-nowrap w-full min-[462px]:w-full">
        <div className="inline-block min-w-[180px] 992:absolute ">
          <CoinGrid />
        </div>

        <div
          className={`inline-block 992:absolute 992:right-0 992:top-[5rem] mt-5 992:mt-0`}
        >
          <BalanceCard />
        </div>
      </div>
      <div className="mt-6 992:mt-[20rem] 992:float-right w-fit 992:px-0 relative">
        <QuestionSection
          surveyQuestion={surveyQuestions}
          onEndQuest={onEndQuest}
        />
        <div className="flex justify-start w-fit">
          <EndSection />
        </div>
      </div>
   
      <div className="avatars-box" >
          <div className="fire">
            <Fire/>
          </div>
          <div className="avatar">
            <img src={changeAvatar?avatarSec:avatarF}/>
          </div>
      </div>
    </div>
  );
};

const QwestScenes = ({ onEndQuest }) => (
  <QwestProvider>
    <QwestScenesContent onEndQuest={onEndQuest} />
  </QwestProvider>
);

export default QwestScenes;
