import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from "semantic-ui-react";

const Update = () => {
    const navigate = useNavigate();
    const [id,setId] = useState(null)
    const [name,setName] = useState('');
    const [age,setAge] = useState()
    const [check,setCheck] = useState(false);
    const updateData=()=>{
       axios.put(`https://6448ab29e7eb3378ca333a80.mockapi.io/react-crud-app/${id}`,
       {name,age,check}
       )
    }
    // console.log(name)
    useEffect(()=>{
       setId(localStorage.getItem('id'))
       setName(localStorage.getItem('name'));
       setAge(localStorage.getItem('age'));
       setCheck(localStorage.getItem('check'))
       navigate('/')
    },[])
  return (
    <div style={{width:'500px',margin:"auto",marginTop:"10%"}}>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name"
          value={name}
          
          onChange={(e)=>setName(e.target.value)}

          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Age"
          value={age}
        
          onChange={(e)=>setAge(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox value={check} onChange={()=>setCheck(!check)}  label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={updateData}>Submit</Button>
      </Form>
    </div>
  )
}

export default Update