import React, { useContext } from "react";
import Mycontext from "./Mycontext2";
import { useState } from "react";

const Child=()=>{
    const theme=useContext(Mycontext)
    const[dark,settheme]=useState(false)

    return(
        <>
        <h1>
            {dark?"Light mode":"Dark mode"} </h1>
        <div style={dark?theme.light:theme.dark}>
            <h1>This is div</h1>
        </div>

        <button onClick={()=>{settheme(!dark)}}>{dark?"Dark":"Light"}</button>
        
        </>
    )
}

export default Child