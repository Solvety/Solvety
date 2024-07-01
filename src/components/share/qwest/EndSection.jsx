import RangeSlider from "../../mahtot/qwest/RangeSlider"
import Button from "../../mahtot/qwest/Button"
import QwestButton from "../../ben/qwest/QwestButton"
import { useQuest } from "../../../context/QwestContext"


function EndSection() {
  const {togglePause, endQuiz, isPaused, currentQuestion, max,
    questionLength} = useQuest()
    console.log(max)
  return (
    <div className="qwest-end-section">
        <div className="totQuestions">
            <p>Total Questions</p>
            <RangeSlider id='below'
                         max={questionLength}
                         initialValue={max}
                         />
                         
        </div>
        <div className="q-btn-box">

          <QwestButton  color="#333131"
                        bgColor="#FFF3C7"
                        onClick={togglePause}
                        hidden={false}>
                        
                        {isPaused ? "Start" : "Pause"}
          </QwestButton>

           <QwestButton  color="#FFFFFF"
                         bgColor="#FA8787"
                        onClick={endQuiz}
                        hidden={false}>
                        
                   End
           </QwestButton>

         
        </div>
    </div>
  )
}
export default EndSection