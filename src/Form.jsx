import React, { useState } from "react";

const App=()=>{
    // let change=(e)=>{
    //     // console.log(e)
    //     // console.log(e.target)
    //     console.log(e.target.value)
    // }
    //h1 pe print krna h input

    // const[input,setinput]=useState("Render here")       
    // const change=(e)=>{
    //         setinput(e.target.value)
    // }


        // const[name,setname]=useState("")
        // const[email,setemail]=useState("")
        // const[num,setnum]=useState("")
        // const[pass,setpass]=useState("")



        // let handlesubmit=(e)=>{

        //     e.preventDefault()  //use to avoid page refresh
            
        //     if(name==''){
        //         alert("Please Enter your name")
        //         return
        //     }
        //     else if(email==''){
        //         alert("Please Enter your email")
        //             return
        //         }
        //     else if(!(email.includes('@'))){
        //         alert("Please Enter your valid email")
        //         return
        //     }
        //     else if(!(email.includes('@gmail.com') || email.includes('@yahoo'))){
        //         alert("Please enter your full correct email")
        //         return
        //     }
        //     else if(num==''){
        //     }
        //     else if(isNaN(num)){
                
        //     }
        //     else if(num.length!=10){
        //         alert("Enter valid 10 digits  number")
        //         return

        //     }
        //     else if(pass==''){
        //         alert("Please enter password")
        //         return 
        //     }
              
        //     else if(!(pass.match(/['@#$^&*()']/))){
        //         alert("Please Enter correct password")
        //         return 
        //     }
        //     alert("Form submitted!")    
        // }
                const [formdata,setformData]=useState({
                    name:"",
                    email:"",
                    num:"",
                    pass:""
                })


                let changeinp=(e)=>{
                    setformData({
                        ...formdata,
                        [e.target.name]:e.target.value,
                        [e.target.name]:e.target.value,
                        [e.target.name]:e.target.value,
                        [e.target.name]:e.target.value
                        
                    })
                    alert("form submitted")
                }

    return(
        <>
        {/* <h1>Form</h1> */}
        {/* <h1>{input}</h1>
        <input type="text" onChange={change} /> */}


        <h1>{formdata.name}</h1>
        <h1>{formdata.email}</h1>
        <h1>{formdata.num}</h1>
        <h1>{formdata.pass}</h1>
        {/* <h1>{email}</h1>
        <h1>{num}</h1>
        <h1>{pass}</h1> */}
        <form onSubmit={changeinp}>
            {/* Enter name <input type="text" name="name" value={name}  onChange={(e)=>{setname(e.target.value)}}/><br></br><br></br>
            Enter Email <input type="text" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br></br><br></br>
            Enter num <input type="text"   name="num" value={num} onChange={(e)=>{setnum(e.target.value)}}/><br></br><br></br>
            Enter pass <input type="text" name="pass" value={pass} onChange={(e)=>{setpass(e.target.value)}}/><br></br><br></br> */}

                Enter name <input type="text" name="name" value={formdata.name}  onChange={changeinp}/><br></br><br></br>
            Enter Email <input type="text" name="email" value={formdata.email} onChange={changeinp}/><br></br><br></br>
            Enter num <input type="text"   name="num" value={formdata.num} onChange={changeinp}/><br></br><br></br>
            Enter pass <input type="text" name="pass" value={formdata.pass} onChange={changeinp}/><br></br><br></br>


            <button type="submit">Sign up</button>

        </form>

        </>
    )



}

export default App


// preventdefault,name,value,typedjs,spread operator