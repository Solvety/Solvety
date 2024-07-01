import React, { useState } from 'react';
import logo from '../assets/images/logoBlack.png';
import backBtn from '../assets/images/backBtn.png';
import axios from 'axios';
import '../assets/css/login-signup.css';
import { Link } from 'react-router-dom';
function Reset() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to server for password reset
        axios.post('./php/reset_password.php', { email })
            .then((response) => {
                console.log(response.data);
                // Handle success, e.g., show a success message
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message
            });
    };

    return (
        <div className="signUp-container">
            <div className="signUp-left">
                <div id="logo-container">
                <Link to="/">
                <img src={logo} alt="A logo of Qwesty" /></Link>    
                </div>

                <main>
                    <div className='first-content reset'>
                        <h2>Reset password</h2>
                        <label htmlFor='email'>Please what is your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder='name@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Reset</button>
                        {/* <p>Remembered your password? <span><Link to="/login">Login</Link></span></p> */}
                    </div>
                </main>
            </div>
            <div className="signUp-right"></div>
            <footer>
            <Link to="/LogIn">
                <img
                    src={backBtn}
                    alt="an icon that takes you to the previous page"
                />
                </Link>
            </footer>
        </div>
    );
}

export default Reset;
