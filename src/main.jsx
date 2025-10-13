import { createRoot } from 'react-dom/client'
import "./style.css"
import App2 from "./jsonprctc.jsx"

// import App2 from "./map.jsx"
import { BrowserRouter, useParams } from 'react-router-dom'
// import Mycontext from './Mycontext.jsx'
import Mycontext from "./Mycontext2.jsx"
import { useContext, useEffect, useMemo, useState } from 'react'

// let mydata={
//     name:"keshav",
//     age:22,
//     city:"bhopal"
// }

// let theme={
//     dark:{
//         "background-color":"black",
//         "color":"white",
//     },
//     light:{
//         "background-color":"white",
//         "color":"black",
//     }
// }

// let obj={
//     name:"keshav",
//     age:22,
//     course:"mern"
// }
// let arr=["coding","travelling","singing"]

// let num={
//     num1:10,
//     num2:10
// }
//React bits

//////hooks->
// 1)useState1 2)useContext1 3)useEffect14)usenavigate1
// 5)useParams6)useref17)useMemo 

// onload






                                    // Task

      let theme={
        dark:{
            "background-color":"black",
            "color":"white"
        },
        light:{
            "background-color":"white",
            "color":"black"
        }
      }



createRoot(document.getElementById('root')).render(
    // <Mycontext.Provider  value={{obj,arr,num,theme}}>        
    <BrowserRouter>
    <App2/>
        </BrowserRouter>
    //     </Mycontext.Provider>
    // <Mycontext.Provider value={theme}>

    //     <App2/>
    // </Mycontext.Provider>
    
)
