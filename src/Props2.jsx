import Cards from "./Child2.jsx";
const Child2=()=>{
    let iphone14={
        Title:"iphone14 pro",
        Brand:"apple",
        Price:"1,29,900",
        Color:"Gray"
    }
    let iphone16={
        title:"iphone16",
        brand:"Apple",
        price:"xxxxxxx",
        color:"White"
    }
      let pixel={
        tit:"Pixel",
        brn:"Google",
        pri:"xxxxxxx",
        clr:"Dark Gray"
    }

    let oneplus={
        t:"One+",
        b:"Android",
        p:"Don't know",
        c:"Aqua"
    }
    return(
        <>
        <Cards iphone={iphone14}
         iphone16={iphone16}
         pixel={pixel}
         oneplus={oneplus}/>
         
          <Cards iphone={iphone14}
         iphone16={iphone16}
         pixel={pixel}
         oneplus={oneplus}/>
          <Cards iphone={iphone14}
         iphone16={iphone16}
         pixel={pixel}
         oneplus={oneplus}/>
          <Cards iphone={iphone14}
         iphone16={iphone16}
         pixel={pixel}
         oneplus={oneplus}/>



    
        
        </>
    )
}
export default Child2