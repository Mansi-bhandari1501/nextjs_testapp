"use client";
import React, { useState } from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch,useAppSelector } from "@/store/hooks";
import {createBook} from "@/feature/books/book.Action";
import { useRouter } from 'next/navigation'


const AddExam = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [stock, setStock] = useState("");
  
  const router = useRouter()
  const dispatch = useAppDispatch();
//   const Token = useAppSelector(state => state.books)
// console.log("TOKEN",Token);
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    console.log("data: ", title, author, category, descriptions, stock);
    event.preventDefault();
    try {
      const data={
        title, author, category, descriptions, stock
      }
      const res = await dispatch(createBook({title, author, category, descriptions, stock}))
     
  }catch(error){
    throw error;
  }
  }
  //  const token =localStorage.getItem('auth')
  // console.log(token)
  return (
    <div>
      <Stack height={"65vh"}>
        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F">
            New Book
          </Typography>
          <form onSubmit={handleSubmit}>
            <Card
              sx={{ width: "100%", height: "65vh", border: "1px solid black" }}
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
              Add
            </Button>
          </form>
        </Stack>
      </Stack>
    </div>
  );
};

export default AddExam;
