import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../app/features/user/userSlice";
export default function Login() {
  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await dispatch(signUpUser(data));
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Box
        id="outlined-multiline-flexible"
        component={"form"}
        label="UserName"
        onSubmit={handleSubmit(onSubmit)}
        multiline
        maxRows={4}
        className="w-1/2"
      >
        <div className=" w-[80%] p-8 ">
          <div className="py-4 mb-8">
            <h1 className="text-4xl text-center">Instagram</h1>
          </div>
          <div className="mb-4 w-full">
            <TextField
              id="outlined-multiline-flexible"
              label="FullName"
              {...register("name", { required: { value: true } })}
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
              label="UserName"
              {...register("username", { required: { value: true } })}
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
          <div className="mb-4">
            <TextField
              id="outlined-multiline-flexible"
              label="email"
              {...register("email", { required: { value: true } })}
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
          <div className="mb-2">
            <TextField
              id="outlined-multiline-flexible"
              label="Password"
              {...register("password", { required: { value: true } })}
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
              SignUp
            </Button>
          </div>
          <div className="text-center my-2">
            <p>Already Have Account Login ?</p>
          </div>
        </div>
      </Box>
    </div>
  );
}
