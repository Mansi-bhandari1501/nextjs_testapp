import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import authReducer from "../feature/auth/auth.slice"
import booksReducer from "../feature/books/book.Slice"
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
//Noop storage function
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
//setting up the storage
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["attendanceListReducer"],
};
const rootReducer = combineReducers({
  auth:authReducer,
  books:booksReducer,
  
 
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
export const appStore = store();
export const persistor = persistStore(appStore);
export type AppStore = typeof appStore;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
