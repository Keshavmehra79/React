import React, { useEffect, useState } from "react";
import axios from "axios";
const CRUD =()=>{
//.then()->opration to data
//.catch()->to catch error during fetching.......
const[Data,setdata]=useState([])
 const[formdata,setformData]=useState({
        name:"",age:"",city:"",checkin:"",checkout:"",people:""
    })

 let handlesubmit=(e)=>{
        setformData({...formdata,
            [e.target.name]:e.target.value}
        )
        
    }
    const[form,setedit]=useState(null)                                                           

    const getdata=()=>{
        axios.get("http://localhost:3000/formdata").then((res)=>{
                        setdata(res.data)
                    console.log(res.data);
                    
                }).catch((err)=>{
                    console.log(err);
                    
                })

    }


    useEffect(()=>{
         axios.get("http://localhost:3000/formdata").then((res)=>{
                        setdata(res.data)
                    console.log(res.data);
                    
                }).catch((err)=>{
                    console.log(err);
                    
                })
    },[])

    let del=(id)=>{
        axios.delete(`http://localhost:3000/formdata/${id}`).then(()=>{

            alert("Data deleted.........")  
            // setdata(Data.filter((e)=>e.id!= id))
            getdata()
        }
    )
    }

    const openform=(user)=>{
      setedit(user)
      setformData({
        name:user.name,
        age:user.age,
        city:user.city,
        checkin:user.checkin,
        checkout:user.checkout,
        people:user.people
      })
    }

    const handleupdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/formdata/${form.id}`,formdata).then(()=>{
          getdata()
            alert("Updated succefully....")
        })
    }
    return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>People</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
        <tbody>{}
            {
                Data.map((e)=>(
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.people}</td>
                    <td>{e.price}</td>
                    <td>{e.price*e.people}</td> 
                    <td onClick={()=>{del(e.id)}}>Delete</td>
                    <td onClick={()=>{openform(e)}}>Edit</td>
                </tr>
                ))
            }
        </tbody>
        </table>
      {form &&    ( <form onSubmit={handleupdate}>
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
          Enter People: <input type="number" name="people" value={formdata.people} onChange={handlesubmit}/><br></br><br></br>

            <button type="submit">Edit </button>
        </form>)}
        
        </>
    )
}
export default CRUD