import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack,Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
const TopBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  sx={{ bgcolor:"#03103F" }}> 
          <Toolbar >
            <Stack width={"100%"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

            <Stack direction={"row"} alignItems={"center"}>
            <HomeIcon/>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,ml:3,width:"200px"}}>
             ShelfSpace
            </Typography>

            </Stack>
            <Stack direction={"row" } sx={{ml:5}} width={"100%"} gap={"20px"} >
            <Link href="/dashboard"> <Typography sx={{color:"white"}}>Dashboard</Typography></Link>
             <Link href="/addBooks"> <Typography sx={{color:"white"}}>Add Books</Typography></Link>
             <Link href="/addQuiz"> <Typography sx={{color:"white"}}>Report</Typography></Link>
            </Stack>
            <Stack direction={"row"} gap={"25px"} sx={{mr:2}}>
                <Button variant="text"  sx={{bgcolor:"white",borderRadius:"10px",color:"#03103F",height:"50px",width:"100px" , '&:hover':{bgcolor:"white",borderRadius:"10px",color:"#03103F"}}}>Log Out</Button>

            </Stack>
            </Stack>

        

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TopBar;

// const TopBar = () => {
//   return(

//   )
// }



//   export default TopBar;