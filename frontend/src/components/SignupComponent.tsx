"use client"
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
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
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'
import { registerUser } from "@/feature/auth/auth.Action";
const SignupComponent = () => {
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
        console.log(data)
        const {name,email,password,role} = data
    
        try {
          const res = await dispatch(registerUser({name,email,password,role}))
          if(!res.payload) {
            // add snackbar showing wrong credentials
            alert("Error in registering user")
    
            // navigate("/Login");
        }
          if (res.payload) router.push("/login");
        }
        catch(error){
          
          alert(error)
        }
        
        // reset();
      };
  return (
    <Stack sx={{ width: "30%", justifyContent: "center" } }>
    <Card>
      <CardContent sx={{ mb: 6 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={"20px"}>
            <Stack width={"100%"} alignItems={"center"}>
              <h1>Sign up</h1>
            </Stack>
            <Stack width={"100%"} alignItems={"center"}>
              <TextField
                label="Name"
                type="text"
                {...register("name", {
                  required: "Name is requried",
                })}
                sx={{ width: "80%" }}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
              )}
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
              <TextField
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords must match",
                })}
                label="Confirm Password"
                type="password"
                required
                sx={{ width: "80%" }}
              />
              {errors.confirmPassword && (
                <p
                  style={{ color: "red" }}
                >{`${errors.confirmPassword.message}`}</p>
              )}
            </Stack>
           <Stack alignItems={"center"}>

            <FormControl sx={{width:"80%" }} >
      <InputLabel variant='outlined' size="small" id="demo-simple-select-label">Role</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...register("role", {
          required: "Role is requried",
        })}
        label="Role"
      >
        <MenuItem value={"user"}>User</MenuItem>
        <MenuItem value={"admin"}>Admin</MenuItem>
      </Select>
    </FormControl>
           </Stack>
            <Stack width={"100%"} alignItems={"center"}>
              <Button
                type="submit"
                sx={{ width: "80%" }}
                // disabled={isSubmitting}
                variant="contained"
              >
                Submit
              </Button>
              
            </Stack>
          <Link href={"/login"}>

              <Typography sx={{ ml: 6 }}>Already User</Typography>
          </Link>
          </Stack>
        </form>
      </CardContent>
    </Card>
  </Stack>

  )
}

export default SignupComponent
