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
import { useState } from "react";
import dayjs from 'dayjs';

function PreviewSurvey() {
    const {resTheme} = useTheme();
    const [deadline, setDeadline] = useState(new Date());
    const [isOpen,setIsOpen] = useState({deadline:false, startResearch:false})
    const [schedule, setSchedule] = useState()
    const [startResearch, setStartResearch] = useState(false)
    
    const onClose = ()=>{
        setIsOpen(false)
      }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
                <div className="pmreview">
          <button onClick={()=>setIsOpen({...isOpen, deadline:true})}>
        set deadline</button> (optional)
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
      
      
    </div>
               
             
  
            <div className="end-btns">
              <button
                style={{ backgroundColor: "#8E5DF5", color: "#fff" }}
                onClick={() => setIsOpen({ ...isOpen, startResearch: true })}
              >
                Start Research
              </button>
              <button>Schedule research</button>
              <button>Save research</button>
            </div>
          </div>
        </div>
        <div className="research-footer">
          <Footer />
        </div>
      </div>{" "}
    </div>
  );
}
export default PreviewSurvey;
