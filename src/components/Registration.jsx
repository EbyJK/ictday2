import { Typography, TextField,Button } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <br />
      <Typography variant='h3'>Registration</Typography>
      <br /><br />
      <TextField label='Name' variant='outlined'>Name</TextField>
      <br /><br />
      <TextField label='Age' variant='outlined'>Age</TextField>
      <br /><br />
      <TextField label='Place'variant='outlined' >Place</TextField>
      <br /><br />
      <TextField label='Email' variant='outlined'>Email</TextField>
      <br /><br />
      <TextField label='Username'variant='outlined'>Username</TextField>
      <br /><br />
      <TextField label='Password'variant='outlined'>Password</TextField>
      <br /><br />
      <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default Registration
