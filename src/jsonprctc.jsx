import React, { useState,useEffect} from "react";
import axios from "axios"
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const prctc=()=>{

    //methods-get,post,delete,put
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
        setdata(null)
    }).catch((err)=>{
        console.log(err);
        
    })
}

/////////////////Data Updating..............
const[editid,editdata]=useState(null)
const func=(user)=>{
    editdata(user)
    setdata({...formdata,
        name:user.name,
        age:user.age,
        checkin:user.checkin,
        checkout:user.checkout,
        people:user.people
    })
}

const updatedata=()=>{
    axios.put(`http://localhost:3000/formdata/${editid.id}`,{...formdata,price:500}).then(()=>{
        alert("Updated Succefully.........")
        getdata()
    }).catch((err)=>{
        console.log(err);
        
    })
}
    return (
        <>
        <table border={""}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Checkin</th>
                    <th>Checkout</th>
                    <th>People</th>
                    <th>Total</th>
                    <th>Delete</th>
                    <th>Edit</th>
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
                        <td>{e.people*e.price}</td>
                        <td onClick={()=>del(e.id)}><MdDelete/></td>
                        <td onClick={()=>func(e)}><FaUserEdit/></td>

                    </tr>
                    ))
                }
            </tbody>
        </table>



        <form onSubmit={senddata} style={{"display":"none"}}><br></br><br></br>
        <h1>Form to store data</h1>
           Name: <input type="text" name="name" value={formdata.name} onChange={handlechange}/><br></br><br></br>
           Age: <input type="text" name="age" value={formdata.age} onChange={handlechange}/><br></br><br></br>
           Checkin: <input type="date" name="checkin" value={formdata.checkin} onChange={handlechange}/><br></br><br></br>
          Checkout:  <input type="date" name="checkout" value={formdata.checkout} onChange={handlechange} /><br></br><br></br>
          People:  <input type="text" name="people" onChange={handlechange}/><br></br><br></br>

          <input type="submit" />
        </form>
        

{editid && (
     <form onSubmit={updatedata}><br></br><br></br>
        <h1>Form to Edit data</h1>
           Name: <input type="text" name="name" value={formdata.name} onChange={handlechange}/><br></br><br></br>
           Age: <input type="text" name="age" value={formdata.age} onChange={handlechange}/><br></br><br></br>
           Checkin: <input type="date" name="checkin" value={formdata.checkin} onChange={handlechange}/><br></br><br></br>
          Checkout:  <input type="date" name="checkout" value={formdata.checkout} onChange={handlechange} /><br></br><br></br>
          People:  <input type="text" name="people" onChange={handlechange}/><br></br><br></br>

          <input type="submit" />
        </form>
)}


        </>
    )
}
export default prctc