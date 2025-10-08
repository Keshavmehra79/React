import { createRoot } from 'react-dom/client'
import "./style.css"
import App2 from "./Cparent2.jsx"

// import App2 from "./map.jsx"
import { BrowserRouter } from 'react-router-dom'
// import Mycontext from './Mycontext.jsx'
import Mycontext from "./Mycontext2.jsx"

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
    // <BrowserRouter>
    // <App2/>
    //     </BrowserRouter>
    //     </Mycontext.Provider>
    <Mycontext.Provider value={theme}>

        <App2/>
    </Mycontext.Provider>
    
)
