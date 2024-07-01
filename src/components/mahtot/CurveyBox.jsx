
import { useState } from "react"
import { Link } from "react-router-dom"

function CurveyBox({title, index}) {

  return (
       <div className="curvey-box" >
          <h2>{title}</h2>
          
              
          
            <Link to={index==0? "/researcher/create" :''}
                  id="comming-soon-btn" 
              className={`box ${index==0?'first':''}`} 
              style={{cursor:index==0?'pointer':''}}
              >
          {index===0?'Create':'coming soon'}
          
         
          </Link>
      </div>
  
   
  )
}
export default CurveyBox