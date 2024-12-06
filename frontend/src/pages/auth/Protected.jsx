import React, { useEffect, useState } from "react";
import { fetchUser } from "../../app/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
export default function Protected({ children }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.User);
  //   const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const result = await dispatch(fetchUser()).unwrap();
      //   setUser(result.data); // Make sure you're setting the user from the API result
      console.log(result.user);
    } catch (error) {
      console.log("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
