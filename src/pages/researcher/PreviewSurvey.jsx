import Question from "../../components/mahtot/Question";
import { useTheme } from "../../context/ThemeContext";
import { IoArrowBack } from "react-icons/io5";
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import * as React from "react";
import CalendarMu from "../../components/mahtot/CalendarMu";
import Modal from "../../components/mahtot/Modal";
import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import Calendar from '../../components/mahtot/Calendar';
function PreviewSurvey() {
    const {resTheme} = useTheme();
    const [deadline, setDeadline] = useState(new Date());
    const [researchDeadline, setResearchDeadline] = useState();
    const [isOpen,setIsOpen] = useState({deadline:false, startResearch:false})
    const [schedule, setSchedule] = useState();
    const [startResearch, setStartResearch] = useState(false)
    const [resetClicked, setResetClicked] = useState(false)

    const onClose = ()=>{
        setIsOpen(false)
      }
    
      const saveResearch = () => {
        if (researchDeadline && schedule) {
          alert(`Research saved successfully!
            Deadline: ${researchDeadline}
            Start date: ${schedule}`);
        } else {
          alert('Please set a deadline and start date for the research.');
        }
      };

   const handleReset = () => {
    setResearchDeadline(null);
    setSchedule(null);
    setResetClicked(true)
  };


  const questionTypes = [
    { title: "Q1", type: "Multiple choice" },
    { title: "Q2", type: "Checkboxes" },
    { title: "Q3", type: "Short text" },
    { title: "Q4", type: "Long text" },
  ];

  return (
    <div className={`researcher-content ${resTheme}`}>
      <div className="researcher-menu">
        <SideBar />
      </div>
      <div className="home-main">
        <div className="top-section">
          <Top />
        </div>
        <div className="home-main-section">
          {/* content */}
          <div className={`preview-survey-container ${resTheme}`}>
            <Link to="/researcher/survey">
              <IoArrowBack size={"2rem"} />
            </Link>
            <h1>Preview your survey</h1>
            <p> You'll be able to edit this draft before you send it out.</p>
            <h2>Questions</h2>
            <div className="question-component">
            {
                questionTypes.map((item, index)=>(
                    <Question title={item.title}
                            type={item.type}
                            key={index}/>
                ))
            }
          
                </div>
             
                 <div className="calandar-boxes">
                    <div className="deadline-cont">
                        <label>
                            Set deadline (optional)
                            <CalendarMu deadline={researchDeadline} 
                                        setDeadline={setResearchDeadline}
                                        type="deadline" 
                                        resetClicked={resetClicked}
                                        setResetClicked={setResetClicked}/>

                        </label>
                   </div>

                   <div className="startResearch-cont">
                        <label>
                             Schedule research *
                            <CalendarMu startDate={schedule}
                                        setStartDate={setSchedule}
                                        type="start" 
                                        resetClicked={resetClicked}
                                        s={setResetClicked}/>

                        </label>
                   </div>
                  
                  </div>   
                
               
        <Modal open={isOpen} 
               onClose={onClose} 
               setStartResearch={setStartResearch}
               deadline={deadline}
               setDeadline={setDeadline}
               schedule={schedule}
               setSchedule={setSchedule}
               >
           {<CalendarMu onClose={onClose}/>}
           
        </Modal>
      


        <div className="end-btns">
         
              <button
                style={{ backgroundColor: "#8E5DF5", color: "#fff" }}
                onClick={() => setIsOpen({ ...isOpen, startResearch: true })}>
                   Start Research
              </button>
              <button onClick={saveResearch}>Save research</button>
              <button onClick={handleReset}>
                  Reset
          </button>
            </div>
    </div>
               
             
  
          </div>
        </div>
        
     
      <div className="research-footer">
          <Footer />
        </div>
    </div>
  );
}
export default PreviewSurvey;
