import { SideBar, TopNav } from "./Index"
import Footer from "../../components/Footer";
import rArrow from '../../assets/images/right-arrow.svg';
import vector from '../../assets/images/Vector.svg';
import icon from '../../assets/images/decLines.svg';
import iconW from '../../assets/images/iconW.svg';
import paypalIcon from '../../assets/images/paypal.svg';
import star from '../../assets/images/star.svg';
import level from '../../assets/images/level.svg';
import lock from '../../assets/images/lock.svg';
import lockW from '../../assets/images/lockW.svg';
import vector0 from '../../assets/images/Vector0.svg';
import vector1 from '../../assets/images/Vector1.svg';
import vector2 from '../../assets/images/Vector2.svg';
import vector3 from '../../assets/images/Vector3.svg';
import vector4 from '../../assets/images/Vector4.svg';
import vector5 from '../../assets/images/Vector5.svg';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { useState } from "react";
import { useTheme } from '../../context/ThemeContext'; 

function Rewards() {
    const { theme} = useTheme(); 

    const options = [
        {value:'All time', label:"All time"},
        {value:'This time', label:'This time'}
    ]
    const selectStyles = {
        control: (provided, state) =>({
            ...provided,
            padding:'5px 0px',
            cursor:'pointer',
            border: theme==='dark'?'1px solid #8E5DF5':'1px solid #201F24',
            backgroundColor:theme==='dark'?'#525157':'#fff',
        }),
        singleValue: (provided) => ({
            ...provided,
            color:theme==='dark'?'#fff': '#6941C6',
            fontWeight:'500',
            fontSize:'14px',
        }),
        option: (provided, state) =>({
            ...provided,
            backgroundColor:state.isSelected? '#f0f0f0' : '#fff',
            color: 'black',
            padding: '5px 10px',
            borderBottom:'1px solid #ccc',
        }),
    }
    const [selectedOption,setSelectedOption] = useState(options[0]);

    const handleSelected = (e)=>{
        setSelectedOption(e);
    }
    
  return (
    <div className={`rewards-container ${theme}`}>
    <div id="side-nav">
   {<SideBar theme={theme}/>}
    </div> 
    <div id="topNav">
    {<TopNav theme={theme}/>}
  
    </div>

   <div className={`main-content rewards-content ${theme}`}>
    <div className="left-content">
        <div id="note">
            <p>Fusky referred 5 friends and just got 50 QWES</p>
        </div>
     <div className="left-side">
        {<LeftContent head="Stipend" balance="₦5000" action="withdraw" id=""/>}
     </div>
     <div className="right-side" >
        {<LeftContent head="$Qwes earned" balance="360" action="Use" id="right-side"/>}
     </div>
     <div className="second-box">
        <div className="top-header">
            <div id="header"><h1>History</h1><div id="circle">18</div> </div>
            <div className="select-option">
              <Select 
                     value={selectedOption}
                      options={options}
                      onChange={handleSelected}
                      styles={selectStyles}
                      isClearable={true}
                      className="select-option"
                      />
                 
                      
                       
            </div>
            <div id="filters-dropdown"> 

            <img src={theme==='dark'?iconW:icon}
                 alt="icon of menu"/> <p>More filters</p>
            </div>
        </div>

        <div className="record-box">
        <div className="time">
            <h2>Date</h2>
            <p>24th Feb 2023</p>
            <p>24th Feb 2023</p>
            <p>24th Feb 2023</p>
        </div>
        <div className="transaction">
            <h2>Transaction name</h2>
            <p style={{display:'flex', gap:'5px',
                       alignItems:'flex-start'}}>
                         <img src={paypalIcon}
                     alt="an icon of paypal"
                     style={{width:'40px'}}/>spacejake@gmail.com</p>
            <p>Referral</p>
            <p>Profile set up</p>
        </div>
        <div className="category">
            <h2>Category</h2>
            <p>withdraw</p>
            <p>received</p>
            <p>received</p>
        </div>
        <div className="amount">
            <h2>Amount</h2>
            <p>₦5000</p>
            <p>10 QWES</p>
            <p>15 QWES</p>
        </div>
        </div>
        </div>
    <div className="feedback-box">
    <div className="header"><h1>Feedback</h1> <div id="circle">18</div></div>
    
    <div className="rec-table"> 
    <div id="column-one">
        <h1>Research type</h1>
        <p>surveys</p>
        <p>surveys</p>
        <p>surveys</p>
     </div>

     <div id="column-two">
        <h1>Rating</h1>
        <div id="star">{<Star/>}</div>
        <div id="star">{<Star/>}</div>
        <div id="star">{<Star/>}</div>

     </div>
     <div id="column-third">
        <h1>Response</h1>
        <p>Very good</p>
        <p>Excellent</p>
        <p>Excellent</p>
     </div></div>
     <div id="view-all"><p>view full feedbacks</p>
        <img src={rArrow}
             alt="an icon of arrow"/></div>
    </div>
    
    </div>

    <div className="right-content">
       <div className="level-box one">
          <img src={level}
               alt="An icon representing the level and stage of the user"/>
            <p>Stage 1 <span>Level 1</span></p>
       </div>

       <div className="level-box two">
        <div className="stage-box">
            <h2>Stage 2</h2><span>
                <img src={lock}
                     alt="icon of a lock"/>
                </span>
        </div>
        <div id="level-7">{<Levels url={vector0} level="7" bC="#F8F5FF" color="#6829FA" rotate="0deg"/>}</div>
        <div id="level-6">{<Levels url={vector1} level="6" bC="#EEF3FF" color="#2B67F7" rotate="2deg"/>}</div>
        <div id="level-5">{<Levels url={vector2} level="5" bC="#FFF9F2" color="#FFA945" rotate="-2deg"/>}</div>
        <div id="level-4">{<Levels url={vector3} level="4" bC="#F3FFF6" color="#0BBB37" rotate="-2deg"/>}</div>
        <div id="level-3">{<Levels url={vector4} level="3" bC="#FFF0F0" color="#F91717" rotate="2deg"/>}</div>
        <div id="level-2">{<Levels url={vector5} level="2" bC="#F0FCFF" color="#10BEE9" rotate="0deg"/>}</div>
       

    <div className="surveys-box">
      <div className="flex-items">
        <div id="first-col">
            <p>Form surveys</p> <p>level 1</p>
        </div>
        <div id="sec-col">
            <img src={vector} 
                 alt="an icon representing a level"/> 
            <span>10</span></div>
        <div id="third-col">
            <div className="list"><p>Take form surveys</p></div>
            <div className="list"><p>view history</p></div>
            <div id="last-list" className="list">
                <img src={lockW}
                     alt="An image of lock"/>
              <p>  unlock with 10 QWES
                </p></div>
                    </div>
                    </div>
            
    </div>
    <p id="last-p">Stage 1</p>
    </div></div>
   </div>
 <div className="signedUp-footer">
    {<Footer/>}
 </div>
    </div>


  )
}

const LeftContent = ({head, balance, action, id})=>{
    return(
        <div className="reward-box" id={id}>
            <div id="item-1">
                <h2>Earning</h2>
                <h1>{head}</h1>
            </div>
            <div id="item-2">
                <p>history </p><span><img src={rArrow}/></span>
            </div>
            <div id="item-3">
                <p>Total balance: </p>
                <h1>{balance==="360"?<><img src={vector}/>360</>:balance }</h1>
            </div>
            <div id="item-4">
             {action}
            </div>
        </div>
    )
}

const Star = ()=>{
    return(
        <div className="star">
            <img src={star}
                 alt="An icon of a star"/><span>5</span>
        </div>
    )
}

const Levels= ({url, level, bC, color, rotate})=>{
    return(
        <div className="levels"
             style={{backgroundColor:bC, color:color, rotate:rotate}}>
          <img src={url}
                alt="colorful icon"/>
          <p>coming soon</p>
          <div id="lock">
            <p>level {level}</p>
            <img src={lock}
                 alt="an image of a lock"/>
          </div>
        </div>
    )
}
export default Rewards