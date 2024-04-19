"use client";
import { useAppSelector ,useAppDispatch} from "@/store/hooks";
import { Stack, Box, Typography, Avatar, Button } from "@mui/material";
import styles from "./styles.module.css";
import profilePic from "../../../../../public/cover1.jpg";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Chip from '@mui/material/Chip';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { deleteBook } from "@/feature/books/book.Action";

export default function Page({ params }: { params: { id: string } }) {
  console.log(params);
  const bookId= params.id;
  const dispatch = useAppDispatch();
  const Books = useAppSelector((state) => state.books.books);
  const Book = Books.filter((item) => item.bookId == params.id);
  // const Book= useAppSelector((state) => state.books?.books?.find((params) => params.id === string(bookId)))
  const Title = Book[0].title
  const author = Book[0].author
  const stock = Book[0].stock
  const about = Book[0].descriptions
  const category = Book[0].category
  console.log("Book:",bookId);
 const handleDelete=()=>{
  dispatch(deleteBook(params.id))
 }



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
            <Typography  sx={{fontSize:"25px",fontFamily:"Mona Sans", fontWeight:"400"}}>{author}</Typography>
            </Stack>
            <Typography  sx={{fontSize:"20px",fontFamily:"Mona Sans", fontWeight:"400"}}>Quantity:{stock}</Typography>
            </Box>
            <Box className={styles.about}>

            <Typography fontSize={"30px"} fontWeight={400}>ABOUT:</Typography>
            <Typography> {about}</Typography>
            <Box >
            <Stack direction="row" spacing={1} marginTop={2}>
     
              <Chip sx={{marginTop:"15px"}} icon={<ImportContactsIcon />} label={category} variant="outlined" />
            </Stack>
            {/* <Button  variant="outlined" sx={{marginTop:"20px"}}> {category}</Button > */}
            </Box>

           {/* <Stack direction={"row"} justifyContent={"center"} gap={4} m={2} sx={{width:"500px",marginLeft:"35vw"}} > */}
           <Stack  direction={"row"} justifyContent={"center"} gap={5} marginTop={4} >

           <button  className={styles.btn} style={{width:"150px",backgroundColor:"#F9E4BC "}} ><AutoStoriesIcon/>  Issued By</button>
           <button  className={styles.btn} style={{width:"150px",backgroundColor:"#02ccfe"}}><EditIcon/>Edit</button>
           <button  className={styles.btn} style={{width:"150px",backgroundColor:"#ee6b6e"}} onClick={handleDelete}><DeleteIcon/> Delete</button>
           {/* </Stack> */}

           </Stack>
            </Box>
      
        
        {/* <Image className={styles.cover}> */}
      </Stack>
    </>
  );
}
