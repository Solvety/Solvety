function Button({name, color, bgColor}) {
  return (
    <div className="qwest-btn">
        <button style={{color:color, backgroundColor:bgColor}}>
            {name}
        </button>
    </div>
  )
}
export default Button