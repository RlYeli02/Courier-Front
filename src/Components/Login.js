/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {LOGIN, GET_PACKAGES} from "../routes/Useroutes"
import axios from 'axios';
import  "../App.css";



const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
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
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
          history.push("/packages")
        }
        
    })
    async function Login(){
      let logged = await axios.post(LOGIN, {
      email: email, 
      password: password
      }) 
      

      if(logged.status===404){
         
          console.log("not sucess")
      }
      else if (logged.status===200){ 
          console.log("sucess")
          console.log(password)
          logged = await logged.data
          localStorage.setItem('user-info', JSON.stringify(logged))
          history.push("/packages")
       }
      
    
    }
    return(
        <div className="login-container">
           
                <div className="form">
                    <h1>🔐</h1>
                     <h1>Login</h1>
                    <label className="labels">Email</label>
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
                    <button className="login-button" onClick={Login}>login</button>
                </div>
            
        </div>
    )
}
export default Login;