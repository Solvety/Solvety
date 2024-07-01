import SideBar from "../../components/share/SideBar"
import Top from '../../components/share/Top'
import { useTheme } from "../../context/ThemeContext"
import avatar from '../../assets/images/resAvatar.svg'
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

function SettingsRes() {
  const {resTheme, isSupportClicked, setIsSupportClicked} = useTheme();
  const [isAccountClicked, setIsAccountClicked] = useState(true)

  useEffect(()=>{
    if(isSupportClicked==true){
      setIsAccountClicked(false)
    }

  else if(isAccountClicked==true){
      setIsSupportClicked(false)
    }


   
    

    fetch('http://localhost/qwestymain/api/get.php', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` 
    },

    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(data => {
      
      console.log(data); 
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

  })

  const handleClick = (clicked) =>{
    
    switch(clicked){
      case "Account": 
            setIsAccountClicked(true);
            setIsSupportClicked(false);
            break;
      case "Support":
        setIsAccountClicked(false);
        setIsSupportClicked(true);
        break;
    
      
    }
  }

  return (

    <div className={`researcher-content ${resTheme}`}>
        <div className="researcher-menu">
          <SideBar/>
        </div>

        <div className="home-main">
        <div className="top-section">
          <Top/>
        </div>


        <div className="home-main-section settings">
          {/* content */}
    <div className="insideNav" id={resTheme==="dark"?"insideNavDark":""}>
        <button className={isAccountClicked? "btn" : ''}
                onClick={()=>handleClick("Account")} >Account</button>
        <button className={isSupportClicked? "btn" : ''}
                onClick={()=>handleClick("Support")}>Support</button>
       

       </div>

       <div className="content">
         {isAccountClicked? <Account theme={resTheme}/>: 
          isSupportClicked?<Support theme={resTheme}/>: <Account theme={resTheme}/>}
          </div>
          

          
        </div>
        </div>
        <div className="research-footer">
        <Footer/>
      </div>
        
    </div>
  )
}


const Account = ({theme})=>{
  return(
    <div className={theme==="dark"?"accountContent dark":"accountContent"} style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>
      <div className="headings">
        <h1  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}} id='setting-h1'>Account</h1>
        <p  style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Edit basic informations</p>
      </div>
      
      <div className="avatar-modify">
        <div className="avatar res"><img src={avatar}/></div>
        <div id="upload-avatar"><button>Upload Avatar</button></div>
        <p id="caption" style={{color: theme==="dark"?"#F4F4F4":"#201F24"}}>Image should not be more than 10mb</p>
        <div id="remove-avatar"><button className={`rmAvatar ${theme}`}>Remove Avatar</button></div>
      </div>
      <label htmlFor="userName" id="uname">Display Username</label>
      <input type="text" name="userName" id="userName"
             placeholder="@Spencer"/>
      <label htmlFor="Email">E-mail address</label>
      <input type="email" name="Email" id="Email"
             placeholder="Spencermagic@gmail.com"/>

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



const Support = ({theme})=>{
  const [userDetails, setUserDetails] = useState({
                                                  title:'',
                                                  email:'',
                                                  msg:'',
                                                  agreePrivacyPolicy:false
  })

  const handleChanges = (e)=>{
    setUserDetails(prevState=>({...prevState,[e.target.name]:e.target.value}))
  }

  return(
    <div className={`research-support ${theme}`}>
      <h1>Contact us</h1>
      <p>Our friendly team would love to hear from you.</p>
      <form>
          <label>Title
            <input type="text"
                  placeholder="Interview problems"
                  value={userDetails.title}
                  onChange={handleChanges}
                  required
                  name="title"/></label>
       
        <label>
          Email 
          <input type="email"
                 placeholder="olivia@untitledui.com"
                 value={userDetails.email}
                 onChange={handleChanges}
                 required
                 name="email"/>
        
        </label>

       

        <label>Message
        <textarea name="msg"
                  value={userDetails.msg}
                  onChange={handleChanges}
                  required/> </label>
       <label style={{display:'flex', flexDirection:'row'}}
              id="term">
      
        <input type="checkbox"
               checked={userDetails.agreePrivacyPolicy===true}
               onChange={(e)=>setUserDetails(prevState=>({...prevState, agreePrivacyPolicy:!prevState.agreePrivacyPolicy}))}
               />
             You agree to our friendly Privacy policy.  
        </label>

        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default  SettingsRes