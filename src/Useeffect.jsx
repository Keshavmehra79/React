import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Useeffect=()=>{
    let[count,setcount]=useState(0);
    useEffect(()=>{
        console.log("Runnig.........")
    },[])

    let navigate=useNavigate()
    let inpref=useRef()
    let show=()=>{
        // inpref.current.value
        inpref.current.focus()
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
         
         <button onClick={()=>{useNavigate('/about')}}>go to google</button>

         <input type="text" ref={inpref} />
         <button onClick={()=>{show()}}>click</button>
        </>
    )
}


export default Useeffect