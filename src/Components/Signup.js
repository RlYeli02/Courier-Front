import React, {useState} from "react";
import {LOGIN, SIGN_UP} from "../routes/Useroutes"
import axios from 'axios';



const SignUp = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName =async(e)=>{
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }
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

    const sent =async ()=>{
     await axios.post(SIGN_UP, {
    name : name ,
    email: email, 
    password: password
    })
    console.log("sucess")
    }
        

    return(
        <div className="SignupContainer">
            <div className="Signup">
                <div className="form">
                    <label>Name</label>
                    <br />
                    <input
                    type="text"
                    className="form-field"
                    value={name}
                    onChange={handleName}
                    >
                    </input>
                    <br />
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
                    <button onClick={sent}>Signup</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp;