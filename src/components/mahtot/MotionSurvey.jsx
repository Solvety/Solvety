import scheduleIcon from '../../assets/images/schedule.svg'
import { GoClock } from "react-icons/go";

function MotionSurvey() {


  return (
    <div className="motion-survey-box">
        <div id='schedule-icon'>
            <img src={scheduleIcon}
                 alt="icon of schedule"/>
        </div>
        <div className="time">
            <p>Motion Survey</p>
            <div className="clock">
            <GoClock size={'2rem'}/>
            <p>Nov 4, 10am-11am</p>
            </div>
        </div>
        <div className='edit-btn'>
            <p>Edit</p>
        </div>
    </div>
  )
}
export default MotionSurvey