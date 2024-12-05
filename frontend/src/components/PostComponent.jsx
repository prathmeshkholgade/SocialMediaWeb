import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import SendIcon from "@mui/icons-material/Send";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function PostComponent({ data }) {
  const [currImg, setCurrImg] = useState(0);
  console.log(data);
  const nextImage = () => {
    if (data.image.length > 1) {
      setCurrImg((prevIndex) => (prevIndex + 1) % data.image.length);
    }
  };
  const previousImage = () => {
    if (data.image.length > 1) {
      setCurrImg((prevIndex) =>
        prevIndex === 0 ? data.image.length - 1 : prevIndex - 1
      );
    }
  };
  console.log(data);
  return (
    data && (
      <div className=" w-[40%] mx-auto p-2 -z-50">
        <div className="user flex items-center p-4">
          <div className="userprofilePic w-10 h-10 bg-gray-400 rounded-full"></div>
          <div className="username ml-4">{data.user.username}</div>
        </div>
        <div className="relative">
          {/* {data.image.map((img) => { */}
          <img
            src={data.image[currImg].imgUrl}
            alt="image"
            className="w-full h-96 object-cover"
          />
          {/* })} */}
          {data.image.length > 1 && (
            <div className="absolute w-full top-[50%] flex justify-between">
              <div
                className="bg-gray-300 w-8 h-8 text-center rounded-full cursor-pointer"
                onClick={previousImage}
              >
                <ChevronLeftIcon />
              </div>
              <div
                className="bg-gray-300 w-8 h-8 text-center rounded-full cursor-pointer"
                onClick={nextImage}
              >
                <ChevronRightIcon />
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-4 py-2">
          <FavoriteBorderIcon />
          <MapsUgcIcon />
          <SendIcon />
        </div>
        <div>
          {data.caption}
        </div>
      </div>
    )
  );
}
