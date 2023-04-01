import React from 'react'
import {AppBar,Button,Toolbar,Typography} from '@mui/material'
import {Box} from '@mui/material'
import {Link }from 'react-router-dom'
const Navbar = () => {
  return (
    <Box>
    <AppBar>
          <Toolbar>
            <Typography>Studentsapp</Typography>
            <Button  color="inherit"><Link to ='/' style={{color:'white',textDecoration:'none'}} >
                Viewproduct</Link></Button>
            <Button color="inherit"><Link to ='/add' style={{color:'white',textDecoration:'none'}} >
                Addproduct</Link></Button>
          </Toolbar>
        </AppBar>
   </Box> 
  )
}

export default Navbar
