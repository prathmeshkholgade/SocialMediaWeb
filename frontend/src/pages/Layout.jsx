import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex">
      <div className="fixed top-0 left-0 h-full w-[15%] ">
        {" "}
        <Navbar />
      </div>
      <div className="flex-grow ml-[15%] overflow-y-auto">
        <Outlet />
      </div>
      <div className="bg-red-100 w-[20%]">footer</div>
    </div>
  );
}
