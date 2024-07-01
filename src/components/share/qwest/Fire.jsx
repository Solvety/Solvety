import fireImg from '../../../assets/images/fire.svg'
import coin from '../../../assets/qwest_assets/coin.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import RandomStringModal from '../../mahtot/qwest/RandomStringModal';
import { useQuest } from '../../../context/QwestContext';

function Fire() {
  const [retakeQwes, setRetakeQwes] = useState(false)
  const [coinFallen, setCoinFallen] = useState(false)
  const {showRetakePopup, changeAvatar, setChangeAvatar} = useQuest();
  const [retakeSuccess, setRetakeSuccess] = useState(false)
  const [questPop, setQuestPop] = useState(false)
  const [endQuest, setEndQuest] = useState(false)

  console.log(questPop)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCoinFallen(true)
    }, 1000000); 
    return () => clearTimeout(timer);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setChangeAvatar(true)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='qwest-fire'>
      
        
        <div className='qwest-fire-anim'>
        {
        
        showRetakePopup &&(
        coinFallen ? (
            <motion.div
              className="retake-qwes"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{
                duration: 1,
                ease: 'easeIn',
                delay: 0,
              }} >
              <div>
                { 
                retakeSuccess?<p>Retake quest to claim qwes</p>:
                <p>Would you like to recover your qwes?</p>}
              </div>
             {
                retakeSuccess?

                <div className='retake-btns big'>
                <button onClick={()=>{setQuestPop(true)
                                      setCoinFallen(false)}}>Yes</button>
                <button onClick={() => setEndQuest(true)}>Lets move on</button>
              </div>:
              <div className='retake-btns'>
                <button onClick={()=>{
                  handleOpenModal()
                 }}>Yes</button>
                <button onClick={() => setRetakeQwes(false)}>No</button>
              </div>

             } 
            </motion.div>


        ) : (
         <Coin questPop={questPop}  setCoinFallen={ setCoinFallen}/>
        ))}
        </div>
      
       
     
      <div className="fireImg">
        <img src={fireImg} alt="Image of fire" />
      </div>

      <div>
      <RandomStringModal 
                        isOpen={isModalOpen}
                        onClose={handleCloseModal} 
                        retakeSuccess={retakeSuccess}
                        setRetakeSuccess={setRetakeSuccess}
                       />
     
    </div>
    </div>
  )
}

export default Fire

const Coin = ({ questPop, setCoinFallen})=>{
   return(
   
   <AnimatePresence>
            <motion.div
              className="coin"
              initial={{ y: questPop?430: 0, opacity: questPop?[1, 0.5, 0]: 1 }}
              animate={{ y:  questPop?0:400, opacity: questPop?1: [1, 0.5, 0] }}
              transition={{
                duration: 2,
                ease: 'easeIn',
                delay: 3,
              }}
              onAnimationComplete={() => {
                if(questPop)
                setCoinFallen(false)
                else{
                  setCoinFallen(true)

                }
              }}
            >
              <motion.img
                src={coin}
                alt="coin picture"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </AnimatePresence>)
}