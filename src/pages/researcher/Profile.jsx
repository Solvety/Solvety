import SideBar from "../../components/share/SideBar"
import Top from '../../components/share/Top'
import { useTheme } from "../../context/ThemeContext"
import ProfileContainer from "../../components/ben/ProfileContainer";
import LineChart from "../../components/ben/LineChart";
import ComingSoon from "../../components/ben/ComingSoon";
import Footer from "../../components/Footer";

function Profile() {
  const {resTheme} = useTheme();
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
        <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 1207:grid-cols-3 lg:gap-8 mb-10 mt-5">
            {/* profile  */}
            <div className="profileContainer">
              <ProfileContainer />
            </div>
            {/* chart */}
            <div className="block md:hidden">
              <LineChart />
            </div>
            {/* coming soon */}
            <div className="ComingSoon 1207:col-span-2">
              <ComingSoon />
            </div>
          </div>
          {/* chart */}
          <div className="chart hidden md:block">
            <LineChart />
          </div>
          
        </div>
        </div>
        <div className="research-footer">
        <Footer />
      </div>  
      </div>
  )
}
export default  Profile;


