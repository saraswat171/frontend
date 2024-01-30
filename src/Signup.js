import React, { useState } from 'react'

import './Login.css'
import mailicon from './Assets/icons/Leading Icon.svg'
import passicon from './Assets/icons/password-icon.svg'
import nameimg from './Assets/icons/expand_more.svg'

// import landingimage from '../../Assets/images/Landing Main Image.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    function handlePassword(event) {
        let new_pass = event.target.value;
        setPassword(new_pass);

        //  expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase)) {
            setErrorMessage("Password should contains lowercase letters!");
        } else if (!new_pass.match(upperCase)) {
            setErrorMessage("Password should contain uppercase letters!");
        } else if (!new_pass.match(numbers)) {
            setErrorMessage("Password should contains numbers also!");
        } else if (new_pass.length < 10) {
            setErrorMessage("Password length should be more than 10.");
        } else {
            setErrorMessage("Password is strong!");
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const data = { name, email, password};
        
          
        if (errorMessage === "Password is strong!") {
            try {
                const response = await axios.post('http://localhost:5080/usersinfo', data);
                console.log("res", response);
                if (response.status === 200) {
                    console.log(response.data)
                    navigate('/Login');
                }

            }
            catch (error) {
                alert(error)
                console.error('Error:', error);

            }

        }
        else {
            alert("Password is not strong");
        }


    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <div className='hero-left'>
                    <div className='hero-head'>
                        <h1>New User Sign Up Here!</h1>
                        <p>Welcome! Sign Up for better experience.</p>
                    </div>
                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={nameimg} alt='mailbox'></img>
                                <input type='text' name='name' id='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required></input>
                            </div>
                        </div>
                    </div>
                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={mailicon} alt='mailbox'></img>
                                <input type='email' name='email' id='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} required ></input>
                            </div>
                        </div>
                    </div>

                    <div className='hero-input'>
                        <div className='email-content'>
                            <div className='mailbox'>
                                <img src={passicon} alt='password'></img>
                                <input type='password' name='password' id='passwors' placeholder='Enter your password' value={password} onChange={handlePassword} required></input>
                                <div style={{ color: "red" }}>{errorMessage}</div>
                            </div>
                        </div>
                    </div>
                 



                    <button className='signin' type='submit'>SIGN UP</button>
                </div>
            </form>
            <div className='img-right'>
            {/* <img className='landing-img' src={landingimage} alt='' ></img> */}
            <div className='hero-b'>
                    <div className='heading'>
                        <h1>Guest checkout</h1>
                        <p>No ready to become a customer?</p>
                    </div>
                    <button className='create-btn'>CHECKOUT AS A GUEST</button>
                </div>
            </div>
           
        </div>
    )
}

export default Register