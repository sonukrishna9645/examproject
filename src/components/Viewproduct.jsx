import React,{useEffect, useState } from 'react'
import {Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Button} from '@mui/material'
import axios from 'axios'
import Add from './Add'
const Viewproduct = () => {
    var[update,setupdate]=useState(false)
    var[selected,setselected]=useState([])
    var[students,setstudents]=useState([])
    useEffect(()=>{
       axios.get(" http://localhost:3005/students")
       .then(response=>{
        setstudents(students=response.data)
        console.log(students)
    })
       
       .catch(error=>console.log(error))
    },[])
    const deleteValue=(Id)=>{
        console.log(Id)
        axios.delete("http://localhost:3005/students/"+Id)
        .then(respones=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }


    const updatevalue=(value)=>{
     
        setselected(value)
        setupdate(true)
    }
    var finaljsx=<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return <TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.brand}</TableCell>
                <TableCell>{value.quantity}</TableCell>
                <TableCell>{value.price}</TableCell>

                <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                <TableCell><Button onClick={()=>updatevalue(value)} color='success'>update</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

if(update)
finaljsx=<Add data={selected} method ="put" />
  return (
    
  )
}

export default Viewproduct
