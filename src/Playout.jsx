import React from "react";
import { Link,Outlet } from "react-router-dom";
import Portfolio from "./assets/portfolio.webp"
import { FaInstagram, FaRegUser,FaGithub,FaLinkedin } from "react-icons/fa";


const PLayout=()=>{
    return(
        <>
                         <nav className="bg-cyan-950 h-12 text-blue-200">
                         <ul className="flex  justify-center gap-20 ">
                             <li><Link to="/">Home</Link></li>
                             <li><Link to="/head">Header</Link></li>
                             <li><Link to="/about">Contact us</Link></li>
                             <li><Link to="/skill">Skills</Link></li>
                         </ul>
                  </nav>
              <Outlet/>     
                      <div className="flex bg-black text-white">
                     <img src={Portfolio} alt="" className="w-dvh h-150" />    
                    <p className="italic m-5"><h1 className="text-5xl italic m-10">Hi' i am keshav Wellcome in my portfolio.</h1>                                  
                     I am eager learn to new things and now turning ideas into reality.
                            </p>
                     </div>  

             
 <footer>
            <div id="footer">
                <div><p>
                    Venue-Pant nagar ,<br />Ashoka garden Bhopal <br /><br />
                    Contact-7909322992 <br />
                    Email-mehrakeshav332@gmail.com
                </p>
                </div>

                <div id="icons">
                <FaGithub className="icn"/>
                <FaLinkedin className="icn"/>
                <FaInstagram className="icn"/>
                </div>

                <div>
                    <h3>About The Company</h3>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Nobis, ducimus <br /> Maiores optio temporibus a ad,<br></br> accusamus repudiandae nisi eos!
                        </p>
                </div>

            </div>
        </footer>             

        </>
    )
}

export default PLayout