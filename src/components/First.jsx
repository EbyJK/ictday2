import { TextField,Typography, Button } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
        <h1>Login</h1>
      <input placeholder='username'/>
      <br/> <br />
      <input type='password' placeholder='password'/>
      <br/><br/>
      <button>Login</button>
      <br /><br />
      <Typography variant='h1'>Login</Typography>
      <br />
      <TextField variant='outlined' label='Username'></TextField>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <br /><br />
      <Button variant="text" color='error'>Text</Button>
      <Button variant="contained" color='secondary'>Contained</Button>
      <Button variant="outlined" color='success'>Outlined</Button>
    </div>
  )
}

export default First
