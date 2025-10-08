import React,{useState} from 'react';
// const task1=()=>{
//     const[dark,setcolor]=useState(false)
//     return(
//         <>
//         <div style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>
//             <h2>{dark?"Dark mode":"Light mode"}</h2>
//             <button onClick={()=>{setcolor(!dark)}}>{dark?"Light":"Dark"}</button>
//             <button onClick={()=>{setcolor(!dark)}}>Click me</button>
//         </div>
        
//         </>
//     )
// }


const task2=()=>{
    const[message,setmessage]=useState(false)
    return(
        <>
        {message && <h1>Wellcome to see the message</h1>}
        <button onClick={()=>{setmessage(!message)}}>show me</button>
        
        </>
    )
}

export default task2