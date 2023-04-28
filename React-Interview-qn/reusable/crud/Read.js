import React, { useEffect, useState } from "react";
import { Link, Routes, useNavigate } from "react-router-dom";
import "./Read.css";
import { Button } from "semantic-ui-react";
import axios from "axios";

const Read = () => {
  const navigate = useNavigate();
  const [data,setData] =useState([]) 
  const fetchData = async()=>{
    const res = await axios.get(`https://6448ab29e7eb3378ca333a80.mockapi.io/react-crud-app`)
    console.log(res)
    const datas = res.data;
   await setData(datas)
    console.log("data" + data)
  }
  const saveData=(elem)=>{
     let {id,name,age,check} = elem;
     localStorage.setItem("id",id);
     localStorage.setItem("name",name);
     localStorage.setItem("age",age);
     localStorage.setItem("check",check);
  }
  const deleteData = (id) =>{
    axios.delete(`https://6448ab29e7eb3378ca333a80.mockapi.io/react-crud-app/${id}`)
    .then(()=>{
      fetchData()
    })
  }
  useEffect(()=>{
    fetchData();
    
  },[])
  return (
    <div className="read-table">
      <table class="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Checkbox</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
        {
          data.map((elem)=>{
            return( 
              <tr>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
              <td>{elem.check ? "checked":"unchecked"}</td>
              <Link to='/update'>
              <td><Button onClick={()=>saveData(elem)}>Update</Button></td>
              </Link> 
              <td><Button onClick={()=>deleteData(elem.id)}>delete</Button></td>
              </tr>
            )
          })
        }
        </tbody>
        
        {/* <tbody>
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td>true</td>
            <td data-label="Button"><Button>delete</Button></td>
          </tr>
        </tbody> */}
      </table>
      <Link to='/create'>
      <Button>Create</Button>
      
      </Link>
    </div>
  );
};

export default Read;
