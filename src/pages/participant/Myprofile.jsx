import { SideBar, TopNav } from "./Index"
import '../../assets/css/my-profile.css';
import Footer from "../../components/Footer";
import { useState } from "react";
import { useTheme } from '../../context/ThemeContext'; 
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import avatar from '../../assets/images/avatarBig.svg'
import level from '../../assets/images/level.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg'
import editIcon from '../../assets/images/editIcon.svg'
import ReactSelect from "react-select";
import Payment from "./Payment";

function Myprofile() {
         
        const {theme} = useTheme();
        const [email, setEmail] = useState('')
        const [phoneNum, setPhoneNum] = useState('')
        const [gender, setGender] = useState('male')
        const [userDetails, setUserDetails] = useState({
                                                        age:18,
                                                        maritalsStatus:'',
                                                        nationality:"",
                                                        occupation:"",
                                                        stateOrigin:"",
                                                        incomeRange:'',
                                                        worldView: '',
                                                        educationLevel: '',

        })
        const options = []

        for(let i=18; i<=60; i++){
            options.push({value:i, label:i })
        }

        const nationalityOptions = [{value:'nigerian', label:'Nigerian'}]
        const occupationOptions = [{value:'freelancer', label:'Freelancer'},
                                   {value:'unemployed', label:'Unemployed'}]

        const stateOriginOptions = [{value:'oyo', label:'OYO'}]
        const incomeRangeOptions = [ {value:'< 10,000', label:'< 10,000'},
                                     {value:'100,000-200,000', label:'100,000-200,000'}]
        const worldviewOptions = [{value:'christian', label:'Christian'},
                                  {value:'islam', label:'Islamic'},
                                  {value:'other', label:'Other'}]

        const educationLevelOptions = [{value:'undergraduate', label:"Undergraduate"},
                                       {value:'postgraduate', label:"Postgraduate"}]

        const defaultOption = { value: '', label: '-- Select --' };
        const selectStyles = {
       
            control: (provided, state) =>({
                ...provided,
                padding:'5px 0px',
                cursor:'pointer',
                borderRadius:'10px',
                border:theme==='dark'?'1px solid rgba(244, 244, 244, 0.5)':"",
                backgroundColor:theme==='dark'?'#201F24':'#fff',
            }),
            singleValue: (provided) => ({
                ...provided,
                color:theme==='dark'?'rgba(244, 244, 244,0.5)': 'rgba(35, 33, 33,0.5)',
                fontWeight:'500',
                fontSize:'18px',
                backgroundColor:theme==='dark'?'#201F24':'#f5f2fa', 

            }),
            option: (provided, state) =>({
                ...provided,
                backgroundColor:state.isSelected? 'rgb(244, 244, 244)': '#fff',
                color: 'rgba(35, 33, 33,0.5)',
                
           ':hover': {
                backgroundColor:'#f5f2fa', 
              }}),
       
    }
        
    const handleSelected = (selectedOption, fieldName) =>{

        setUserDetails(prevState=> ({
            ...prevState,
            [fieldName]:  selectedOption ? selectedOption.value : ''
        }))
    }

    const handleMartialStatus = (e) =>{
        setUserDetails(prevState=>({...prevState, maritalsStatus:e.target.value}))
    }

  return (
    <div className={`myProfile-container ${theme}`}>

        <div id="side-nav">
             {<SideBar theme={theme}/>}
        </div> 

        <div id="topNav">
            {<TopNav theme={theme}/>}
        </div>

        <div className="main-content myProfile-content">
            <div id="title">
                <p>Fusky referred 5 friends and just got 50 QWEST</p>
            </div>

            <div className="flex-cont">

                <div className="left-cont">
                    <div className="avatar-box">
                        <img src={avatar}
                             alt="An avatar representation of the user"/>
                        <img src={level}
                             alt="An image representing the level of the user"/>
                        <p>Stage 1 <span>Level 5</span></p>
                    </div>

                    <div className="verfication-box">
                        <label htmlFor="email">confirm e-mail address</label>
                        <input type="email"
                               value={email}
                               id="email"
                               name="email"
                               placeholder="Spacejake@gmail.com"/>
                        
                        <div className="icons">

                                <img src={deleteIcon}
                                    alt="a delete icon"/>
                                <img src={editIcon}
                                    alt="An edit icon"/>
                        </div>
                             
                        <label id="num">phone number verification </label>
                        <input type="tel"
                               id="num"
                               value={phoneNum}
                               name="phoneNum"
                               placeholder="090******354"/>

                        <div className="icons">
                                <img src={deleteIcon}
                                    alt="a delete icon"/>
                                <img src={editIcon}
                                    alt="an edit icon"/>

                        </div>

                        <div className="last">
                            <h2>KYC verification</h2>
                            <p>complete</p>
                        </div>
                    </div>

                    <div className="user-details">

                        <div id="gender-box">
                            <h3>Gender</h3>
                            <input type="radio"
                                   name="gender"
                                   checked={gender==='male'}
                                   id="male"
                                   value="male"
                                   onChange={(e)=> setGender(e.target.value)}/>
                            <label htmlFor="male"><span id="checked"></span> Male</label>

                            <input type="radio"
                                   name="gender"
                                   value="female"
                                   checked={gender==="female"}
                                   id="female"
                                   onChange={(e)=>setGender(e.target.value)}/>

                            <label htmlFor="female"><span id="checked"></span>Female</label>

                        </div>

                        <div className="age-box">
                            <label htmlFor="age">Age</label>
                            <Select
                                        value={options.find(option => option.value === userDetails.age) || defaultOption}
                                        options={options}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'age')}
                                        className="select-age"
                                        styles={selectStyles}/>
                         </div>

                         <div className="status-box">
                            <h3>Marital status</h3>
                            <input type='radio'
                                   value="single"
                                   checked={userDetails.maritalsStatus==='single'}
                                   onChange={handleMartialStatus}
                                   id="single"/>
                            <label htmlFor="single"><span id="checked"></span>Single</label>

                            <input type='radio'
                                   value="married"
                                   checked={userDetails.maritalsStatus==='married'}
                                   onChange={handleMartialStatus}
                                   id="married"/>
                            <label htmlFor="married"> <span id="checked"></span>Married</label>

                            <input type='radio'
                                   value="divorced"
                                   checked={userDetails.maritalsStatus==='divorced'}
                                   onChange={handleMartialStatus}
                                   id="divorced"/>
                            <label htmlFor="divorced"><span id="checked"></span>Divorced</label>
                         </div>

                         <div className="details-box">

                            <div className="box one">
                                <label htmlFor="nationality">Nationality</label>

                                <Select
                                    value={nationalityOptions.find(option => option.value === userDetails.nationality) || defaultOption}
                                    options={nationalityOptions}
                                    onChange={(selectedOption)=> handleSelected(selectedOption, 'nationality')}
                                    id="nationality"
                                    styles={selectStyles}/>
                                   
                            </div>

                            <div className="box two">
                                <label htmlFor="occup">Occupation</label>
                                <Select
                                        value={occupationOptions.find(option => option.value === userDetails.occupation) || defaultOption}
                                        options={occupationOptions}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'occupation')}
                                        id="occup"
                                        styles={selectStyles}/>
                            </div>

                            <div className="box three">
                                <label htmlFor="state">State of origin</label>
                                <Select 
                                        value={stateOriginOptions.find(option => option.value === userDetails.stateOrigin) || defaultOption}
                                        options={stateOriginOptions}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'stateOrigin')}
                                        id="state"
                                        styles={selectStyles}/>
                                
                            </div>

                            <div className="box four">
                                <label htmlFor="income">Income range</label>
                                <Select 
                                        value={incomeRangeOptions.find(option => option.value === userDetails.incomeRange) || defaultOption}
                                        options={incomeRangeOptions}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'incomeRange')}
                                        id="income"
                                        styles={selectStyles}/>
                            </div> 

                            <div className="box five">

                                <label htmlFor="view">World view</label>
                                <Select 
                                        value={worldviewOptions.find(option => option.value === userDetails.worldView) || defaultOption}
                                        options={worldviewOptions}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'worldView')}
                                        id="view"
                                        styles={selectStyles}/>
                            </div> 
                            <div className="box six">
                                <label htmlFor="edc">Education level</label>
                                <Select 
                                        value={educationLevelOptions.find(option => option.value === userDetails.educationLevel) || defaultOption}
                                        options={educationLevelOptions}
                                        onChange={(selectedOption)=> handleSelected(selectedOption, 'educationLevel')}
                                        id="edc"
                                        styles={selectStyles}/>
                            </div> 

                               
                         </div>

                         <div className="interest-box">
                            <h3>Interest</h3>
                            <div className="interest-lists">
                                <p>Product management</p>
                                <p>Design</p>
                                <p>Clothing</p>
                                <p>Software development</p>
                            </div>
                         </div>
                    </div>

                </div>

                <div className="right-cont">

                   <div className="first-row">
                    <h2>Payment details</h2>
                  
                  <div className="airtime-box">
                      {<Payment heading='Airtime' 
                              list1 = 'Input phone number'
                              list2 = 'Network'/>}
                              </div>

                   <div className="bank-box" >          
                    {<Payment heading='Local bank details' 
                              list1 = 'Bank name'
                              list2 = 'Account number'/>}</div>

                    <div className="crypto-box">
                    {<Payment heading='Crypto Wallet: Tether (USDT on tronx)' 
                              list1 = 'Wallet address'/>}</div>

                    <p>Set payment pin <span>here</span></p>
                   </div>

                   <div className="second-row">
                        <p>Earn 5 Qwes when you complete profile</p>
                   </div>
                </div>
            </div>


        </div>
        <div className="signedUp-footer">
            {<Footer/>}
        </div>
    </div>
  )
}
export default Myprofile


