import { useState } from "react"
import MotionSurvey from "../../components/mahtot/MotionSurvey"
import { useTheme } from "../../context/ThemeContext"
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";

function ScheduledResearch() {
      const {resTheme} = useTheme();
      const filterByType = ['Survey',
                            'User Interviews',
                            'All research',
                            'Usability test']
      
  return (
    <div className={`researcher-content ${resTheme}`}>
    <div className="researcher-menu">
      <SideBar/>
    </div>

    <div className="home-main">
    <div className="top-section">
      <Top/>
    </div>


    <div className="home-main-section">
            {/* content */}
              
            <div className={`scheduled-container ${resTheme}`}>
      <h2>Scheduled Research</h2>
      <p>Filter by type</p>
      <div className="filter-box">

        {
          filterByType.map((type, index)=>(
            <div className="type">
            {type}
              </div>
          ))
        }

      </div>

      <div className="survey-comp">
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
        <MotionSurvey/>
      </div>   


      </div>
    </div>
    
   
    </div>
    <div className="research-footer">
    <Footer/>
  </div>
    
</div>
  )
}
export default ScheduledResearch



