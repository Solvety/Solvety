function Alert({setStartResearch, onClose}) {
  
    return (
        <div className="alert-research-box">
            
            <h2>Are you sure you want to start your Research now?</h2>
           <div className="btns">
            <button onClick={()=>setStartResearch(true)}>Continue</button>
            <button onClick={ onClose}>Cancel</button>
        </div>
        </div>
  )
}
export default Alert