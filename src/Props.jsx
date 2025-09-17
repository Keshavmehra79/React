import React from "react";
import Child from "./Child";

const App=()=>{
    // let Title="phone"
    // let Brand ="mobile"
    // let Price="111"

    let clothes={
        Title:"cloth",
        Brand:"Aman",
        Price:"999"
    }
    return(
        <>
        <h1>Props</h1>

        <Child Clothes={clothes}/>
        {/* <Child title={Title} brand={Brand} price={Price}/> */}
        {/* <Child title="Cloth" brand="Zara" price="999"/>     
        <Child title="Cloth" brand="H&M" price="899"/>      */}
        </>
    )
}
export default App