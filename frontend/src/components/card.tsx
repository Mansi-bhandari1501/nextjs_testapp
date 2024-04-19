import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Box } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import profilePic from "../../public/cover1.jpg";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./card2.css";
interface props {
  bookId: string;
  title: string;
  stock: string;
  category: string;
  descriptions: string;
  author: string;
}

export default function BookCard(props: props) {
  console.log(props);
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
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
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
            <Box sx={{marginRight:"12px"}}>

            <EditIcon
              onClick={() => {
                console.log("gduhfcaf");
              }}
              // sx={{ marginRight: "12px" }}
            />
            <DeleteIcon
              onClick={() => {
                console.log("gduhfcaf");
              }}
              // sx={{ marginRight: "12px" }}
            />
            </Box>
          </Stack>

          {/* <Typography variant="body2" color="text.secondary">
            {props.stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.author}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
