import { motion, AnimatePresence } from 'framer-motion'


function PopupMsg({msg}) {
  return (
    <motion.div 
        className='popup-msg'
        initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{
                duration: 1,
                ease: 'easeIn',
                delay: 0,
              }}>
             {msg}
    </motion.div>
  )
}
export default PopupMsg