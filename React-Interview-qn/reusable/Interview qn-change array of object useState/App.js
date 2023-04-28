import React, { useState,useEffect } from 'react'

const App = () => {
  const [value,setValue] = useState(0);
  const increamentValue=(e)=>{
     setValue(value +1 )
     setValue(value +1 )
     setValue(value +1 )
  }
  const [items,setItems] = useState(['kunal','imran','Rahul','Rajeev','Rohan']);
  
  const removeName=(item)=>{
    //  const name = items[e.target.value];
    //  console.log(name)
    // setItems(items.slice(items.indexOf(e.target.value,1)))
    setItems(items.filter((elem)=> elem !== item))
  }
  return (
    <div>
         <h2>{value}</h2>
         <button onClick={increamentValue}>Increament Value by 1</button>
         <ul>
         {
          items.map((item,i)=>{
            return <li onClick={()=>removeName(item)}>{item}</li>
})
         }
         </ul>
     </div>
  )
    } 
    
export default App