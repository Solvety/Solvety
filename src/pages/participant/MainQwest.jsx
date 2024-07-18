import Qwest from "./Qwest";
import QwestSec from "./QwestSec";
import { useState, useEffect } from "react";



function MainQwest() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 994);
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      {isMobile ? <QwestSec /> : <Qwest />}
    </div>
  )
}
export default MainQwest