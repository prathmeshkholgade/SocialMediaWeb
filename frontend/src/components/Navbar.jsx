import React, { useState } from "react";
import CreatePost from "./CreatePost";

export default function Navbar() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imgUrls = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    console.log(imgUrls);
    setSelectedImages((prevImages) => [...prevImages, ...imgUrls]);
    setIsCreateVisible(true);
  };
  return (
    <>
      <div className=" w-full min-h-full border-r-2 flex flex-col border-zinc-600 p-8">
        <div className="logo py-6">
          <p className="text-xl">Instagram</p>
        </div>
        <div className="links flex-grow">
          <ul className="flex flex-col gap-6">
            <li>Home</li>
            <li>Profile</li>
            <li className="cursor-pointer hover:underline">
              <label htmlFor="imageUpload" className="cursor-pointer">
                Create
              </label>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notification</li>
          </ul>
        </div>
        <div className="more mt-4">
          <p>More</p>
        </div>
      </div>
      {/* <div className="bg-red-400"> */}

      {isCreateVisible && (
        <CreatePost
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          setIsCreateVisible={setIsCreateVisible}
        />
      )}
      {/* </div> */}
    </>
  );
}
