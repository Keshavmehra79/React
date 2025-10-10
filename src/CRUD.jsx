import React, { useEffect, useState } from "react";
import axios from "axios";
const CRUD =()=>{
//.then()->opration to data
//.catch()->to catch error during fetching.......
const[Data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/hotel").then((res)=>{
                setdata(res.data)
            console.log(res.data);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Price</th>
                </tr>
            </thead>
        <tbody>
            {
                Data.map((e)=>(
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>
                    <td>{e.price}</td>
                </tr>
                ))
            }
        </tbody>
        </table>
      
        <h1>SHOW Data</h1>
        
        </>
    )
}
export default CRUD