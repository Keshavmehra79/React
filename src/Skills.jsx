import React from "react";
import Cards from "./Cards.jsx"
import img from "./assets/html.png"
import img2 from "./assets/css.png"
import img3 from "./assets/js.png"
const Skill=()=>{
    let html={
            lan:"hyper text markup lang",
            des:"Gives Structure to web"

    }
    let css={
            lan:"Cascecading style sheet",
            des:"Gives styling to web"

    }
    let js={
            lan:"Javascript",
            des:"Use to operation perform with the dom"

    }
    
    return(
        <>
         <h1 className="text-3xl text-center m-2 p-2">My Skills</h1>
         <div className="flex justify-around">
        <Cards data={html} img={img}/>
        <Cards data={css} img={img2}/>
        <Cards data={js}  img={img3}/>
        </div>
        </>
    )
}
export default Skill