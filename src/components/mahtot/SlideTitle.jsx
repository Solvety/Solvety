
function SlideTitle({title, color, backgroundColor, circleColor}) {
  
  return (
    <div className="slide-bar" style={{color:color, backgroundColor:backgroundColor}}>
        <p>{title}</p>
        <span style={{backgroundColor:circleColor}}></span>
    </div>
  )
}
export default SlideTitle