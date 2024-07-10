import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter2 = () => {
    var[count,setCount] = useState(0);
    const add =() =>{
        console.log("add button clicked");
        setCount(++count)

    }
    const sub =()=> {
        console.log("subtract button clicked");
        setCount(--count)
    }

  return (
    <div style={{textAlign:"center",marginTop: "5%"}}>
      <Typography variant='h3'>
        {count}
      </Typography>
      <Button variant='contained' color='error' onClick={add} >+</Button>&nbsp;
      <Button variant='contained' color='success' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter2
