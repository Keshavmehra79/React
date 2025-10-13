import React, { useState,useEffect} from "react";
import axios from "axios"
const prctc=()=>{
   //Data fetching.........
   const[Data,getdata]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/formdata`).then((res)=>{
            getdata(res.data)
    }).catch((err)=>{
            console.log(err);
            
    })
    },[])

   

   const fetchdata= ()=>(axios.get(`http://localhost:3000/formdata`).then((res)=>{
            getdata(res.data)
    }).catch((err)=>{
            console.log(err);
            
    }))
fetchdata()
//Data deleting.........
const  del=(id)=>{
    axios.delete(`http://localhost:3000/formdata/${id}`).then(()=>{
        alert("Data deleted....")
        fetchdata()
    }).catch((err)=>{
        console.log(err);
        
    })
}


//Data Storing............

const[formdata,setdata]=useState({
    name:"",age:"",checkin:"",checkout:"",people:""
})


const handlechange=(e)=>{
    setdata({...formdata,[e.target.name]:e.target.value})
}

const senddata=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:3000/formdata`,formdata).then(()=>{
        alert("Data Stored")
    }).catch((err)=>{
        console.log(err);
        
    })
}

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Checkin</th>
                    <th>Checkout</th>
                    <th>People</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    Data.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.checkin}</td>
                        <td>{e.checkout}</td>
                        <td>{e.people}</td>
                        <td onClick={()=>del(e.id)}>Delete</td>

                    </tr>
                    ))
                }
            </tbody>
        </table>



        <form onSubmit={senddata}><br></br><br></br>
           Name: <input type="text" name="name" value={formdata.name} onChange={handlechange}/><br></br><br></br>
           Age: <input type="text" name="age" value={formdata.age} onChange={handlechange}/><br></br><br></br>
           Checkin: <input type="date" name="checkin" value={formdata.checkin} onChange={handlechange}/><br></br><br></br>
          Checkout:  <input type="date" name="checkout" value={formdata.checkout} onChange={handlechange} /><br></br><br></br>
          People:  <input type="text" name="people" onChange={handlechange}/><br></br><br></br>

          <input type="submit" />
        </form>
        
        </>
    )
}
export default prctc