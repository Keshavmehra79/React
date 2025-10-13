import axios from "axios";
import React, { useState } from "react";
const Form=()=>{
    const[formdata,setdata]=useState({
        name:"",age:"",city:"",checkin:"",checkout:"",people:""
    })
    let handlesubmit=(e)=>{
        setdata({...formdata,
            [e.target.name]:e.target.value}
        )
        
    }
    let senddata=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/formdata",{...formdata,price:1000}).then(()=>(
            alert("Booked")
        )).catch((err)=>
            console.log(err)
        )
    }


    return (
        <><br></br><br></br>
        <form onSubmit={senddata}>
         Enter Name:   <input type="text" name="name" value={formdata.name} onChange={handlesubmit}/><br></br><br></br>
         Enter Age:   <input type="text" name="age" value={formdata.age} onChange={handlesubmit}/><br></br><br></br>
         Enter City:
          <select name="city" id="" value={formdata.city} onChange={handlesubmit}>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Gwalior">Gwalior</option>
         </select><br></br><br></br>
          Enter Checkin:  <input type="date" name="checkin" value={formdata.checkin} onChange={handlesubmit}/><br></br><br></br>
          
          Enter Checkout:  <input type="date" name="checkout" value={formdata.checkout} onChange={handlesubmit}/><br></br><br></br>
          Enter People: <input type="number" onChange={handlesubmit}/><br></br><br></br>

            <button type="submit">Book Now </button>
        </form>
        
        </>
    )
}
export default Form