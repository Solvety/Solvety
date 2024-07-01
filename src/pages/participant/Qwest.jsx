import React, { useState, useEffect } from "react";
import qwestbg from "../../assets/images/qwestbg.svg";
import LoadingBg from "../../components/ben/LoadingBg";
import StartQuest from "../../components/ben/qwest/StartQuest";
import Sidebar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import { useLoading } from "../../context/LoadingContext";
import QwestScenes from "../../components/ben/qwest/QwestScenes";
// import { qwestComponents } from "../../components/ben/routes";


const Qwest = () => {
  const { loading } = useLoading();
  const [questStarted, setQuestStarted] = useState(false);

  useEffect(() => {
    const questState = localStorage.getItem("questStarted");
    if (questState) {
      setQuestStarted(true);
    }
  }, []);

  const handleStartQuest = () => {
    setQuestStarted(true);
    localStorage.setItem("questStarted", "true");
  };

  const handleEndQuest = () => {
    setQuestStarted(false);
    localStorage.removeItem("questStarted");
    window.location.reload();
  };

  const handleNoClick = () => {
    alert("You chose not to start the quest.");
  };

  return (
    <section className="w-full  flex relative">
      {loading && <LoadingBg />}

      {/* sidebar */}
      <div className="w-[20%] hidden 992:block">
        <Sidebar />
      </div>

      {/* main section */}
      <div
        className="qwestSection w-full 992:w-[80%] h-full relative"
        style={{
          background: `url(${qwestbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
      
        <div className="overlay absolute opacity-[0.4] bg-black w-full h-full"></div>
        <div className="overflow-hidden z-20 relative  pr-10">
          <Top/>
        </div>
        <div className="w-full h-full p-3 overflow-auto">
          {!questStarted ? (
            <StartQuest
              onYesClick={handleStartQuest}
              onNoClick={handleNoClick}
            />
          ) : (
            <QwestScenes onEndQuest={handleEndQuest} />
          )}
         
        </div>
      </div>
    </section>
  );
};

export default Qwest;
