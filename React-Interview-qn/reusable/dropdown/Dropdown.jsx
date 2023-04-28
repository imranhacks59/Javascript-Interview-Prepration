import { Button } from '@mui/material';
import React, { useState } from 'react'
import './Dropdown.css'


const Dropdown = () => {
   
    const list = ["fruits","vegetables","Meat"];
   const [open,setOpen] = useState(false);
    const changeHandler = () =>{
        setOpen(!open);
    }
  return (
    <div className='dropdownContainer'>
     <Button onClick={changeHandler}>Dropdown</Button>
    {
    open ? (
      list.map((item,index)=>(
       
        <ul className='menu'>
            <li key={index} className='menu-item'>{item}</li>
        </ul> 
        
     ))
     )
    : null
    
    }


    </div>
  )
}

export default Dropdown