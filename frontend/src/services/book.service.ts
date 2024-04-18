import axios from 'axios'

export const BASE_URL = 'http://localhost:8080'
console.log(BASE_URL)
export const axiosApi =  axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

const PATHS = {
  addBooks: "/api/addBooks",
};

export const createBook = async (payload:any) => await axiosApi.post(PATHS.addBooks, payload);