import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"

function SelectionBox({icon, title, bgColor, color, id, path}) {
    const {resTheme} = useTheme();

    return (
        <Link   to={path}
                 className={`${id} ${resTheme}`} 
                style={{color:color, backgroundColor:bgColor, borderRadius:'20px'}}
                >
                <div className="research-icon">
                    {icon}
                </div>
                <div className="research-heading">
                    {title}
                </div>

            </Link>
  )
}
export default SelectionBox