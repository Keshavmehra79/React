import React from "react";
import { useNavigate } from "react-router-dom";
const Rcontact =()=>{
    let navigate=useNavigate()

    return(
        <>
        <h1>Rcontact</h1>
                 <button onClick={()=>{navigate('/about')}}>go to about</button>
        
        </>
    )
}
export default Rcontact