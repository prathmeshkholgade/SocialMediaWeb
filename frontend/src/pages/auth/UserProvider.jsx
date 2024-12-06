import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../app/features/user/userSlice";

export default function UserProvider({ children }) {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchUser());
  }, [disptach]);
  return <div>{children}</div>;
}
