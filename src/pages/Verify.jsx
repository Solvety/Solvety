import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';
import '../assets/css/verify.css'; 
import { Link, useNavigate } from 'react-router-dom';

const Verify = () => {
  const [otpValues, setOTPValues] = useState(['', '', '', '', '']); 
  const [userId, setUserId] = useState('');
  const [userType, setUserType] = useState('');
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userId');
    const userTypeParam = urlParams.get('usertype');

    setUserId(userIdParam);
    setUserType(userTypeParam);
  }, []);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value >= 0) {
      const newValues = [...otpValues];
      newValues[index] = value.slice(0, 1); 
      setOTPValues(newValues);
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && otpValues[index] === '') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else if (event.key === 'ArrowRight') {
      if (index < 4) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (event.key === 'ArrowLeft') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      const requestBody = {
        userId: userId,
        otp: otpValues,
        usertype: userType,
      };

      const response = await fetch('https://solvety.info/api/verify_otp.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('OTP verification successful');
        const data = await response.json();
        const { token } = data; 
        localStorage.setItem('jwtToken', token); 
        navigateTo('/researcher/home');
      } else {
        console.error('Error verifying OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isAllValuesFilled = otpValues.every(value => value !== '');

  return (
    <div className="verify-container">
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )}
      <div className="content-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h1>OTP Verification</h1>
        <div className="otp-box">
          <p>Please enter the code sent to your email to finish signing up process.</p>
          <div className="otp-input-container">
            {otpValues.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                inputMode="numeric"
                className="otp-input"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                pattern="[0-9]*"
                noValidate
              />
            ))}
          </div>
          <div>
            <p>Code will expire in 10 minutes.</p>
          </div>
          <div className="verify-buttons">
            <button
              onClick={handleVerify}
              disabled={!isAllValuesFilled}
              className={isAllValuesFilled ? 'verify-button' : 'disabled-button'}
            >
              Verify
            </button>
            <button className="resend-button">Resend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
