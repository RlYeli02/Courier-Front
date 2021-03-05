import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { GET_PACKAGES} from "../routes/Useroutes"
import {useHistory} from "react-router-dom";
import axios from "axios"


const Packages =()=>{
    const [packages, setPackages]=useState([])
 
     useEffect(()=>{
         getData()
     },[])

     const getData = async(props,user)=>{
       const res = await axios.get(`https://courierdemo.azurewebsites.net/api/packages/getPending?username=${props}`)
        const data = await res.data.responseObject
        setPackages(data)

     }
     
     return(
        <div>
        <h1>Movies list 🎬 </h1>
        <div>
          <table className="table">
            <thead>
              <tr className="table-content">
                <th>Description</th>
                <th> Weight</th>
                <th> $ Price to pay </th>
                <th> Suplier</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((packages, i) => (
                <tr>
                  <td className="table-content">{packages.description}</td>
                  <td>{packages.weight}</td>
                  <td>{packages.priceToPay}</td>
                   <td>{packages.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        
    )
}

export default Packages;