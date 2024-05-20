"use client";
import { useAppSelector ,useAppDispatch} from "@/store/hooks";
import { Stack, Box, Typography, Avatar, Button ,TextField,Card,
  CardContent,} from "@mui/material";
import styles from "./styles.module.css";
import profilePic from "../../../../../public/cover1.jpg";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Chip from '@mui/material/Chip';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { deleteBook, editBook } from "@/feature/books/book.Action";
import React, { useState } from "react";
import Modal from '@mui/material/Modal';
// import { useAppSelector } from "@/store/hooks";
import {createBook} from "@/feature/books/book.Action";
import { useRouter } from 'next/navigation'
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';


const styless = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '90%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 1,
  borderRadius:'10px'
};




export default function Page({ params }: { params: { id: string } }) {
  console.log(params);
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const bookId= params.id;
  const dispatch = useAppDispatch();
  const Books = useAppSelector((state) => state.books.books);
  const Book = Books.filter((item) => item.bookId == params.id);
  // const Book= useAppSelector((state) => state.books?.books?.find((params) => params.id === string(bookId)))
  const Title = Book[0]?.title
  const Author = Book[0]?.author
  const Stock = Book[0]?.stock
  const about = Book[0]?.descriptions
  const Category = Book[0]?.category
 
  console.log("Book:",Title, bookId);
 const handleDelete=()=>{
  dispatch(deleteBook(params.id))
 }

 const [title, setTitle] = useState(Title);
 const [author, setAuthor] = useState(Author);
 const [category, setCategory] = useState(Category);
 const [descriptions, setDescriptions] = useState(about);
 const [stock, setStock] = useState(Stock);
 const [isOpen, setIsOpen] = useState(false);
//  const router = useRouter()

//   const Token = useAppSelector(state => state.books)
// console.log("TOKEN",Token);
 const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
  //  console.log("data: ", title, author, category, descriptions, stock);
   event.preventDefault();
   try {
     const data={
       title, author, category, descriptions, stock
     }
     console.log(data,"data😁😁😁😁")
     const res = await dispatch(editBook({bookId,title, author , category, descriptions, stock}))
     setIsOpen(true)
 }catch(error){
   throw error;
 }
 }
 const handleCloseSnackBar = (
  event: React.SyntheticEvent | Event,
  reason?: string
) => {
  if (reason === "clickaway") {
    return;
  }

  setIsOpen(false);
};

  return (
    <>
      <Stack>
        <Box sx={{ width: "100vw",position:"relative" ,overflow:"hidden"}}>
          <Image
            className={styles.cover}
            src={profilePic}
            // objectFit="contain"
            height="100"
            width="100"
            alt=""
          /> 
            </Box>
          <Image
            className={styles.img}
            src={profilePic}
            // objectFit="contain"
            // height="200"
            // width="300"
            alt=""
            />
            <Box  className={styles.title}>

            <Typography  sx={{fontSize:"45px",fontFamily:"Mona Sans", fontWeight:"400", marginBottom:"10px"}}>{Title}</Typography>
            <Stack direction={"row"} gap={2}>
            <Avatar></Avatar>
            <Typography  sx={{fontSize:"25px",fontFamily:"Mona Sans", fontWeight:"400"}}>{Author}</Typography>
            </Stack>
            <Typography  sx={{fontSize:"20px",fontFamily:"Mona Sans", fontWeight:"400"}}>Quantity:{Stock}</Typography>
            </Box>
            <Box className={styles.about}>

            <Typography fontSize={"30px"} fontWeight={400}>ABOUT:</Typography>
            <Typography> {about}</Typography>
            <Box >
            <Stack direction="row" spacing={1} marginTop={2}>
     
              <Chip sx={{marginTop:"15px"}} icon={<ImportContactsIcon />} label={Category} variant="outlined" />
            </Stack>
            {/* <Button  variant="outlined" sx={{marginTop:"20px"}}> {category}</Button > */}
            </Box>

           {/* <Stack direction={"row"} justifyContent={"center"} gap={4} m={2} sx={{width:"500px",marginLeft:"35vw"}} > */}
           <Stack className={styles.btnGroup} direction={"row"} justifyContent={"center"} gap={5} marginTop={4} >

           <button  className={styles.btn} style={{backgroundColor:"#F9E4BC "}} ><AutoStoriesIcon/>  Issued By</button>
           <button  className={styles.btn} onClick={handleOpen} style={{backgroundColor:"#02ccfe"}}><EditIcon/>Edit</button>

           {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
      className="Modal-container"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{width:"1000px", padding:"0"}}
      >
        <Box sx={styless}>
        <div>
      <Stack height={"65vh"}>
        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F">
            Edit Book
          </Typography>
          <form onSubmit={handleSubmit}>
            <Card
              sx={{ width: "100%", height: "45vh", border: "1px solid black" }}
            >
              <CardContent sx={{ m: 4 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Title</label>
                      <TextField
                        size="small"
                        type="text"
                        sx={{ width: "100%", mt: 1 }}
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />

                      <Grid item xs={12}>
                        <label>Category</label>
                        <TextField
                          size="small"
                          sx={{ width: "100%", mt: 1 }}
                          value={category}
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Author</label>
                      <TextField
                        size="small"
                        sx={{ width: "100%", mt: 1 }}
                        value={author}
                        onChange={(e) => {
                          setAuthor(e.target.value);
                        }}
                      />

                      <Grid item xs={12}>
                        <label>Descriptions</label>
                        <TextField
                          size="small"
                          sx={{ width: "100%", mt: 1 }}
                          value={descriptions}
                          onChange={(e) => {
                            setDescriptions(e.target.value);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Stock</label>
                      <TextField
                        size="small"
                        type="number"
                        sx={{ width: "100%", mt: 1 }}
                        value={stock}
                        onChange={(e) => {
                          setStock(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <Button
              type="submit"
              sx={{
                width: "200px",
                bgcolor: "#03103F",
                color: "white",
                mt: 3,
                "&:hover": {
                  bgcolor: "#03103F",
                  color: "white",
                },
              }}
            >
              Save Changes
            </Button>
          </form>
        </Stack>
      </Stack>
    </div>
        </Box>
      </Modal>
            <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleCloseSnackBar}>
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Book Updated Successfully!
        </Alert>
      </Snackbar>





           <button  className={styles.btn} style={{backgroundColor:"#ee6b6e"}} onClick={handleDelete}><DeleteIcon/> Delete</button>
           {/* </Stack> */}

           </Stack>
            </Box>
      
        
        {/* <Image className={styles.cover}> */}
      </Stack>
    </>
  );
}
