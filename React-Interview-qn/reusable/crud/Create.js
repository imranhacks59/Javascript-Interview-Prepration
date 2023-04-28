import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const navigate = useNavigate();
    // const personData = {
    //     name:'',
    //     age:'',
    //     Checkbox:false
    // }
    const [name,setName] = useState('');
    const [age,setAge] = useState()
    const [check,setCheck] = useState(false);
    const formSubmitHandler= async()=>{
         await axios.post(
            `https://6448ab29e7eb3378ca333a80.mockapi.io/react-crud-app`,
            {name,age,check}
          );
          navigate('/')
    }

  return (
    <div style={{width:'500px',margin:"auto",marginTop:"10%"}}>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name"
          
          onChange={(e)=>setName(e.target.value)}

          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Age"
        
          onChange={(e)=>setAge(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button onChange={()=>setCheck(!check)} type="submit" onClick={formSubmitHandler}>Submit</Button>
      </Form>
    </div>
  );
};

export default Create;
