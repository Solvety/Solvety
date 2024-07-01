import { useTheme } from "../../context/ThemeContext"
import { useState } from "react";
import Select from "react-select";
import { fieldOptions} from '../../data/data'
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Create() {
    const {resTheme} = useTheme();
    const [researchDetails, setResearchDetails ] = useState({
                                                                titleOfResearch:'',
                                                                objectiveOfResearch:'',
                                                                field:''
                        })
    const defaultOption = {value:'', label:'Select a field'}
   


    const handleResearchDetails = (e) =>{
            setResearchDetails(prevState=>({...prevState, [e.target.name]:e.target.value}))
    }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'none' : 'inherit',
            border: '1px solid #A5A1A1',
            color: state.isFocused ? 'black' : 'red', 
            borderRadius: '10px',
            padding: '10px',
            zIndex:'1',
            
                }),
        singleValue: (provided, state) => ({
            ...provided,
            color:resTheme==='dark'?'#fff': 'rgba(0, 0, 0, 0.8)', 
        }),
        menuList: styles => ({
            ...styles,
            background: resTheme==='dark'?'#201F24':'#fff'
        }),
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            background: isFocused
                ? 'rgba(142, 93, 245, 0.5)'
                : isSelected
                    ? 'rgba(142, 93, 245, 1)'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100
        })
    };
    
    console.log(researchDetails)

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
            
            <div className={`create-survey-container ${resTheme}`}>
                <h1>Upload research details</h1>
                <h2>Lets get started with some details about your research</h2>
                <form>
                    <label>
                        <div>What is the title of your Research? <sup>*</sup></div>
                        <input type="text"
                            value={researchDetails.titleOfResearch}
                            placeholder="Example: The impact of climate change on urban development...."
                            onChange={handleResearchDetails}
                            name="titleOfResearch"
                            />

                    </label>

                    <label>
                        Research objectives (optional)
                        <textarea
                            value={researchDetails.objectiveOfResearch}
                            onChange={handleResearchDetails} 
                            placeholder="List the main goals of your research"
                            name="objectiveOfResearch"
                            />
                    </label> 

                    <div>
                        <label>
                            What is your research field?
                            <Select
                                value={researchDetails.field}
                                options={fieldOptions}
                                onChange={(selectedOption) => setResearchDetails({ ...researchDetails, field: selectedOption })}
                                name="field"
                                id="select-field"
                                styles={customStyles}
                                classNamePrefix="react-select"
                                menuPlacement="auto"
                                maxMenuHeight={300}
                                className="custom-select" // Add a custom class name
                            />

                        </label>
                        <p>or input field</p>
                    </div>
                   
                       <button type='submit'>
                          <Link to="/researcher/survey">
                            Set survey questions</Link>  
                         </button>
                        
                </form>
            </div>
           
    
            
            </div>
            </div>
            <div className="research-footer">
        <Footer />
        </div>  
        </div>
        
  )
}
export default Create

