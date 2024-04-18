import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createBook } from "./book.Action";

export interface book {
  uuId?: string
  title?: string
  descriptions?: string
  category?: string
  stock?: string
  author?: string
  
  // tag?: string
}
interface actionData{
  data:book
}
type initialData = {
  loading: Boolean,
  error: any | undefined,
  success: Boolean,
  books: book[]
}
const initalState:initialData = {
  loading: false,
  books: [],
  error: null,
  success: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initalState,
  reducers: {
    addNewBook: (state, action: PayloadAction<book>) => {
      state.books.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    //register user
    builder.addCase(createBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBook.fulfilled, (state, action) => {
      state.loading = false;
      // const data = payload.data.Books;
      // state.books.push(data)
      // console.log("jgjwgfuags",state.books)
      // state.success = true;
      // console.log(payload, "gerh4")
      // console.log(payload.data.Books, "gerh4")
      const data: object  = action?.payload?.data?.Books
      console.log('useSlice data', data)
      if (data !== undefined) {
              state.books= [...state.books,data]
            }
            console.log( state.books)
      state.loading = false;
    });
    builder.addCase(createBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });
    //
  


    // builder.addCase(updateUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(updateUser.fulfilled, (state, action) => {
    //   console.log("slice", action.payload.data.user);
    //   state.loading = false;
    //   state.success = true;
    //   state.userInfo = action.payload.data.user;
    // });
    // builder.addCase(updateUser.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });



  },
});

export default bookSlice.reducer;