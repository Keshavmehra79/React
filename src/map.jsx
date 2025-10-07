import React from "react";
const Map=()=>{
    let students=[
        {id:1,name:"keshav",age:22},
        {id:2,name:"naeem",age:21},
        {id:3,name:"arjun",age:23},
        {id:4,name:"ram",age:24}
    ]

    // let fruit=[
    //     {id:1,name:"mango"},
    //     {id:2,name:"orange"},
    // ]
    return(
        <>
        {/* <h1>mapping item</h1>
        <ul>
            {fruit.map((e,index)=>(
                <li key={index}>{e.name}</li>
            ))}
        </ul> */}

        <h1>Mapping item</h1>
       {students.map((e)=>(
        <ul>
            <li key={e.id}>My name is {e.name} and my age is {e.age}</li>
        </ul>
       ))}
        
        
        </>
    )
}

export default Map