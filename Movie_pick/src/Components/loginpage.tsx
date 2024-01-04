import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlogincred, userRigester } from '../dux/Loginslice'
import { useNavigate } from 'react-router-dom'
import '../Styles/loginpage.css'

const Loginpage = () => {
    const email = useRef(null)
    const password = useRef(null)
    const confpassword = useRef(null)
    const loginmail = useRef(null)
    const loginpass = useRef(null)
    const nav = useNavigate()
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const userdb = useSelector(getlogincred)
        console.log(userdb);

    const handlesubmit = () => {
        if (email.current.value.length > 0 && password.current.value.length > 0 && password.current.value === confpassword.current.value) {
            const emailvalue = email.current.value;
            const passvalue = password.current.value
            dispatch(userRigester({ emailvalue, passvalue }))
            email.current.value = ""
            password.current.value = ''
            confpassword.current.value = ''
        }
    }

    // const singupUser = () => {
    //     setShow(true);
    // }
  console.log(loginmail?.current?.value)
    const signinUser = () => {
        console.log(loginmail.current.value,loginpass.current.value)
        if (loginmail.current.value.length > 0 && loginpass.current.value.length > 0){
            userdb.map((val:any)=>{
                console.log(val.emailvalue, val.passvalue)
                if(loginmail.current.value === val.emailvalue && loginpass.current.value === val.passvalue){
                    console.log("success");
                    nav('/mainpage');
                }
            })
        }
        loginmail.current.value = ''
        loginpass.current.value = ''
    }

    // const handlebacktotlogin=()=>{
    //     nav('/')
    // }

    return (

        <div className='mainuserUI'>
            <h1>Welcome to the MOVIE RECOMMENDER .com</h1>
            {
                !show ? 
                <form className='login' onSubmit={(e)=>e.preventDefault()}>
                    <h1>LOG IN</h1>
                    <label htmlFor='loginmail'>Email</label>
                    <input type="text" id='loginmail' ref={loginmail}/>
                    <label htmlFor='loginpassword'>Password</label>
                    <input type="password" id='loginpassword'ref={loginpass} />
                    <button onClick={signinUser}>sign in</button>
                    {/* <button onClick={singupUser}>sign up</button> */}
                </form> 
                : ""
            }

            {
                // show ? 
                <form className="signup" onSubmit={(e) => e.preventDefault()}>
                    <h1>SIGN UP</h1>
                    <label htmlFor='mail' >Email</label>
                    <input type="text" id='mail' ref={email} />
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' ref={password} />
                    <label htmlFor='passwordconf'>Confrom Password</label>
                    <input type="password" id='passwordconf' ref={confpassword} />
                    {/* <button onClick={handlebacktotlogin}>back to login</button> */}
                    <button onClick={handlesubmit}>submit</button>
                    
                </form> 
                // : ""
            }


        </div>
    )
}
export default Loginpage
