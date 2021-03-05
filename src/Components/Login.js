/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {LOGIN, GET_PACKAGES} from "../routes/Useroutes"
import axios from 'axios';
import  "../App.css";



const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleUsername =(e)=>{
        e.preventDefault();
        setUsername(e.target.value.replace(/[^\w\s]/gi, ""))
        console.log(username)
    }
      const handlePassword =(e)=>{
          e.preventDefault();
        setPassword(e.target.value.replace(/[^\w\s]/gi, ""))
        console.log(password)
    }
  
  
   const newPost={
     username:username,
     password:password
   }
   

    const login = async () => {
    
      const resp = await axios.post(LOGIN, newPost)
      console.log(resp)
      if(resp.data.success===true){
        console.log("bien")
        history.push(`/packages/${username}`)
      }
      else{
        console.log("mal")
      }

    };

    return(
        <div className="login-container">
           
                <div className="form">
                    <h1>🔐</h1>
                     <h1>Login</h1>
                    <label className="labels">Email</label>
                    <br />
                    <input
                    type="text"
                    maxLength="10"
                    
                    className="form-field"
                    value={username}
                    onChange={handleUsername}
                    >
                    </input>
                    <br />
                     <label>Password</label>
                    <br />
                    <input
                    type="text"
                    className="form-field"
                    placeholder="max length is 10 characters"
                    value={password}
                    onChange={handlePassword}
                    >
                    </input>
                    
                    <button className="login-button"   onClick={login} >login</button>
                </div>
            
        </div>
    )
}
export default Login;