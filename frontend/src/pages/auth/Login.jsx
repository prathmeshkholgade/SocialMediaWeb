import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../app/features/user/userSlice";
import { useNavigate } from "react-router";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const disptach = useDispatch();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await disptach(loginUser(data)).unwrap();
      console.log(res);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center  w-1/2">
      <Box
        component={"form"}
        id="outlined-multiline-flexible"
        label=""
        onSubmit={handleSubmit(onSubmit)}
        maxRows={4}
        className="w-2/3"
      >
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div className=" w-[80%] p-8 ">
          {/* <form > */}
          <div className="py-4 mb-8">
            <h1 className="text-xl text-center">Instagram</h1>
          </div>
          <div className="mb-4 w-full">
            <TextField
              id="outlined-multiline-flexible"
              label="UserName"
              {...register("username", { required: { value: true } })}
              className="text-white w-full rounded-lg"
              sx={{
                backgroundColor: "#242424",
                "& .MuiInputBase-input": {
                  color: "#f9f9f9", // Text color inside the input
                },
                "& .MuiInputLabel-root": {
                  color: "#f9f9f9", // Label color
                },
              }}
              multiline
              maxRows={4}
            />
          </div>
          <div className="mb-4">
            <TextField
              id="outlined-multiline-flexible"
              label="Password"
              {...register("password", {
                required: { value: true, message: "enter password" },
              })}
              className="text-white  w-full rounded-lg"
              sx={{
                backgroundColor: "#242424",
                "& .MuiInputBase-input": {
                  color: "#f9f9f9", // Text color inside the input
                },
                "& .MuiInputLabel-root": {
                  color: "#f9f9f9", // Label color
                },
              }}
              multiline
              maxRows={4}
            />
          </div>

          <div>
            <Button type="submit" variant="contained" className=" w-full">
              Login
            </Button>
          </div>

          <div className="text-center my-2">
            <p>Forgot Passport ?</p>
          </div>
        </div>
      </Box>
    </div>
  );
}
