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
// export const getAllExam = createAsyncThunk(
//   ACTION_TYPE.GET_ALL_EXAM,
//     async ( {token},{ rejectWithValue }) => {
//       try {
//         console.log("sdddd",token)
//         const config = {
//           headers: {
//             Authorization: token,
//           },
//         };
  
//         const response = await axios.get("http://localhost:8000/exam/getAllExams",config);
//         console.log("message",response)
//         return response
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   );
