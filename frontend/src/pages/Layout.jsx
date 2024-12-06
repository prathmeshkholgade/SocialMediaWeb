import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function Layout() {
  const user = useSelector((state) => state.user.User);
  const isLoggedIn = !!user;
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        // Layout when user is logged in
        <div className="min-h-screen flex">
          <div className="fixed top-0 left-0 h-full w-[15%]">
            <Navbar />
          </div>
          <div className="flex-grow ml-[15%] overflow-y-auto">
            <Outlet />
          </div>
          <div className="bg-red-100 w-[20%]">footer</div>
        </div>
      ) : (
        // Layout when user is not logged in
        <div className="min-h-screen flex justify-center items-center">
          <Outlet />
        </div>
      )}
    </>
  );
}
