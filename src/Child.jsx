import React from "react";
// const Child=(props)=>{
    // const Child=({title,brand,price})=>{
    const Child=({Clothes})=>{
       let {Title,Brand,Price,Des}=Clothes
        // its called destructing method
   return( <>
    
    {/* props is not  a keyword we can any word */}
    {/* <h1>{props.title}</h1>
    <h2>{props.brand}</h2>
    <h4>{props.price}</h4> */}
     <h1>{Title}</h1>
    <h2>{Brand}</h2>
    <h4>{Price}</h4>
    
    
   <p>

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, officia!
   </p>
    </>)
}

export default Child