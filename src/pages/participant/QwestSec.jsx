import '../../assets/css/Qwest/style.css';
import '../../assets/css/Qwest/qwest-mobile.css';
import EndSection from "../../components/share/qwest/EndSection";
import Avatar from "../../components/share/qwest/Avatar";
import Logo from "../../assets/qwest_assets/NewSolvety-logo.svg";
import { Link } from "react-router-dom";
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import StartQuest from "../../components/ben/qwest/StartQuest";
import QuestMobileScenes from "../../components/mahtot/qwest/QuestMobileScenes";  

function QwestSec() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTelegramClick = () => {
    setShowPopup(true);
  };

  const handleJoinTelegram = () => {
    window.open('https://t.co/21e1Kfme9k', '_blank');
  };

  const handleClosePopup = (event) => {
    event.stopPropagation(); 
    setShowPopup(false);
  };
  
  return (
    <div className="qwest-mobile">
      {/* Top sections */}
      <div className="new-top">
        <div className="left">
          <div className="telegram-box" onClick={handleTelegramClick}>
            <FaCommentDots className="telegram-icon" />
            {showPopup && (
              <div className="telegram-popup" ref={popupRef}>
                <div className="close-button" onClick={handleClosePopup}>
                  <FaTimes />
                </div>
                <p>You will access your dashboard upon mainnet release. Join our Telegram for updates</p>
                <button onClick={handleJoinTelegram}>Join</button>
              </div>
            )}
          </div>
        </div>
        <Link to="/" id="logo-link">
          <div className="right">
            <img src={Logo} alt="logo of solvety" />
          </div>
        </Link>
      </div>
      {/* Main contents */}
      <main>
      {!questStarted ? (
            <StartQuest
              onYesClick={handleStartQuest}
              onNoClick={handleNoClick}
            />
          ) : (
            <QuestMobileScenes onEndQuest={handleEndQuest} />
          )}
      </main>
    </div>
  );
}

export default QwestSec;
