



import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createBook, getAllBook,deleteBook ,editBook} from "./book.Action";

export interface book {
  id?:number
  bookId?: string
  title?: string
  descriptions?: string
  category?: string
  stock?: string
  author?: string
  // tag?: string
}
// interface actionData{
//   data:book
// }
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
    builder.addCase(getAllBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBook.fulfilled, (state, action) => {
      state.loading = false;
    
      const data: object  = action?.payload?.data?.Books
      // console.log('useSlice data', data)
      if (data !== undefined) {
              state.books= data;
            }
            // console.log( state.books)
      state.loading = false;
    });
    builder.addCase(getAllBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });


    builder.addCase(deleteBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.loading = false;
      const data: object  = action?.payload.data?.Books?.bookId
      console.log('useSlice data', data)

        const newBooks = state.books.filter((item) => {
             return item.bookId !== data
        })
        state.books = newBooks
        console.log("NEWREQQQ",newBooks)
        console.log( state.books);
        state.loading = false;
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });

    builder.addCase(editBook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editBook.fulfilled, (state, action) => {
      // state.loading = false;
      // const data: object  = action?.payload.data?.Books?.bookId
      // console.log('useSlice data', data)

      //   const newBooks = state.books.filter((item) => {
      //        return item.bookId !== data
      //   })
      //   state.books = newBooks
      //   console.log("NEWREQQQ",newBooks)
      //   console.log( state.books);
      //   state.loading = false;
      // const { id, title, content } = action.payload
      // const existingPost = state.find(post => post.id === id)
      // if (existingPost) {
      //   existingPost.title = title
      //   existingPost.content = content
      // }
      console.log("EDITED DATA",action?.payload.data?.Books)
    });
    builder.addCase(editBook.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action;
    });
        }

  },
);

export default bookSlice.reducer;