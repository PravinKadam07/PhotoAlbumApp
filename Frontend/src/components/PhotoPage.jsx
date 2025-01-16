import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoGallery from "./PhotoGallery";
import Loader from "./Loader";
import { ALL_IMAGES } from "../constants";
const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${ALL_IMAGES}`);
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching photos:", err);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <PhotoGallery photos={photos} />
    </div>
  );
};

export default PhotoPage;
