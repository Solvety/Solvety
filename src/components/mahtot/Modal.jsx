import React, { useState } from 'react';
import  ReactDom  from 'react-dom';
import '../../assets/css/calendar.css'
import CalendarMu from './CalendarMu';
import Alert from './Alert';
import { useEffect } from 'react';



const OVERLAY_STYLES = {
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex:1000

}



export default function Modal({open,
                              children,
                              onClose, 
                              setStartResearch,
                              deadline,
                              setDeadline,
                              schedule,
                              setSchedule
                            }) {

  if(!(open.deadline || open.startResearch)) return null
  
   

    const handleOutsideClick = (event) => {
      if (!event.target.closest('.modal-container')) {
        onClose();
      }
    };
    const [modalHeight, setModalHeight] = useState('auto');

    const handleResize = () => {
    const modalContentHeight = document.querySelector('.pp').scrollHeight;
    const windowHeight = window.innerHeight;
    const maxHeight = windowHeight - 100; // Adjust as needed
    
    if (modalContentHeight > maxHeight) {
      setModalHeight(maxHeight + 'px');
    } else {
      setModalHeight('auto');
    }
    };

    useEffect(() => {
      handleResize(); // Initial resize
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const MODAL_STYLES = {
      position:'fixed',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)',
      backgroundColor: '#FFF',
      padding:'50px',
      zIndex:1000,
     
      height: modalHeight,
  }
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [onClose]);
    
   
    
  return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}/>
        <div className='modal-container'>
            <div style={MODAL_STYLES} className='pp'>
            {
                open.deadline?
                <CalendarMu onClose={onClose}
                            date={deadline}
                            setDate={setDeadline}/>:
                open.startResearch?<Alert setStartResearch={setStartResearch}  onClose={onClose}/> :''
            }
            </div>
         </div>
    </>,
    document.getElementById('portal')
  );
}
