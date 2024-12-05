import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allpost } from "../app/features/post/postSlice";
import PostComponent from "../components/PostComponent";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.Post);

  useState(() => {
    const getData = async () => {
      try {
        const res = await dispatch(allpost()).unwrap();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [dispatch]);

  return (
    data && (
      <div className="container mt-8 -z-50 ">
        {data.map((data) => (
          <PostComponent data={data} />
        ))}
      </div>
    )
  );
}
