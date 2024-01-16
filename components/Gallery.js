"use client";
import React, { useState, useEffect } from "react";
import { getGalleryItems } from "@/services/index";
import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";

const Gallery = () => {
  const [data, setData] = useState({ images: [], videos: [] });
  const [activeCategory, setActiveCategory] = useState("images");

  useEffect(() => {
    getGalleryItems().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const switchCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg2">
      <Navbar2 />
      <Mobilebar />{" "}
      <div className="container mx-auto p-4 ">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 ${
              activeCategory === "images"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => switchCategory("images")}
          >
            Images
          </button>
          <button
            className={`px-4 py-2 ${
              activeCategory === "videos"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => switchCategory("videos")}
          >
            Videos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {activeCategory === "images" &&
            data.images.map((image, index) => (
              <div key={index} className=" rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={image.url}
                  alt={`Gallery Image ${index}`}
                />
              </div>
            ))}
          {activeCategory === "videos" &&
            data.videos.map((video, index) => (
              <div key={index} className=" rounded overflow-hidden shadow-lg">
                <video className="w-full" controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
