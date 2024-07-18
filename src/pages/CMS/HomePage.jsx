import Header from "./Header"
import SideBar from "./SideBar"
import { useState, useEffect } from "react"
import '../../assets/css/cms/style.css'
function HomePage() {
   const [dropdown, setDropdown] = useState(false)
    
   const handleDropDown = ()=>{
     setDropdown(prevState => !prevState)
   }
  return (
    <div className="cms-container overflow-x-hidden">
       {/* <div className="cms-top">
          <Header handleDropDown= {handleDropDown}
                  dropdown={dropdown}/>
       </div> */}

       <div className="flex">
            <div className="cms-side-bar">
                <SideBar/>
            </div>
            <div className="absolute top-[20vh] left-5 994:absolute 994:left-[350px]">
                jjj
            </div>
       </div>

       
    </div>
  )
}
export default HomePage