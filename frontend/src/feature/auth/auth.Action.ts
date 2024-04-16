import { createAsyncThunk } from "@reduxjs/toolkit";
import { register,login} from "../../services/auth.service";
import { ACTION_TYPE } from "./auth.ActionType";

import axios from 'axios'
export const  registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async (data:{ name:string,email:string, password:string,role:string}) => {
    console.log("service data",data)
    try {
      const res = await register({data})
      console.log(res,"resulttt")
      return res
    } catch (error) {
        throw error
    }
  }
);
export const loginUser = createAsyncThunk(
 ACTION_TYPE.SIGN_IN,
  async (data:{ email:string, password:string}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await login({data})
      console.log("action res", res);
      return res;
    } catch (error) {
        throw error
    }
  }
);

