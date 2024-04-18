"use client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { BookCard } from '@/components/card';
import BookCard from '@/components/card'
import React from 'react'
import { useAppSelector } from "@/store/hooks";
import Image from 'next/image'
const AllBooks = () => {
    const Books:book[] = useAppSelector(state => state.books.books)
console.log(Books)
  return (
    // {Books.length === 0 && <>No new posts's</>}
    <div>
      { }
    </div>
      {/* {Books.map((item) => (
        return(
  
          <BookCard
          Books={item.Books}
          /> 
        )
    ))} */}

  );
}

export default AllBooks
