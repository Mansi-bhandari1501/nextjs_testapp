import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./auth.Action";

interface initialStateProps {
    loading: boolean
    userInfo: object
    userToken:string
    error: number | null
    success:boolean
    
}

const initalState:initialStateProps = {
  loading: false,
  userInfo: {},
  userToken:'',
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    //register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, {payload}:any) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state,{payload}:any) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    });
    //
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}:any) => {
      state.loading = false;
      state.success = true;
      console.log("loginUserfullfilled",payload.data.user)
      state.userInfo = payload.data.user;
      state.userToken = payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, {payload}:any) => {
      state.loading = true;
      state.success = false;
      state.error = payload;
    });
   


  },
});

export default authSlice.reducer;