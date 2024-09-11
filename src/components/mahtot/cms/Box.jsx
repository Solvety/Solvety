function Box({ item, val, bgColor }) {
    return (
      <div className="flex flex-col justify-center text-center z-0  ">
        <div className="border border-black p-2 w-[80vw] sm:w-[217px] 994:w-auto">
          {item}
        </div>
        <div style={{ backgroundColor: bgColor }} className="p-2 w-[80vw] sm:w-[217px] 994:w-auto"> 
          {val}
        </div>
      </div>
    );
  }
  
  export default Box;
  