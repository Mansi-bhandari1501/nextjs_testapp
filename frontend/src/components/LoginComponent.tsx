"use client"
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import Link from 'next/link'
  import { useRouter } from 'next/navigation'
  import { useForm } from "react-hook-form";
  import { loginUser } from "@/feature/auth/auth.Action";
import { useAppDispatch } from "@/store/hooks";
  
const LoginComponent = () => {
    const router = useRouter()  
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
      } = useForm();

      const onSubmit = async (data:any) => {
        const {email,password} = data
        console.log("credentials",email,password)
        try {
            const res = await dispatch(loginUser({email,password}))
            if(!res.payload) {
              // add snackbar showing wrong credentials
              alert("Error in registering user")
      
              // navigate("/Login");
          }
            if (res.payload) router.push("/dashboard");
          }
          catch(error){
            
            alert(error)
          }
          
          reset();
        };
  return (
    <Stack sx={{ width: "30%", justifyContent: "center" }}>
    <Card>
      <CardContent sx={{ mb: 6 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={"20px"}>
            <Stack width={"100%"} alignItems={"center"}>
              <h1>Log In</h1>
            </Stack>
           
            <Stack width={"100%"} alignItems={"center"}>
              <TextField
                label="Email"
                type="email"
                {...register("email", {
                  required: "Email is requried",
                })}
                sx={{ width: "80%" }}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
              )}
            </Stack>
            <Stack width={"100%"} alignItems={"center"}>
              <TextField
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is requried",
                  minLength: {
                    value: 10,
                    message: "Password must atleast 10 character",
                  },
                })}
                sx={{ width: "80%" }}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{`${errors.password.message}`}</p>
              )}
            </Stack>
            
           
            <Stack width={"100%"} alignItems={"center"}>
              <Button
                type="submit"
                sx={{ width: "80%" }}
                disabled={isSubmitting}
                variant="contained"
              >
                Submit
              </Button>
            </Stack>
            <Link href={"/signup"}>
              <Typography sx={{ ml: 6 }}>Create New Account</Typography>
            </Link>
          </Stack>
        </form>
      </CardContent>
    </Card>
  </Stack>
  )
}

export default LoginComponent
