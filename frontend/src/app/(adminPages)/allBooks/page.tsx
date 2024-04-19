"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
// import { BookCard } from '@/components/card';
import BookCard from "@/components/card";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import bookSlice, { book } from "@/feature/books/book.Slice";
import { getAllBook } from "@/feature/books/book.Action";
const AllBooks = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const res = dispatch(getAllBook());
  }, [dispatch]);

  const Books = useAppSelector((state) => state.books.books);

  console.log(Books);
  return (
    <Stack direction={"row"} gap={3} height={5} flexWrap={"wrap"} width={"90vw"} margin={10}>
      {Books.length === 0 && <>No book present</>}
      {Books.map((item: book, index: number) => {
        console.log(item?.author,"ITEM");
        return (
          <div key={index}>
            <BookCard
              bookId={item?.bookId}
              title={item?.title}
              stock={item?.stock}
              category={item?.category}
              descriptions={item?.descriptions}
              author={item?.author}
            />
          </div>
        );
      })}
    </Stack>
  );
};

export default AllBooks;
