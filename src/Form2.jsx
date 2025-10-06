import React, { useState } from "react";
const App=()=>{
const[formdata,setinput]=useState({
    name:"",
    email:"",
    num:"",
    pass:""
})

        const changeinput=(e)=>{
            setinput(
                {...formdata,
                [e.target.name]:e.target.value,
                [e.target.email]:e.target.value,
                [e.target.num]:e.target.value,
                [e.target.pass]:e.target.value,
                
            }
            
        )                   
        alert('Form submitted succcefully    ')            

        }
    return(

        <>
        <h1>{formdata.name}</h1>
        <h1>{formdata.email}</h1>
        <h1>{formdata.num}</h1>
        <h1>{formdata.pass}</h1>
       <form onSubmit={changeinput}>
         
        Name :<input type="text" name="name" value={formdata.name} onChange={changeinput}/>     <br></br><br></br>   
        Email: <input type="text" name="email" value={formdata.email} onChange={changeinput}/>     <br></br><br></br>   
        Num :<input type="text" name="num" value={formdata.num} onChange={changeinput}/>     <br></br><br></br>   
        Pass: <input type="text" name="pass" value={formdata.pass} onChange={changeinput}/>     <br></br><br></br> 
        <button type="submit">Sign up</button> </form> 
        </>
    )
}
export default App