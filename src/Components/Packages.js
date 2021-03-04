import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { GET_PACKAGES} from "../routes/Useroutes"
import {useHistory} from "react-router-dom";

const Packages =()=>{
    const [packages, setPackages]=useState([])
     const history = useHistory()
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
     
     console.log(packages)
     const Logout=()=>{
         localStorage.removeItem('user-info')
         history.push("/")

     }
     return(
        <div className="package-container">
            <div className="package">
        <h1>Packages</h1>

        
         <table>
            <tr>
                <th>Product Name</th>
                <th>Type of product</th>
            </tr>
            <tbody>
                {packages.map((pacKage, i)=>(
                <tr>
                    <td key={pacKage._id}>{pacKage.name}</td>
                    <td key={i}>{pacKage.typeOF}</td>
                </tr>
                ))}
            </tbody>
        </table>
                
            
        
        <Link to ="/"><button onClick={Logout} className="logout">Log out</button></Link>
        </div>
        </div>
        
    )
}

export default Packages;