import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Box, Modal,TextField ,Button} from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import profilePic from "../../public/cover1.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./card2.css";
import { deleteBook, editBook } from "@/feature/books/book.Action";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import Grid from "@mui/material/Grid";

interface props {
  bookId: string;
  title: string;
  stock: string;
  category: string;
  descriptions: string;
  author: string;
}

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


export default function BookCard(props: props) {
  // console.log(props);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [category, setCategory] = useState(props.category);
  const [descriptions, setDescriptions] = useState(props.descriptions);
  const [stock, setStock] = useState(props.stock);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    console.log("deleted");
    dispatch(deleteBook(props.bookId));
    setOpen(true);

  };
const bookId =props.bookId
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    //  console.log("data: ", title, author, category, descriptions, stock);
     event.preventDefault();
     try {
       const data={
         title, author, category, descriptions, stock
       }
       console.log(data,"DATAATA")
       const res = await dispatch(editBook({bookId,title, author, category, descriptions, stock}))
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
    // <Link key={props.bookId} href={`/allBooks/${props.bookId}`}>

    <Card
      key={props.bookId}
      sx={{
        maxWidth: 345,
        maxHeight: 600,
        minHeight: 200,
        boxShadow: "0 0 30px #aaa",
        "&:hover": {
          fontSize: "35px",
          position: "relative",
          left: "-.1cm",
          top: "-0.1cm",
          float: "right",
          // backgroundImage:" linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))",
          transition: "opacity .2s",
          transitionTimingFunction: "ease-in-out",
        },
      }}
    >
      <CardActionArea
        sx={{ width: "100%", height: 400, transition: "height 5s width 2s" }}
      >
        {/* <CardMedia
          component="img"
          height="140"
          image="/public/cover1.jpg"
          alt="green iguana"
        /> */}
        <Link key={props.bookId} href={`/allBooks/${props.bookId}`}>
          <CardMedia title={props.title}>
            <div
              style={{
                width: "90%",
                border: "3px solid gray",
                height: "80%",
                overflow: "hidden",
                margin: "10px",
              }}
            >
              <Image
                src={profilePic}
                objectFit="contain"
                height="300"
                width="200"
                alt="Picture of the author"
              />
            </div>
          </CardMedia>
        </Link>
        {/* <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /> */}
        <CardContent sx={{ padding: "0px", marginLeft: "10px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="FontAwesome"
                fontSize="25px"
                margin="0px"
                width="150px"
                sx={{
                  color: "black",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {props.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontFamily="FontAwesome"
                fontSize="15px"
                margin="0px"
              >
                {props.author}
              </Typography>
            </Box>
            <Box sx={{ marginRight: "12px" , display:"flex", flexWrap:"wrap"}}>
              
              
              <IconButton sx={{padding:0}}> 

              <EditIcon
                onClick={handleOpen}
                // sx={{ marginRight: "12px" }}
              />
              </IconButton>
              <IconButton sx={{padding:0}}> 
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
              <DeleteIcon
                onClick={handleDelete}
                // sx={{ marginRight: "12px" }}
              />
               </IconButton>
             <Snackbar isOpen={open} autoHideDuration={2000} onClose={handleCloseSnackBar}>
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Book Deleted Successfully!
        </Alert>
      </Snackbar>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
