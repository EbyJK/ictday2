import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit">
            <Link to={"/"} style={{ textDecoration:"none",color:"white"}}>Login</Link></Button>
            <Button>
            <Link to={"/reg"} style={{textDecoration:"none",color:"white"}}>Registration</Link>
            </Button>
            <Button>
                <Link to={"/tab"} style={{textDecoration:"none",color:"white"}}>Table</Link>
            </Button>
            <Button>
                <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Logout</Link>
            </Button>
            <Button>
                <Link to={"/statebasics"} style={{textDecoration:"none",color:"white"}}>StateBasics</Link>
            </Button>
            <Button>
                <Link to={"/counter"} style={{textDecoration:"none",color:"white"}}>Counter</Link>
            </Button>
            <Button>
              <Link to={"/task1"} style={{textDecoration:"none",color:"white"}}>Task1</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
