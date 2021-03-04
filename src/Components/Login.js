/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {LOGIN, GET_PACKAGES} from "../routes/Useroutes"
import axios from 'axios';



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
          alert("usuario no existe o credenciales incorrectas")
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