import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react';
import { DecremenetValue, IncremenetValue } from '../../action/Increment';

const Handledata = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.value)
  return (
    <div style={{margin:"auto"}}>
       <p>{state}</p> 
        <Button onClick={()=>dispatch(IncremenetValue())}>Increment</Button>
        <Button onClick={()=>dispatch(DecremenetValue())}>Decrement</Button>
    </div>
  )
}

export default Handledata