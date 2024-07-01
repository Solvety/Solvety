import '../../assets/css/signed-styles.css'
import logoBlack from "../../assets/images/logoBlack.png";
import logowhite from "../../assets/images/Logo.png";
import bell from '../../assets/images/bell.svg'
import calendarB from '../../assets/images/calendar.svg'
import calendarW from '../../assets/images/calendarB.svg'
import avatar from '../../assets/images/avatar.svg';
import coinStackB from '../../assets/images/coin-stack.svg';
import coinStackW from '../../assets/images/coin-stackB.svg';
import logOutB from '../../assets/images/log-out.svg';
import logOutW from '../../assets/images/log-outB.svg';
import menuD from '../../assets/images/menu-2.svg';
import menuW from '../../assets/images/menuW.svg';
import search from '../../assets/images/search.svg';
import settingsB from '../../assets/images/settingsB.svg';
import settings from '../../assets/images/settings.svg';
import userPlusB from '../../assets/images/user-plus.svg';
import userPlusW from '../../assets/images/user-plusB.svg';
import userB from '../../assets/images/user.svg';
import userW from '../../assets/images/userB.svg';
import xD from '../../assets/images/menu-x.svg';
import xW from '../../assets/images/xW.svg';

import { Link,useLocation, Routes, Route } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

function Index() {


  return(


    <>
    {<SideBar theme={theme}/>}
    {<TopNav theme={theme}/>}
    </>
   
    
  )
}



const SideBar =({theme})=>{
  const location = useLocation();
  const {usertype} = useTheme()
  const [isClicked, setIsClicked] = useState(false);
  
  
    if(theme==="dark"){
     var srcs={
       logo:logowhite,
       calendar:calendarW,
       user:userW,
       coinStack:coinStackW,
       userPlus:userPlusW,
       logOut:logOutW,
       settings:settingsB,
       menu:menuW,
       x:xW,
     }
    }
    else{
      var srcs={
        logo:logoBlack,
        calendar:calendarB,
        user:userB,
        coinStack:coinStackB,
        userPlus:userPlusB,
        logOut:logOutB,
        settings:settings,
        menu:menuD,
        x:xD,
      }
    }
  
  const isLinkActive = (to) =>{// Function to determine if link is active
    return location.pathname === to;
  }
  const handleClick = ()=>{
   setIsClicked(prevState=> !prevState)
  }
  return(
    <>
    <div className="side-bar for-big-devices" style={{color: theme==="dark"?"#fff":"#201F24",backgroundColor: theme==="dark"?"#201F24":"#fff" }}
         id={theme==="dark"?"sideBarDark":""}>
    <Link to="/">
      <img src={srcs.logo} 
           alt="Qwesty's logo" 
           id="logoB"/></Link> 
      <div className="flex-search">
        <img src={search} id="search-icon"  alt="search-icon"/>
        <input type="search" value="search" placeholder="Search" className="searchBox"/>
      </div>
     
         <div className="calendarBox">
         <Link to="/signedUp"><img src={srcs.calendar} id="calendar-icon" alt="Calendar icon"/><span>Qwests</span>
         </Link>
       </div>
       
       <div className="profileBox" id={isLinkActive('/signedUp/my-profile') ? 'active': ''}>
       <Link to="/signedUp/my-profile"> 
       <img 
            src={isLinkActive('/signedUp/my-profile')?userW:srcs.user} id="user-icon" alt="User icon"/> <span>My profile</span></Link>
       </div>
       <div className="rewards-box" id={isLinkActive('/signedUp/rewards') ? 'active': ''}>
       <Link to="/signedUp/rewards"> 
       <img 
            src={isLinkActive('/signedUp/rewards')?coinStackW:srcs.coinStack} id="coinStack-icon" alt="Coin-stack icon"/> <span>Rewards</span></Link>
       </div>
       <div className="settings-box" id={isLinkActive('/signedUp/settings') ? 'active': ''}>
       <Link to="/signedUp/settings"> <img src={isLinkActive('/signedUp/settings')?settingsB:srcs.settings} id="settings-icon" alt="a settings icon" /> <span>Settings</span></Link>
       </div>
       <div className="referrals-box">
       <Link to="/signedUp/referral"><img src={srcs.userPlus} id="user-plus-icon" alt="User icon"/> <span>Referrals</span></Link>
       </div>
        <div className='logOut-box'>
          <Link to="/"><img src={srcs.logOut} alt="log-out icon"/><span>Log out</span></Link>
        </div>
      </div> 

      {/* For small devices */}
      <div id="small-devices" style={{color: theme==="dark"?"#fff":"#201F24",backgroundColor: theme==="dark"?"#201F24":"#fff" }}>
      <div id="s-logo">
      <Link to="/">
      <img src={srcs.logo} alt="Qwesty's logo" /></Link> 
      </div>
      <div id="s-topNav">
      <div id="bell" style={{backgroundColor:theme==="dark"?"#424040":"#fff"}}><Link to="/signedUp"> <img src={bell} id="bell-icon" alt="A notification's bell icon"/></Link></div>
      <div id="avatar"><img src={avatar} id="avatar-icon" alt="User's picture" /></div>
      <img src={ isClicked?srcs.x:srcs.menu} alt="A navigation menu icon" id="menu"
           onClick={handleClick}/>
    
      </div>
      </div>
      { isClicked && <div className='drop-down' style={{color: theme==="dark"?"#fff":"#201F24",backgroundColor: theme==="dark"?"#201F24":"#fff" }}>
      <div className="flex-search">
        <img src={search} id="search-icon"  alt="search-icon"/>
        <input type="search" value="search" placeholder="Search" className="searchBox"/>
      </div>
     
         <div className="calendarBox">
         <Link to="/signedUp"><img src={srcs.calendar} id="calendar-icon" alt="Calendar icon"/><span>Qwests</span>
         </Link>
       </div>
       
       <div className="profileBox" id={isLinkActive('/signedUp/my-profile') ? 'active': ''}>
       <Link to="/signedUp/my-profile"> 
        <img 
              src={isLinkActive('/signedUp/my-profile')?userW:srcs.user} id="user-icon" alt="User icon"/> <span>My profile</span></Link>
       </div>
       <div className="rewards-box" id={isLinkActive('/signedUp/rewards') ? 'active': ''} >
       <Link to="/signedUp/rewards"> <img src={isLinkActive('/signedUp/rewards')?coinStackW:srcs.coinStack} id="coinStack-icon" alt="Coin-stack icon"/> 
       <span>Rewards</span></Link>
       </div>
       <div className="settings-box" id={isLinkActive('/signedUp/settings') ? 'active': ''}>
       <Link to="/signedUp/settings">  <img src={isLinkActive('/signedUp/settings')?settingsB:srcs.settings} id="settings-icon" alt="a settings icon" /> <span>Settings</span></Link>
       </div>
       <div className="referrals-box">
       <Link to="/signedUp/referral"><img src={srcs.userPlus} id="user-plus-icon" alt="User icon"/> <span>Referrals</span></Link>
       </div>
        <div className='logOut-box'>
          <Link to="/"><img src={srcs.logOut} alt="log-out icon"/><span>Log out</span></Link>
        </div>
      </div>}
      </>
  )
}

const TopNav = ({theme})=>{

  return (
    <div className="top-nav big-devices">
    <div id="bell" style={{backgroundColor:theme==="dark"?"#424040":"#fff"}}><Link to="/signedUp"> <img src={bell} id="bell-icon" alt="A notification's bell icon"/></Link></div>
      <div id="avatar"><img src={avatar} id="avatar-icon" alt="User's picture" /></div>
      <h2  style={{color: theme==="dark"?"#fff":"#201F24"}}>Jake</h2>
    </div>
  )
}

export {TopNav, SideBar}
export default Index