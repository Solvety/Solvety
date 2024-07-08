
import SideBar from "../../components/share/SideBar";
import Top from "../../components/share/Top";
import '../../assets/css/Qwest/style.css';
import EndSection from "../../components/share/qwest/EndSection";
import Avatar from "../../components/share/qwest/Avatar";

function QwestSec() {
  return (
    <div className={`researcher-content `}>
            <div className="researcher-menu">
                 <SideBar/>
            </div>

            <div className="home-main" id="participant-bg">
               <div id="sec-layer">
               
                        <div className="top-section">
                           <Top/>
                        </div>
                        <div className="qwest-parts">
                            {/* content */}
                        
                           <EndSection/>
                            <Avatar/>
                        
                        </div>
                  </div>
            </div>
          
        </div>
  )
}
export default QwestSec