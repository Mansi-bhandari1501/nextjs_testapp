'use client'
import React, { useState } from 'react'
import { Stack, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddExam = () => {
  const [name,setName] = useState("");
  const [duration,setDuration] = useState("");
  const [category,setCategory] = useState("");
  const [totalMarks,setTotalMarks] = useState("");
  const [passing,setPassing] = useState("");
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  
  }

  //  const token =localStorage.getItem('auth')
  // console.log(token)
  return (
    <div>
      <Stack height={"65vh"}>

        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F" >New Quiz</Typography>
          <form  onSubmit={handleSubmit}>
            <Card sx={{ width: "100%", height: "65vh", border: "1px solid black" }}>
              <CardContent sx={{ m: 4 }}>
                <Box sx={{ flexGrow: 1 }}>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>name</label>
                      <TextField size='small' type='text' sx={{ width: "100%", mt: 1 }} value={name} onChange={(e)=>{setName(e.target.value)}} />


                      <Grid item xs={12}>
                        <label>duration</label>
                        <TextField size='small' sx={{ width: "100%", mt: 1 }}  value={duration} onChange={(e)=>{setDuration(e.target.value)}}/>

                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>category</label>
                      <TextField size='small' sx={{ width: "100%", mt: 1 }} value={category} onChange={(e)=>{setCategory(e.target.value)}} />



                      <Grid item xs={12}>
                        <label>Total Marks</label>
                        <TextField
                          size='small' sx={{ width: "100%", mt: 1 }} value={totalMarks} onChange={(e)=>{setTotalMarks(e.target.value)}} />

                      </Grid>
                    </Grid>


                  </Grid>
                
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Passing Marks</label>
                      <TextField size='small' type='number' sx={{ width: "100%", mt: 1 }}  value={passing} onChange={(e)=>{setPassing(e.target.value)}}/>
                    </Grid>


                  </Grid>

                </Box>



              </CardContent>

            </Card>
            <Button type="submit" sx={{
              width: "200px", bgcolor: "#03103F", color: "white", mt: 3, "&:hover": {
                bgcolor: "#03103F", color: "white"
              },
            }} >Add</Button>
          </form>
        </Stack>
      </Stack>

    </div>
  )
}

export default AddExam
