import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion'

function CountDown({seconds, setSeconds}) {

  // useEffect(() => {
  //   if (seconds <= 0) {
  //     setSeconds(0);
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     setSeconds((prev) => prev - 1);
  //   }, 3000); 

  
  //   return () => clearInterval(interval);
  // }, [seconds]);

  return (
    <motion.div className="count-down">
      <p>Countdown</p>
      <p>{seconds}</p>
    </motion.div>
  );
}

export default CountDown;
