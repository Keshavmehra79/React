import React, {useActionState, useState} from "react";
const Rendering=()=>{

    let[login,setlogin]=useState(false)
    let[dark,setdark]=useState(false)
    let ans
    if(login){
       ans= <h1>Wellcome</h1>
    }
    else{
       ans= <h1>please login</h1>
    }

    return(

        <>
        {ans}
        <button onClick={()=>{setlogin(!login)}}>click me</button>
        <button onClick={()=>{setlogin(!login)}}>{login?"logout":"login"}</button>


        <button onClick={()=>{setdark(!dark)}}>{dark?"light":"dark"}</button>
        </>
    )
}

export default Rendering