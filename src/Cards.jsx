import React from "react";

const Cards=({data,img})=>{
    let {lan,des}=data;
    
    return(
        <>
            <div className="border h-60 w-50 m-10 rounded-2xl">
                <h1 className="text-center font-bold">{lan}</h1>
            <h1 className="text-center">{des}</h1>

                <img src={img} alt="" className=" h-45 m-1 p-2"/>
            </div>
           
        </>
    )
}
export default Cards