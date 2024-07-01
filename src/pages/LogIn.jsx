import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';
import eyeOpen from '../assets/images/eye.jpg';
import eyeClosed from '../assets/images/hiddenEye.jpg';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState({value:'', touched:false})
    const [password, setPassword] = useState({value:'', touched:false})
    const [rememberDetails, setRememberDetails] = useState(false)
    const [content, setContent] = useState('email');
    const [errors, setErrors] = useState({emailError:'',
                                          pwdErr:false})
    const [usertype, setUsertype] = useState('')
    const [btnState, setBtnState] = useState(true)
    const [showPwd, setShowPwd] = useState(false)
    const errMsg = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    const [token, setToken] = useState('')
    const navigateTo = useNavigate(); 

    const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost/qwestymain/api/login.php', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password, usertype:usertype }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            
            const data = await response.json();
            const jwtToken = data.token;
    
            // JWT TOKEN in local
            localStorage.setItem('jwtToken', jwtToken);
    
            setToken(jwtToken);
            navigateTo('/researcher/research');

          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error :', error);
        }
      };


    const handleEmail = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const inputValue = e.target.value;

        setEmail({ ...email, value: inputValue });
    
       
        const isValidEmail= emailRegex.test(inputValue)
        if (!isValidEmail || (email.touched && (!email.value || email.value.length < 8))) {
            setErrors({ ...errors, emailError: 'err' });
        } else {
            setErrors({ ...errors, emailError: 'correct' });
        }
    };
    
    
    
    
    const handleBtnState = () => {

        if (content === 'email') {
            return (!email.value ||errors.emailError === 'err' || usertype ==='' );
        } else if (content === 'password') {
            return (errors.pwdErr ==='err'|| !password.value)
        } 
   
        return true; 
    };

    const handleNext = () => {
        if (content === 'email') {
            setContent('password');
        }
    };

    const handleBack = () => {
        if (content === 'password') {
            setContent('email');
        }
    };

    const handleBlur = () => {
        if (!email.value) {
            setErrors({ ...errors, emailError: 'err' });
        }
    };

    const handleUserTypeChange = (event)=>{
        setUsertype(event.target.value)
    }
    
    // const handleEmailSubmit = async () => {
    //     const formData  = new FormData();
    //     formData.append('email', email.value);
    //     formData.append('usertype', usertype);
    //     formData.append('rememberDetails', rememberDetails);

    //     try {
    //         const response = await fetch('https://solvety.info/api/login.php', {
    //             method: 'POST',
    //             body:formData,
    //         });

    //         console.log(response)
    //         const data = await response.json();

    //         console.log('response data:', data)
    //         // window.location.href = '/researcher/home'; 
    //         handleNext
    //     } catch(e){
    //         console.log('Error: ', e)
    //         setErrors(prevErrors => ({ ...prevErrors, emailError: 'An error occurred. Please try again.' }));

    //     }
      
    // }

    const handlePwd = (e) => {

        const inputPwd = e.target.value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'<,>.?/\[\]\\|\-]).{8,}$/;

        const isValidPwd = passwordRegex.test(inputPwd);
    
        setPassword({ ...password, value: inputPwd });
    
        if (!isValidPwd || (password.touched && (!inputPwd || inputPwd.length < 8))) {
            setErrors({ ...errors, pwdErr: 'err' });
        } else {
            setErrors({ ...errors, pwdErr: 'correct' });
        }
     };

    return (
        
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                   <Link to="/">
                   <img src={logo} alt="A logo of Qwesty" />
                    </Link> 
                </div>

                <main>
                    {content === 'email' ? (
                        <div className='first-content'>
                            <h1>Login</h1>
                            <label htmlFor='email'>Please enter your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email.value}
                                placeholder='name@gmail.com'
                                onBlur={handleBlur}
                                onChange={handleEmail}
                                className={errors.emailError==='err'?'err':''}
                            />

                        <div className='radio-inputs'>
                            <label className='radio-container'>
                                <input type='radio'
                                    value='participant'
                                    checked={usertype==='participant'}
                                    onChange={handleUserTypeChange}
                                    id="participant"/>
                                Participant
                                <span className="checkmark"></span>
                            </label>

                            <label className='radio-container'>
                                <input type='radio'
                                    value='researcher'
                                    checked={usertype === 'researcher'}
                                    onChange={handleUserTypeChange}
                                    id='researcher'/>
                                Researcher
                                <span className="checkmark"></span>
                            
                            </label>
                
            </div>

                        <label id="checkbox-input">
                            <input type='checkbox'
                                   checked={rememberDetails}
                                   onChange={e=> setRememberDetails(e.target.checked)}/>
                            Remember for 30 days
                        </label>

                            <button onClick={handleNext}
                                    disabled={handleBtnState()}
                                    className={handleBtnState() ? 'disabled' : 'enabled'}>
                                Next</button>
                            <p>Don't have an account? <span><Link to="/SignUp">Sign up</Link></span></p>
                        </div>

                    ) : content === 'password' ? (
                        <div className='second-content login'>
                                <h2>Welcome back</h2>

                            <label htmlFor='pwd'>Enter your Password</label>

                <div className={`pwd-container ${errors.pwdErr}`}>

                        <input type={showPwd?'text':'password'}
                               id="pwd"
                               name="password"
                               value={password.value}
                               style={{color:'black'}}
                               placeholder='**********'
                               onChange={handlePwd}
                               onBlur={()=> {if (!password.value) {
                                setErrors({ ...errors, pwdErr: 'err' });
                            }}}

                   
                   /> 

                   <img src={showPwd?eyeOpen: eyeClosed}
                        alt="An image of an eye, which indicates whether the password should be visible or not"
                        onClick={()=> setShowPwd(prevState=>!prevState)}
                        className={showPwd?'open':""}
                />
                        </div>
                        <div className='errMsg'>{errors.pwdErr==="err"?errMsg:""}</div>

                           <button onClick={handleSubmit}>
                                Log In
                                </button>
                            <Link to="/Reset" 
                                  id="forgotLink"> <p>forgot password?</p></Link>
                        </div>
                    ) : null}
                </main>
            </div>
            <div className="signUp-right">
                 <footer>
                    {content === 'email'?(
                        <h2>1/2</h2>
                    ): (
                        <img
                        onClick={handleBack}
                        src={backBtn}
                        alt="an icon that takes you to the previous page"
                    />
                    )}
                    
                </footer>
            </div>

            <footer id="small-footer">
                    {content === 'email'?(
                        <h2>1/2</h2>
                    ): (
                        <img
                        onClick={handleBack}
                        src={backBtn}
                        alt="an icon that takes you to the previous page"
                    />
                    )}
         </footer>
        </div>
        
    );
}

export default LogIn;
