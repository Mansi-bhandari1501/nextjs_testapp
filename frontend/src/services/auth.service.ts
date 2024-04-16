import { axiosApi } from "../config";

const PATHS = {
  signup: "/api/signup",
  signin: "/api/login",
};

export const register = async (payload:any) => await axiosApi.post(PATHS.signup, payload);
export const login = async (payload:any) => await axiosApi.post(PATHS.signin, payload);