import icon from "../../assets/images/survey.svg"
import { useTheme } from "../../context/ThemeContext"

function Question({title, type}) {
    const {resTheme} = useTheme();
    return (
        <div className="question-container">
            <div className="question-icon">
                <img src={icon}
                     alt="Question icon"/>

            </div>
            <div className="question-box">
                <h2>{title}</h2>
                <p style={{color:resTheme==='dark'?'#37D8AD':''}}>{type}</p>
                <p>What's your favorite color?</p>
            </div>
        </div>
  )
}
export default Question