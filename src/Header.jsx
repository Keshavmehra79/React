import React from "react";
import { FaInstagram, FaRegUser,FaGithub,FaLinkedin } from "react-icons/fa";

function Header(){
    return(
        <>
       <div id="nav">
           <div><h3>Wellcome</h3></div> <FaRegUser className="user"/>
           <ul id="content">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Testomnial</li>
            <li>Contact</li>
           </ul>

       </div>


        <header>
           <img src="4.png" alt="" id="img"/>
        </header>

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
export default Header