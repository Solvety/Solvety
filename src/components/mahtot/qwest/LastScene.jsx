import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


function LastScene() {
    const [checkQwes, setCheckQwes] = useState(false)
    const paras =['data is important', 'solvety is usefull app', 'join us', 'be nice', 'be good', "go for it", 'done']

    const getRandomNumber =()=>{
        return Math.floor(Math.random()*6) + 1
    }

    const randomNumber = getRandomNumber();

  return (
    <motion.div
        className="retake-qwes last"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{
                    duration: 1,
                    ease: 'easeIn',
                    delay: 0,
              }} >
       { checkQwes?<RandomPar randomNumber={randomNumber} paras={paras}/>:
        <p>Do you want to check for available quest?</p>}
        {checkQwes?'':<div className='retake-btns lastBtns'>
                <button onClick={()=>setCheckQwes(true)}>Let's do it</button>
                <button onClick={() => setCheckQwes(false)}>No for now</button>
         </div>}
    </motion.div>
  )
}
export default LastScene

const RandomPar = ({randomNumber,paras})=>{
    return(
        <motion.p
                initial={{ scale: 0 }}
                style={{textAlign:'center'}}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{
                    duration: 1,
                    ease: 'easeIn',
                    delay: 0,}}
        >
           Do you know that <span style={{fontWeight:'bold'}}>{paras[randomNumber]}</span>
        </motion.p>
    )
}