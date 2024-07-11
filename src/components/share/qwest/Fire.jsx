// import from '../../../assets/images/fire.svg'
import  fireImg from '../../../assets/qwest_assets/FireVidGif.gif'
import coin from '../../../assets/qwest_assets/coin.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import RandomStringModal from '../../mahtot/qwest/RandomStringModal';
import { useQuest } from '../../../context/QwestContext';

function Fire({id}) {
  const {showRetakePopup,
         changeAvatar,
         setChangeAvatar,
         failureStatus,
         setFailureStatus} = useQuest();
  const [endQuest, setEndQuest] = useState(false)
  

  // console.log(questPop)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFailureStatus(prevStatus => ({ ...prevStatus, coinFallen: true }));
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
    <div className='qwest-fire' id={id}>
      
        
        <div className='qwest-fire-anim'>
        {
        
        showRetakePopup &&(
       failureStatus.coinFallen ? (
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
                 failureStatus.retakeSuccess?<p>Retake quest to claim qwes</p>:
                <p>Would you like to recover your qwes?</p>}
              </div>
             {
                 failureStatus.retakeSuccess?

                <div className='retake-btns big'>
                <button onClick={()=>{setFailureStatus({...failureStatus, questPop:true, coinFallen:false})
                                      }}>Yes</button>
                <button onClick={() => setEndQuest(true)}>Lets move on</button>
              </div>:
              <div className='retake-btns'>
                <button onClick={()=>{
                  handleOpenModal()
                 }}>Yes</button>
                <button onClick={() => setFailureStatus({...failureStatus, retakeQwes:false})}>No</button>
              </div>

             } 
            </motion.div>


        ) : (
         <Coin questPop={failureStatus.questPop}  
               setFailureStatus={ setFailureStatus} 
               id={id}
               failureStatus={failureStatus}/>
        ))}
        </div>
      
       
     
      <div className="fireImg">
        <img src={fireImg} alt="Image of fire" />
      </div>

      <div>
      <RandomStringModal 
                        isOpen={isModalOpen}
                        onClose={handleCloseModal} 
                        retakeSuccess={failureStatus.retakeSuccess}
                        setFailureStatus ={setFailureStatus}
                        failureStatus={failureStatus}
                       />
     
    </div>
    </div>
  )
}

export default Fire

const Coin = ({ questPop, setFailureStatus, id, failureStatus})=>{

  if (!failureStatus) return null; 
  return(
   
   <AnimatePresence>
            <motion.div
              className="coin"
              initial={{ y: questPop?id?250:430: 0, opacity: questPop?[1, 0.5, 0]: 1 }}
              animate={{ y:  questPop?0:id?250:400, opacity: questPop?1: [1, 0.5, 0] }}
              transition={{
                duration: 2,
                ease: 'easeIn',
                delay: 3,
              }}
              onAnimationComplete={() => {
                if(questPop)
                // setCoinFallen(false)
                setFailureStatus({...failureStatus, coinFallen:false})
                else{
                  // setCoinFallen(true)
                  setFailureStatus({...failureStatus, coinFallen:true})

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