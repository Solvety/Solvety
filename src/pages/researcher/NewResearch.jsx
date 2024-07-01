import SlideTitle from "../../components/mahtot/SlideTitle";
import CurveyBox from "../../components/mahtot/CurveyBox";

import { useTheme } from "../../context/ThemeContext"
import { useState } from "react"
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";

function NewResearch() {
  const {resTheme} = useTheme();
  const boxItem = ['Form surveys', 'Interview', 'Focus Group', 'Card sorting',
                    'Ethnographic\n(field) observation', 'A/B Testing', 'Usability Test', 'Tree Testing', 'Voice from the street', 'Diary Studies']
  
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
        
       
            <div className={`new-research-box ${resTheme}`}>
                <h1>Create new research</h1>
                <p id="sub-title">Money saving</p>
                <SlideTitle title="Free Research"
                            color="#fff"
                            backgroundColor="#8E5DF5"
                            circleColor="#FFF3C7"/>
                <div className="research-box-container">
                    {
                        boxItem.map((item, index)=>(
                            <div className="outer-container">
                                <div className="inner-container" id={`b ${index} `}>
                                <CurveyBox 
                                            title={item} 
                                            index={index} 
                                            key={index} 
                                            />
                                </div>
                            </div>
                        ))
                    }
     </div>
 </div>
        
        </div>
        </div>
        <div className="research-footer">
        <Footer />
        </div>  
        </div>
  )
}
export default NewResearch

