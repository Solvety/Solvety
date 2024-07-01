import React, { useState, useEffect, useRef } from 'react';
import '../../../assets/css/Qwest/RandomString.css';
import CountDown from './CountDown';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFaceSadTear } from "react-icons/fa6";

const RandomStringModal = ({ isOpen, onClose,retakeSuccess, setRetakeSuccess}) => {
  const [seconds, setSeconds] = useState(5);
  const [entities, setEntities] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const FailureMsg = "Timeout! "
  const navigateTo = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      generateEntities();
      setShowMessage(false);
      setHasTimedOut(false);
      setSeconds(5);
      startTimer();
    } else {
      clearTimer();
      setSeconds(5); // Reset the seconds to 5 when the modal closes

    }

    return () => {
      clearTimer();
    };

  }, [isOpen]);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 3000);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      setHasTimedOut(true);
      navigateTo('/signedUp/qwest-game');
    }
  }, [seconds, onClose]);

  const generateEntities = () => {
    const type = Math.floor(Math.random() * 3); // 0 for numbers, 1 for letters, 2 for alphanumeric
    const newEntities = [];

    for (let i = 0; i < 7; i++) {
      if (type === 0) {
        newEntities.push(Math.floor(Math.random() * 10));
      } else if (type === 1) {
        newEntities.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65)); // Uppercase letters
      } else {
        newEntities.push(Math.floor(Math.random() * 36).toString(36).toUpperCase());
      }
    }

    setEntities(newEntities);
    setUserInput('');
    setIsValid(false);
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);
    setShowMessage(false);

    const entityString = entities.join('');
    setIsValid(input === entityString);
  };

  const handleSubmit = () => {
    const entityString = entities.join('');
    const isInputValid = userInput === entityString;
    setIsValid(isInputValid);
    setShowMessage(true);

    if (isInputValid && seconds > 0) {
      alert('Congratulations! You entered the correct entities and won a coin.');
      onClose();
      setRetakeSuccess(true);
    } else if (hasTimedOut) {
      alert('Times up! Better luck next time.');
      onClose();
      navigateTo('/signedUp/qwest-game')

    } else {
      generateEntities();
    }
  };


 
  return (
    <div className={`entity-set-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="close-button" onClick={onClose}>
          &times;
        </div>
        {
          hasTimedOut?
          <div className='qwest-fail'>
            <FaFaceSadTear size={'5rem'} style={{color:"orange"}}/>
              <p><span>Times up!</span> Better luck next time.</p>
               <Link to='/signedUp/qwest-game'>
               Close
            </Link>
            </div>
        :
         <>
        <div>
          <CountDown seconds={seconds} setSeconds={setSeconds}/>
        </div>
        <div className="entity-set">
          {entities.map((entity, index) => (
            <div key={index} className="entity">
              {entity}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter the displayed entities"
          className={`input-field ${isValid ? 'valid' : 'invalid'}`}
        />
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        {showMessage && (
          <p className={`message ${isValid ? 'success' : 'error'}`}>
            {isValid
              ? 'Congratulations! You entered the correct entities.'
              : 'The input does not match the displayed entities. Please try again.'}
          </p>
        )}
        </>
        }
      </div>
    </div>
  );
};

export default RandomStringModal;
