import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'
import { ACTION_TYPE } from "./book.Type";


export interface errorResponse {
    statusCode?: number;
    message?: string;
  }
  let error: errorResponse = {
    statusCode: 404,
    message: "Network error, Please try again",
  };
export const createBook = createAsyncThunk(
ACTION_TYPE.ADD_BOOK,
  async (data:{ title:string,stock:string,category:string,author:string,descriptions:string}, {getState, rejectWithValue }) => {
    try {
      let state:any = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
     console.log(data)
      const response = await axios.post("http://localhost:8080/books",{data},config);
      console.log("message",response)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllBook = createAsyncThunk(
ACTION_TYPE.GET_ALL_BOOK,
  async (data:{ title:string,stock:string,category:string,author:string,descriptions:string}, {getState, rejectWithValue }) => {
    try {
      let state:any = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
    //  console.log(data)
      const response = await axios.get("http://localhost:8080/books",config);
      console.log("message",response.data.Books)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteBook = createAsyncThunk(
ACTION_TYPE.DELETE_BOOK,
  async ( bookId:string, {getState, rejectWithValue }) => {
    try {
      let state:any = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
     console.log(bookId)
      const response = await axios.delete(`http://localhost:8080/books/${bookId}`,config);
      console.log("message",response.data.Books)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
export const editBook = createAsyncThunk(
ACTION_TYPE.EDIT_BOOK,
  async ( data:{ bookId:string,title:string,stock:string,category:string,author:string,descriptions:string}, {getState, rejectWithValue }) => {
    try {
      let state:any = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
     console.log(data)
      const response = await axios.put(`http://localhost:8080/books/${data.bookId}`,{data},config);
      console.log("message",response)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
