import React, { useState } from "react";

const App=()=>{
    // let change=(e)=>{
    //     // console.log(e)
    //     // console.log(e.target)
    //     console.log(e.target.value)
    // }
    //h1 pe print krna h input

    // const[input,setinput]=useState("Render here")       
    // const change=(e)=>{
    //         setinput(e.target.value)
    // }


        const[name,setname]=useState("")
        const[email,setemail]=useState("")
        const[num,setnum]=useState("")
        const[pass,setpass]=useState("")



    return(
        <>
        {/* <h1>Form</h1> */}
        {/* <h1>{input}</h1>
        <input type="text" onChange={change} /> */}


        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{num}</h1>
        <h1>{pass}</h1>
        <form action="">
            Enter name <input type="text"  value={name}  onChange={(e)=>{setname(e.target.value)}}/><br></br><br></br>
            Enter Email <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br></br><br></br>
            Enter num <input type="text" value={num} onChange={(e)=>{setnum(e.target.value)}}/><br></br><br></br>
            Enter pass <input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}}/><br></br><br></br>


            <button type="submit">Sign up</button>

        </form>

        </>
    )
}

export default App