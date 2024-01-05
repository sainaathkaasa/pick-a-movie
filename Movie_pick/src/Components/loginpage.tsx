import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getlogincred, userRigester } from '../dux/Loginslice';
import { useNavigate } from 'react-router-dom';
import '../Styles/loginpage.css';

const Loginpage = () => {
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const confpassword = useRef<HTMLInputElement | null>(null);
    const loginmail = useRef<HTMLInputElement | null>(null);
    const loginpass = useRef<HTMLInputElement | null>(null);
    const nav = useNavigate();
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const userdb = useSelector(getlogincred);

    const handlesubmit = () => {
        if (email.current?.value.length !== undefined && password.current?.value.length !== undefined) {
            if (email.current?.value.length > 0 && password.current?.value.length > 0 && password.current?.value === confpassword.current?.value && email.current?.value.length != undefined) {
                const emailvalue = email.current.value;
                const passvalue = password.current?.value;
                dispatch(userRigester({ emailvalue, passvalue }));
                email.current.value = '';
                password.current.value = '';
                confpassword.current.value = '';
            }
        }

    };

    const signinUser = () => {
        if (loginmail.current && loginpass.current) {
            const enteredEmail = loginmail.current.value;
            const enteredPassword = loginpass.current.value;

            const userFound = userdb.some((user: any) => user.emailvalue === enteredEmail && user.passvalue === enteredPassword);

            if (userFound) {
                console.log("Success");
                nav('/mainpage');
            } else {
                console.log("Invalid credentials");
                // Handle incorrect credentials here (show error message, etc.)
            }

            loginmail.current.value = '';
            loginpass.current.value = '';
        }
    };

    return (
        <div className='mainuserUI'>
            <h1>Welcome to the MOVIE RECOMMENDER .com</h1>
            {!show ? (
                <form className='login' onSubmit={(e) => e.preventDefault()}>
                    <h1>LOG IN</h1>
                    <label htmlFor='loginmail'>Email</label>
                    <input type='text' id='loginmail' ref={loginmail} />
                    <label htmlFor='loginpassword'>Password</label>
                    <input type='password' id='loginpassword' ref={loginpass} />
                    <button onClick={signinUser}>Sign In</button>
                </form>
            ) : null}

            <form className='signup' onSubmit={(e) => e.preventDefault()}>
                <h1>SIGN UP</h1>
                <label htmlFor='mail'>Email</label>
                <input type='text' id='mail' ref={email} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref={password} />
                <label htmlFor='passwordconf'>Confirm Password</label>
                <input type='password' id='passwordconf' ref={confpassword} />
                <button onClick={handlesubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Loginpage;
