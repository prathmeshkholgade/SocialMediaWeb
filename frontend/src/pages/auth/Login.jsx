import { Box, Button, TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Box
        id="outlined-multiline-flexible"
        label=""
        multiline
        maxRows={4}
        className="w-1/2"
      >
        <div className=" w-[80%] p-8 ">
          <div className="py-4 mb-8">
            <h1 className="text-xl text-center">Instagram</h1>
          </div>
          <div className="mb-4 w-full">
            <TextField
              id="outlined-multiline-flexible"
              label="UserName"
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
            <Button variant="contained" className=" w-full">
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
