/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {LOGIN} from "../routes/Useroutes"
import axios from 'axios';

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail =(e)=>{
        e.preventDefault();
        setEmail(e.target.value)
        console.log(email)
    }
      const handlePassword =(e)=>{
          e.preventDefault();
        setPassword(e.target.value)
        console.log(password)
    }

    async function Login(){
      let logged = await axios.post(LOGIN, {
      email: email, 
      password: password
      }) 
     
      localStorage.setItem("user-info",JSON.stringify(logged))
    
    }
    return(
        <div className="SignupContainer">
            <div className="Signup">
                <div className="form">
                    <label>Email</label>
                    <br />
                    <input
                    type="text"
                    className="form-field"
                    value={email}
                    onChange={handleEmail}
                    >
                    </input>
                    <br />
                     <label>Password</label>
                    <br />
                    <input
                    type="text"
                    className="form-field"
                    value={password}
                    onChange={handlePassword}
                    >
                    </input>
                    <button onClick={Login}>login</button>
                </div>
            </div>
        </div>
    )
}
export default Login;