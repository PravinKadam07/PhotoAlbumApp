import React, { useState } from "react";
import axios from "axios";
import { UPLOAD_IMAGES } from "../constants";
import { useNavigate } from "react-router-dom";

function PhotoUpload() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !category || !image) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${UPLOAD_IMAGES}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/");
    } catch (err) {
      console.error("Error uploading photo:", err);
      setError("Failed to upload photo");
    }
  };

  return (
    <div className="container mx-auto p-4 h-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className=" flex justify-center ">
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <form
            onSubmit={handleUpload}
            className="bg-white p-6 shadow-md rounded-md sm:w-[40vw]"
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-lg">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-lg">
                Category
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-lg">
                Select Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md mt-4"
            >
              Upload Photo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;
