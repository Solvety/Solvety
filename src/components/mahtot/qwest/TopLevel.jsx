import RangeSlider from "./RangeSlider"
import { useState } from "react";


function TopLevel() {
    // const marks = [
    //     {
    //       value: 1,
    //       label: '10',
    //     },
    //     {
    //       value: 20,
    //       label: '20',
    //     },
    //     {
    //       value: 37,
    //       label: '37',
    //     },
    //     {
    //       value: 100,
    //       label: '100',
    //     },
    //   ];
  return (
    <div className="top-slider" >
       <RangeSlider bgColor="#fff" 
                    borderColor="##37D8AD"
                    sliderColor=""
                    id='top'
                    initialValue='1'
                    max='2'/>
        <div className="captionTop">
            <p>Stage 1</p>
            <p>Level 1</p>
        </div>
    </div>
  )
}
export default TopLevel