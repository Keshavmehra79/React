import React from "react";
import { IoIosContact } from "react-icons/io";
import imgtrial from "./assets/img.webp"
const About=()=>{
    return (
        <>
        <div className="flex"> 
            <section className="h-130 w-150 bg-gray-900 text-white text-center p-5">
                <h1 >Contact</h1>
                <p>7909322992</p>
                <h1>Linkedin</h1>
                <p>xxxxxxx</p>
                <h1>Github</h1>
                <p>xxxxxxx</p>
                <h1>Instagram</h1>
                <p>xxxxxxxx</p>
                <p>All rights reserved |copyright2025</p>

        </section>
        <img src={imgtrial} alt="" className="h-xl w-3xl" />
        </div>
        
        </>
    )
}
export default About