import React, { useState } from "react";
const App=()=>{
    
    // let sayhi=()=>{
    //     alert("Working!")
    // }
    // let sayhi=(myname)=>{
    //     alert("Hello"+myname)
    // }


    // let count=0;
        const[myname,setmyname]=useState("keshav")
        let changename=()=>{
            setmyname("sachin")
        }



    const [count,setcount]=useState(0)
    let Inc=()=>{
        setcount(count+1);
    }

    let Dec=()=>{

        if(count>0){
            setcount(count-1);  

        }
    }
    
    return(
        <>
        {/* Usestate->use to change data or manipulate or state management*/}
        {/* syntax-> const[variablename,setvariable]=Usestate(Intial val) */}





        {/* <button onClick={sayhi}>Click me</button>
        <button onClick={()=>alert("working state!")}>Click me</button>
        <button onClick={()=>sayhi("Keshav")}>Click me</button> */}
        <h1>Counter: {count}</h1>
        <button onClick={Dec}>Decrement</button>
        <button onClick={Inc}>Increment</button>
        <h1>{myname}</h1>
        <button onClick={changename}>changename</button>
        
        </>
    )
}
export default App