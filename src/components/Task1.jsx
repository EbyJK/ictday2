import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task1 = () => {
    var [name,setName]=useState();
    const changeName=() => {
        console.log("button clicked");
        setName("HOME");

    };
    const changeName1=() => {
        console.log("button clicked");
        setName("GALLERY");

    };
    const changeName2=() => {
        console.log("button clicked");
        setName("CONTACT");

    };
  return (
    <div style={{textAlign:'center',marginTop:'5%'}}>
      <Typography variant='h3'>Welcome To {name}</Typography>
      <br /><br />
      <Button variant='contained' onClick= {changeName} color='success'>HOME</Button>
      <br /><br />
      <Button variant='contained'onClick={changeName1} color='error'>GALLERY</Button>
      <br /><br />
      <Button variant='contained' onClick={changeName2} color='secondary'>CONTACT</Button>
      <br /><br />

    </div>
  )
}

export default Task1
