import { SideBar, TopNav } from "./Index"
import avatar from '../../assets/images/avatar.svg';
import lightTheme from '../../assets/images/theme1.png';
import darkTheme from '../../assets/images/theme2.png';
import autoTheme from '../../assets/images/theme3.png';
import Footer from "../../components/Footer";
import ToggleInput from "../../components/ToggleInput";
import { useState } from "react"
import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

function Settings() {
     const { theme, toggleTheme } = useTheme(); // Access theme state and toggleTheme function

    const [isAccountClicked, setIsAccountClicked] = useState(true)
    const [isGeneralClicked, setIsGeneralClicked] = useState(false)
    const [isSecurityClicked, setIsSecurityClicked] = useState(false)
    const [isNotificationsClicked, setIsNotificationsClicked] = useState(false)
   

    const styles={
      input:{
        backgroundColor: theme==="dark"?"#201F24":"#F4F4F4",
      }
    }
   

    const handleClick = (clicked) =>{
      // preventDefault()
      switch(clicked){
        case "Account": 
              setIsAccountClicked(true);
              setIsGeneralClicked(false);
              setIsNotificationsClicked(false);
              setIsSecurityClicked(false);
              break;
        case "Security":
          setIsAccountClicked(false);
          setIsGeneralClicked(false);
          setIsNotificationsClicked(false);
          setIsSecurityClicked(true);
          break;
        case "General":
            setIsAccountClicked(false);
            setIsGeneralClicked(true);
            setIsNotificationsClicked(false);
            setIsSecurityClicked(false);
            break;
        case "Notifications":
              setIsAccountClicked(false);
              setIsGeneralClicked(false);
              setIsNotificationsClicked(true);
              setIsSecurityClicked(false);
              break;
        
      }
    }
    return (
    <div className={isSecurityClicked? "security-settings-container" :"settings-container"} style={{backgroundColor: theme==="dark"?"#000":"#F7F7F7"}}>


   <div id="side-nav">
   {<SideBar theme={theme}/>}
    </div> 
    <div id="topNav">
    {<TopNav theme={theme}/>}
    </div>
   
    <div className="main-content" style={{backgroundColor: theme==="dark"?"#201F24":"#fff"}}>
       <div className="insideNav" id={theme==="dark"?"insideNavDark":""}>
        <button className={isAccountClicked? "btn" : ''}
                onClick={()=>handleClick("Account")} >Account</button>
        <button className={isGeneralClicked? "btn" : ''}
                onClick={()=>handleClick("General")}>General</button>
        <button className={isSecurityClicked? "btn" : ''}
                onClick={()=>handleClick("Security")}>Security</button>
        <button className={isNotificationsClicked? "btnn" : ''}
                onClick={()=>handleClick("Notifications")}>Notifications</button>

       </div>
       
       <div className="content">
         {isAccountClicked? <Account theme={theme}/>: 
         isGeneralClicked? <General theme={theme} toggleTheme={toggleTheme} /> :
          isSecurityClicked? <Security theme={theme} styles={styles}/>: 
          isNotificationsClicked?<Notifications theme={theme}/>: <Account theme={theme}/>}
       </div>

       

        </div>
        <div className="signedUp-footer">
        {<Footer theme={theme}/>}
       </div>
    </div>


    
    
    
  )
}

const Account = ({theme})=>{
  return(
    <div className={theme==="dark"?"accountContent dark":"accountContent"} style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>
      <div className="headings">
        <h1  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Account</h1>
        <p  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Edit basic informations</p>
      </div>
      
      <div className="avatar-modify">
        <div className="avatar"><img src={avatar}/></div>
        <div id="upload-avatar"><button>Upload Avatar</button></div>
        <p id="caption" style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Image should not be more than 10mb</p>
        <div id="remove-avatar"><button className={`rmAvatar ${theme}`}>Remove Avatar</button></div>
      </div>
      <label htmlFor="userName" id="uname">Username</label>
      <input type="text" name="userName" id="userName"
             placeholder="@Jake"/>
      <label htmlFor="Email">E-mail address</label>
      <input type="email" name="Email" id="Email"
             placeholder="Spacejake@gmail.com"/>

      <div className="del-box">
      
       <h3>Delete account</h3>
        <p>by deleting this account you will lose all data associated with it</p>
       
        
        <button id="delBtn">
          Delete account
        </button>
        </div>

    </div>
  )
}

const General = ({theme, toggleTheme})=>{
  const [soundEffect, setSoundEffect] = useState(true)
 

  const handleToggle = () => {
     setSoundEffect(prevState=> !prevState)
      
  }

  return (
    <div className="generalContent">
      <h2 style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>General</h2>
      <div className="themeBox">
        <h3 style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Theme</h3>
        <div className="themeLists">
          <div id="theme-1" className="themes">
            <img src={lightTheme}
                 alt="An image indicating a light theme"
                 onClick = {()=>toggleTheme('light')}
                 className={theme==="light"? "currentTheme": ""}/><caption style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Light</caption>
          </div>
          <div id="theme-2" className="themes">
            <img src={darkTheme}
                  alt="An image indicating a dark theme"
                  onClick = {()=>toggleTheme('dark')}
                  className={theme==="dark"? "currentTheme": ""}/><caption style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Dark</caption>
          </div>
          <div id="theme-3" className="themes">
            <img src={autoTheme}
                 alt="An image indicating an auto theme"
                 onClick = {()=>toggleTheme('auto')}
                 className={theme==="auto"? "currentTheme": ""}/><caption style={{color: theme==="dark"?"#FFF":"#201F24"}}>Auto</caption>
          </div>
        </div>
      </div>
      <div id="soundEffectBox">
     <h3 style={{color: theme==="dark"?"#FFF":"#201F24"}}>Sound effect </h3>
      <label>
           
            <input type="checkbox" defaultChecked={soundEffect} onClick={handleToggle} />
            <span />
            
        </label>
      </div>
    </div>
  )
}

const Security = ({theme, styles})=>{
   const [passwords, setPasswords] = useState({
    oldPwd:"",
    newPwd:"",
    confirmpwd:""
   })

   const [pins, setPins] = useState({
      oldPin:"",
      newPin:"",
      confirmPin:""
   })

const handleChangePassword = (e)=>{
  setPasswords({...passwords,
               [e.name.target]:e.target.value})
}

const handleChangePin = (e)=>{
  setPins({...pins,
           [e.target.name]: e.target.value})
}

  return (
    <div className={theme==="dark"?"securityContent dark":"securityContent"} style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>
      <p>Security</p>
      {/* change password */}
      <h2>Change password</h2>
       <label htmlFor="oldPwd">
        Enter old password
      </label>
      <input 
            type="password"
            name="oldPwd"
            id="oldPwd"
            placeholder="**********"
            onChange={handleChangePassword}/>

    <label htmlFor="newPwd">
        Enter new password
      </label>
      <input 
            type="password"
            name="newPwd"
            id="newPwd"
            placeholder="**********"
            onChange={handleChangePassword}/>

     <label htmlFor="confirmPwd">
        Confirm new password
      </label>
      <input 
            type="password"
            name="confirmPwd"
            id="confirmPwd"
            placeholder="**********"
            onChange={handleChangePassword}/>
      
      {/* change pin input */}
      <button type="submit">Change</button>
      <h2>Change pin</h2>
      <label htmlFor="oldPin">
        Enter old pin
      </label>
      <input 
            type="password"
            name="oldPin"
            placeholder="****"
            id="oldPin"
            onChange={handleChangePin}
            required/>
   <label htmlFor="newPin">
        Enter new pin
    </label>
      <input 
            type="password"
            name="newPin"
            placeholder="****"
            id="newPin"
            onChange={handleChangePin}
            required/>
     <label htmlFor="confirmPin">
        Confirm new pin
      </label>
      <input 
            type="password"
            name="confirmPin"
            placeholder="****"
            id="confirmPin"
            onChange={handleChangePin}
            required/>
        <button type="submit">Change</button>
    </div>
  )
}

const Notifications = ({theme})=>{
  const [notificationValues, setNotificationValues] = useState({
    qwestSms: true,
    referralSms:  true,
    withdrawalSms:  true,
    progressSms:  true,
    qwestEmail:  true,
    referralEmail:  true,
    withdrawalEmail:  true,
    progressEmail:  true,
  });

  const handleCheckboxChange = (checkboxId) => {
    setNotificationValues((prevValues) => ({
      ...prevValues,
      [checkboxId]: !prevValues[checkboxId],
    }));
  };


  return (
<>
<div className="notificationsContent"  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>
      <h2>Notifications</h2>
      <p id="void"></p>
        <p id="head-1">SMS</p> <p id="head-2">E-mail</p>
     
      
        <p id="qwestNotf">Qwest notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('qwestSms')}
                    checked={notificationValues.qwestSms}
                    id="qSms"/>}
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('qwestEmail')}
                    checked={notificationValues.qwestEmail}
                    id="qEmail"/>}
      
     
        <p id="refNotf">Referral notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('referralSms')}
                    checked={notificationValues.referralSms}
                    id="rSms"/>}
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('referralEmail')}
                    checked={notificationValues.referralEmail}
                    id="rEmail"/>}
      
     
        <p id="wDNotf">WithDrawal notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('withdrawalSms')}
                    checked={notificationValues.withdrawalSms}
                    id="wSms"/>}
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('withdrawalEmail')}
                    checked={notificationValues.withdrawalEmail}
                    id="wEmail"/>}
      
    
        <p id="progNotf">Progress reminder</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('progressSms')}
                    checked={notificationValues.progressSms}
                    id="pSms"/>}
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('progressEmail')}
                    checked={notificationValues.progressEmail}
                    id="pEmail"/>}
      
    </div>
    <div className={theme==="dark"?"s-notf dark":"s-notf"}   style={{color: theme==="dark"?"#F4F4F4":"#201F24"}} >
    <h2>Notifications</h2>
    <p id="head-1">SMS</p>
    <div className="toggleBox f">
    <p id="qwestNotf">Qwest notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('qwestSms')}
                    checked={notificationValues.qwestSms}
                    id="qSms"/>}
    </div>
    <div className="toggleBox s">
    <p id="refNotf">Referral notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('referralSms')}
                    checked={notificationValues.referralSms}
                    id="rSms"/>}
    </div>
    <div className="toggleBox t">
    <p id="wDNotf">WithDrawal notification</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('withdrawalSms')}
                    checked={notificationValues.withdrawalSms}
                    id="wSms"/>}
    </div>
    <div className="toggleBox f">
    <p id="progNotf">Progress reminder</p>
        {<ToggleInput 
                    onChange={() => handleCheckboxChange('progressSms')}
                    checked={notificationValues.progressSms}
                    id="pSms"/>}
    </div>
    <p id="head-2">E-mail</p>
    <div className="toggleBox f">
    <p id="qwestNotf">Qwest notification</p>
    {<ToggleInput 
                    onChange={() => handleCheckboxChange('questEmail')}
                    checked={notificationValues.qwestEmail}
                    id="qEmail"/>}
    </div>
    <div className="toggleBox s">
    <p id="refNotf">Referral notification</p>
    {<ToggleInput 
                    onChange={() => handleCheckboxChange('referralEmail')}
                    checked={notificationValues.referralEmail}
                    id="rEmail"/>}
    </div>
    <div className="toggleBox t">
    <p id="wDNotf">WithDrawal notification</p>
    {<ToggleInput 
                    onChange={() => handleCheckboxChange('withdrawalEmail')}
                    checked={notificationValues.withdrawalEmail}
                    id="wEmail"/>}
    </div>
    <div className="toggleBox f">
    <p id="progNotf">Progress reminder</p>
    {<ToggleInput 
                    onChange={() => handleCheckboxChange('progressEmail')}
                    checked={notificationValues.progressEmail}
                    id="pEmail"/>}
    </div>
    </div>
    </>
  )
}



export default Settings