import React, {useState, useEffect} from "react";
import { GET_PACKAGES} from "../routes/Useroutes"
import axios from 'axios';
import { Link } from "react-router-dom";

const Packages =()=>{
    const [packages, setPackages]=useState([])
     
     useEffect(()=>{
         fechtData()
     },[])
     const fechtData = async ()=>
     {
         const Data= await fetch(GET_PACKAGES);
         const pack = await Data.json()
         console.log(pack)
         setPackages(pack)
     }
    
     
     return(
        <div className="package-container">
            <div className="package">
        <h1>Packages</h1>

        <ul>
            {
                packages.map((packages, i)=>(
                  <h2 key={i}>{packages.name}</h2>
                  
                ))
            }
        </ul>
        </div>
        </div>
        
    )
}

export default Packages;