import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName]=useState("Eby");
    var[ input, setInput ] = useState();
    // var [cname,csetName]=useState("ecosport");
    const changeName= () => {
        console.log("button clicked");
        setName(input);
    };
    const inputHandler = (p) => {
        console.log(p.target.value);
        setInput(p.target.value);

        
    };
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
        
        <Typography variant='h3'>Hello {name}</Typography>
        <br /><br />
        <TextField variant='outlined' label='enter a name'
        onChange={inputHandler}/>
        <br /><br />
        {/* <Button variant='contained'>Change</Button> */}
        {/* <Typography variant='h3'>My car is {cname}</Typography> */}
        <Button variant='contained' onClick={changeName}>Change</Button>
       
    </div>
  )
}

export default StateBasics
