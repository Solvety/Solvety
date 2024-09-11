import { useState, useEffect, useRef } from "react"
import BalanceCard from "../../ben/qwest/BalanceCard"
import EndSection from "../../share/qwest/EndSection"
import CoinGrid from "../../ben/qwest/CoinGrid"
import { surveyQuestions } from "../../../data/data"
import QuestionSection from "../../ben/qwest/QuestionSection"
import Fire from "../../share/qwest/Fire";
import avatarF from "../../../assets/images/solvety-avatar.png";
// import avatarF from "../../../assets/qwest_assets/avatarVidNewFirst.gif";
// import avatarF from "../../../assets/qwest_assets/FireVidGif.gif"
import avatarSec from "../../../assets/images/Solvety-baby-with-water.png"
import { QwestProvider, useQuest } from "../../../context/QwestContext"

function QuestMobileScenes({ onEndQuest }) {

    const { changeAvatar, showRetakePopup } = useQuest();
    const thirdColumnRef = useRef(null);

    useEffect(() => {
      if (showRetakePopup && thirdColumnRef.current) {
        thirdColumnRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [showRetakePopup, thirdColumnRef]);

    
  return (
    <div className="mobile-scenes">

        <div id="first-cont">
       

            <div className="text-white" >
                
                <BalanceCard/>
            </div>
            <div className='sec-col'>
                    <div>
                        <CoinGrid/>
                        
                    </div>

                <div>
                    <EndSection id="mobile"/>
                </div> 
            </div>
        </div> 

        <div id="second-cont">
            <QuestionSection
            surveyQuestion={surveyQuestions}
            onEndQuest={onEndQuest}
            />
        </div>

        <div id="third-cont" ref={thirdColumnRef}>
        <div className="fire-mob">
            <Fire id="mob"/>
          </div>
          <div className="avatar-mob">
            <img src={changeAvatar?avatarSec:avatarF}/>
          </div>
        </div>
    </div>
  )
}
export default QuestMobileScenes

