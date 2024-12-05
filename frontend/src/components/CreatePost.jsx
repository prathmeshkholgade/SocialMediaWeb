import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPost } from "../app/features/post/postSlice";
import { useNavigate } from "react-router";

export default function CreatePost({
  selectedImages,
  setSelectedImages,
  setIsCreateVisible,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitPost = () => {};
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("caption", data.caption);
      selectedImages.forEach((img, idx) => {
        formData.append("image", img.file);
      });
      const res = await dispatch(createPost(formData)).unwrap();
      setIsCreateVisible(false);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h3 className="text-lg font-semibold mb-4 text-black">Create a Post</h3>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={`Selected ${index}`}
                    className="w-full  h-32 object-right-top object-cover rounded"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-sm px-2 py-1 rounded"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          <textarea
            placeholder="What's on your mind?"
            {...register("caption", { required: { value: true } })}
            className="w-full h-24 p-2 border border-gray-300 rounded mb-4 text-black"
          ></textarea>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setSelectedImages([]);
                setIsCreateVisible(false);
              }}
              className="px-4 py-2 bg-gray-300  rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              // onClick={handleSubmitPost}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
