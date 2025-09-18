import React from "react";
import pic from "./assets/iphone14pro.webp"
import pic2 from "./assets/iphone.jpeg"
import pic3 from "./assets/pixel.avif"
import pic4 from "./assets/oneplus.webp"
const  Cards=({iphone,iphone16,pixel,oneplus})=>{
    let {Title,Brand,Price,Color}=iphone
    let {title,brand,price,color}=iphone16
    let {tit,brn,pri,clr}=pixel
    let {t,b,p,c}=oneplus
    return(
        <>
        <section id="cardid">
            <div className="cards">
                <img src={pic} alt="" className="img"/>
                <h2>{Title}</h2>
                <h3>{Brand}</h3>
                <h3>{Price}</h3>
                <p>{Color}</p>
            </div>
            {/* <div className="cards">
                <img src={pic2} alt="" className="img"/>
                <h2>{title}</h2>
                <h3>{brand}</h3>
                <h3>{price}</h3>
                <p>{color}</p>
            </div>
            <div className="cards">
                 <img src={pic3} alt="" className="img"/>
                <h2>{tit}</h2>
                <h3>{brn}</h3>
                <h3>{pri}</h3>
                <p>{clr}</p>
            </div>
            <div className="cards">
                  <img src={pic4} alt="" className="img"/>
                <h2>{t}</h2>
                <h3>{b}</h3>
                <h3>{p}</h3>
                <p>{c}</p>
            </div> */}
        </section>
        
        </>
    )
}

export default Cards