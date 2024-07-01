import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo.png';
import backBtn from '../assets/images/backBtn.png';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';
import eyeOpen from '../assets/images/eye.jpg';
import eyeClosed from '../assets/images/hiddenEye.jpg';
import { useTheme} from '../context/ThemeContext'
import Verify from './Verify';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const {usertype, setUsertype} = useTheme();
    const [content, setContent] = useState('first');
    const [username, setUsername] = useState({value:'', touched:false });
    const [email, setEmail] = useState({value: '', touched:false});
    const [password, setPassword] = useState({value:'', touched:false});
    const [confirmPwd, setConfirmPwd] = useState({value:'', touched:false});
    const [errors, setErrors] = useState({emailError:'',
                                          unameErr:false, 
                                          pwdErr:false,
                                          confirmPwdErr:false})
    const [pwdErr, setPwdErr] = useState(false)
    const [btnState, setBtnState] = useState(true)
    const [errE, setErrE] = useState('')
    const [unameE, setUnameE] = useState('')
    const [userId, setUserId] = useState('')
    const navigateTo = useNavigate();

    const handleContent = (content) => {
        setContent((prevState) =>
            prevState === 'second'
                ? 'first'
                : prevState === 'first'
                ? 'second'
                : prevState === 'third'
                ? 'second'
                : ''
        );        
    };

   
    const handleEmail = async (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrE('');

        setEmail({ value: e.target.value, touched: true });
    
        setErrors({ ...errors, emailError: emailRegex.test(e.target.value) ? '' : 'err' });
    };
    

    const handleEmailCheck = async () => {
        const formData = new FormData();
        formData.append('email',email.value);
        formData.append('usertype', usertype);
        
        try {
            const response = await fetch('https://solvety.info/api/email.php', {
                method: 'POST',
                body: formData,
            });
            console.log(response)
            const data = await response.json(); // Assuming the server responds with JSON
    
            console.log("Response data:", data); // Log the response data for debugging
    
            if (!data.isAvailable) {
                // Email is not available, set error message
                setErrE('Email is already in use');
                setErrors({...errors, emailError:'err'})
            } else {
                // Email is available, clear any existing error messages and move to the next content
                setErrE('');
                setErrors({...errors, emailError:''})

                setContent('second');
                 // Only move to the next content if the email is available
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors(prevErrors => ({ ...prevErrors, emailError: 'An error occurred. Please try again.' }));
        }
    };
    
    const handleUsernameCheck = async () => {
        const formData = new FormData();
        formData.append('username', username.value);
        formData.append('usertype', usertype);
    
        try {
            const response = await fetch('https://solvety.info/api/uname.php', {
                method: 'POST',
                body: formData,
            });
            console.log(response);
            const data = await response.json(); 
    
            console.log("Response data:", data); 
    
            if (!data.isAvailable) {
                setErrors(prevErrors => ({ ...prevErrors, unameErr: 'err' }));
                setUnameE('Username taken.'); 

            } else {
                setErrors(prevErrors => ({ ...prevErrors, unameErr: 'correct' }));
                setUnameE(''); 
                setContent('third');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors(prevErrors => ({ ...prevErrors, unameErr: true }));
            setErrMsg('An error occurred. Please try again.');
        }
    };
    
    
    

    
    const handleBtnState = () => {
        if (content === 'first') {
            return !email.value || errors.emailError || !usertype;
        } else if (content === 'second') {
            return !username.value || errors.unameErr==='err';
        } else if (content === "third") {
            return !password.value || errors.pwdErr==='err'==='err' || !confirmPwd.value || password.value !== confirmPwd.value;
        }
        return true;
    };


    const handleSubmit = async () => {

        if (password.value !== confirmPwd.value) {
            setPwdErr(true);
            setErrors({...errors, confirmPwdErr: 'Passwords do not match'});
            return;
        }
    
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('usertype', usertype);
        formData.append('username', username.value);
        formData.append('password', password.value);
    
        try {
            const response = await fetch('https://solvety.info/api/signin.php', {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response)
            const data = await response.json();
            setUserId(data.newUserId)
            console.log(userId)
           
        } catch (error) {
            console.error('Network error:', error.message);
            setErrE("A network error occurred. Please try again.");
        }
    };
    
    useEffect(() => {
        if (userId) {
            navigateTo('/verify')
        }
    }, [userId]);
    
    
    
    return (
        <div className="signUp-container">
            <div className="signUp-left">
               
                <div id="logo-container">
                    <Link to='/'>
                        <img src={logo} alt="A logo of Qwesty" />
                    </Link>
                </div>
                <main>
                    {content === 'first' ? (
                        <FirstSignUpContent
                            email={email}
                            setEmail={setEmail}
                            usertype={usertype}
                            setUsertype={setUsertype}
                            handleContent={handleContent}
                            handleEmail={handleEmail}
                            errors={errors}
                            setErrors={setErrors}
                            handleBtnState={handleBtnState}
                            btnState={btnState}
                            handleEmailCheck={handleEmailCheck} 
                            errE = {errE}// Pass the function here
                        />                    
                    ) : content === 'second' ? (
                        <SecondSignupcontent
                            username={username}
                            setUsername={setUsername}
                            setContent={setContent}
                            errors={errors}
                            setErrors={setErrors}
                            handleBtnState={handleBtnState}
                            btnState={btnState}
                            unameE={unameE}
                            handleUsernameCheck={handleUsernameCheck} // Pass the function here
                        />
                    ) : content === 'third' ? (
                        <ThirdSignupcontent
                            password={password}
                            setPassword={setPassword}
                            confirmPwd={confirmPwd}
                            setConfirmPwd={setConfirmPwd}
                            errors={errors}
                            setErrors={setErrors}
                            handleSubmit={handleSubmit}
                            handleBtnState={handleBtnState}
                            pwdErr={pwdErr}
                            setPwdErr={setPwdErr}
                        />
                    ) : (
                        ''
                    )}
                </main>
            </div>

            <div className="signUp-right">
                <footer>
                    {content === 'first' ? (
                        <h2>1/3</h2>
                    ) : (
                        <img
                            src={backBtn}
                            alt="an icon that takes you to the previous page"
                            onClick={handleContent}
                        />
                    )}
                </footer>
            </div>
            <footer id="small-footer">
                {content === 'first' ? (
                    <h2>1/3</h2>
                ) : (
                    <img
                        src={backBtn}
                        alt="an icon that takes you to the previous page"
                        onClick={handleContent}
                    />
                )}
            </footer>
        </div>
    );
}

export default SignUpPage;

const FirstSignUpContent = ({email, setEmail, usertype, setUsertype, handleContent, handleEmail, errors, setErrors, handleBtnState, errE, handleEmailCheck})=>{
    const handleUserTypeChange = (event)=>{
        setUsertype(event.target.value)
    }
    const handleBlur = () => {
        if (!email.value) {
            setErrors({ ...errors, emailError: 'err' });
        }
    };
    return(
        <div className='first-content'>
            <h1>Sign up</h1>
            <label htmlFor='email'>Please enter your email <sup>*</sup></label>
            <input type="email"
                   id="email"
                   name="email"
                   value={email.value}
                   placeholder="name@example.com"
                   onBlur={handleBlur}

                   onChange={handleEmail}
                   className={errors.emailError}
                  
                   />
          <span id="errMsg"> {errE}</span>  

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

            <button  onClick={() => handleEmailCheck().then().catch()}
                    disabled={handleBtnState()}
            className={handleBtnState() ? 'disabled' : 'enabled'}>
             Ok
            </button>
            {/* <p>Already have an account? <span><Link to="/LogIn">Log In</Link></span> </p> */}
        </div>
    )
}

const SecondSignupcontent = ({username, setUsername, setContent, errors, setErrors, handleBtnState, handleUsernameCheck, unameE}) => {
    
    const [errMsg, setErrMsg] = useState('')

    const handleUname = (e) =>{
        const inputName= e.target.value
        const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
        const isValidUsername = usernameRegex.test(inputName)
       
        setUsername({...username, value:inputName})
     
        if (!isValidUsername || !/^[a-zA-Z0-9_]+$/.test(inputName)) {
            setErrors({ ...errors, unameErr: 'err' });
            setErrMsg('')
        } else {
            setErrors({ ...errors, unameErr: 'correct' });
            setErrMsg('')
        }
        
        if(!/^[a-zA-Z0-9_]+$/.test(inputName)){
            setErrMsg("username should contain only letters, numbers and underscore")
        }
    }
    const handleBlur = () => {
        if (!username.value) {
            setErrors({ ...errors, unameErr: 'err' });
        }
    };
    return(
        <div className='second-content'>
            <label htmlFor='username'>Please enter your Username <sup>*</sup> </label>
            <input type="text"
                   id="username"
                   name="username"
                   value={username.value}
                   placeholder='mandela'
                   onChange={handleUname}
                   onBlur={handleBlur}
                   className={errors.unameErr}/>

              <span id="errMsg"> {unameE}</span>  

              <button onClick={() => handleUsernameCheck().then().catch(() => {})}
              disabled={handleBtnState()}
              className={handleBtnState() ? 'disabled' : 'enabled'}>
                    Next
                </button>
        </div>
    )
}

const ThirdSignupcontent = ({password, setPassword, confirmPwd, setConfirmPwd, handleSubmit, errors, setErrors, handleBtnState, pwdErr, setPwdErr}) => {
    
    const errMsg = "Password must be above 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'<,>.?/\[\]\\|\-]).{8,}$/;
    const [showPwd, setShowPwd] = useState({pwd:false, confirmPwd: false})

    const handleShowPwd = (pwd)=>{
        if(pwd==="password"){
            setShowPwd( {...showPwd, pwd:!showPwd.pwd})
        }

        else{
            setShowPwd({...showPwd, confirmPwd:!showPwd.confirmPwd})
        }
    }

    const handlePwd = (e) => {

        const inputPwd = e.target.value;
        const isValidPwd = passwordRegex.test(inputPwd);
    
        setPassword({ ...password, value: inputPwd });
    
        if (!isValidPwd || (password.touched && (!inputPwd || inputPwd.length < 8))) {
            setErrors({ ...errors, pwdErr: 'err' });
        } else {
            setErrors({ ...errors, pwdErr: 'correct' });
        }
     };
    
    const handleConfirmPwd = (e) => {
                setPwdErr(false)

        const confirmPwdValue = e.target.value;
        const isValidPwd = passwordRegex.test(confirmPwdValue);
    
        setConfirmPwd({ ...confirmPwd, value: confirmPwdValue });
    
        if (!confirmPwdValue) {
            setErrors({ ...errors, confirmPwdErr: 'err' });
        } else if (password.value !== confirmPwdValue || !isValidPwd) {
            setErrors({ ...errors, confirmPwdErr: 'err' });
        } else {
            setErrors({ ...errors, confirmPwdErr: 'corrects' });
        }
    };
    
    const handleBlur = () => {
        if (!password.value) {
            setErrors({ ...errors, pwdErr: 'err' });
        }
    };
    return (
        <div className='third-content'>
            <label htmlFor='pwd'>Enter your password <sup>*</sup></label>
        <div className={`pwd-container ${errors.pwdErr}`}>
              <input type={showPwd.pwd?'text':'password'}
                   id="pwd"
                   name="password"
                   value={password.value}
                   placeholder='**********'
                   onChange={handlePwd}
                   onBlur={handleBlur}

                   
                   /> 
                   <img src={showPwd.pwd?eyeOpen: eyeClosed}
                        alt="An image of an eye, which indicates whether the password should be visible or not"
                        onClick={()=>handleShowPwd('password')}
                        className={showPwd.pwd?'open':""}
                />
                        </div>
     <div className='errMsg'>{errors.pwdErr==="err"?errMsg:""}</div>

            <label htmlFor='confirmpwd' id="confPwd">Confirm password <sup>*</sup></label>

            <div className={`pwd-container ${errors.confirmPwdErr}`}>
            <input type={showPwd.confirmPwd?'text':'password'}
                   id="confirmpwd"
                   name="confirmPwd"
                   value={confirmPwd.value}
                   placeholder='**********'
                   onChange={handleConfirmPwd}
                   onBlur={()=>{if (!confirmPwd.value) {
                    setErrors({ ...errors, confirmPwdErr: 'err' });
                }}}
                   />

                    <img src={showPwd.confirmPwd?eyeOpen: eyeClosed}
                        alt="An image of an eye, which indicates whether the password should be visible or not"
                        onClick={()=>handleShowPwd('confirmPwd')}
                        className={showPwd.confirmPwd?'open':""}

                />

                   </div>
                   {pwdErr && <div className='errMsg'>Password didn't match</div>}
            <button onClick={()=>handleSubmit().then().catch(() => {})}
                     disabled={handleBtnState()}
                     className={handleBtnState() ? 'disabled' : 'enabled'}>Lets Go</button>

        </div>
    )
}