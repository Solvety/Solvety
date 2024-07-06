import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import "../../assets/css/Qwest/style.css";
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
    <div className={`researcher-content `}>
            <div className="researcher-menu">
                 <SideBar/>
            </div>

            <div className="home-main" id="participant-bg">
               <div id="sec-layer">
               
                        <div className="top-section">
                           <Top/>
                        </div>
                        <div className="qwest-parts">
                            {/* content */}
                        
                           <EndSection/>
                            <Avatar/>
                        
                        </div>
                  </div>
            </div>
          
        </div>
  )
}
export default QwestSec