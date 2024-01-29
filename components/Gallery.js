"use client";
import React, { useState, useEffect } from "react";
import { getGalleryItems } from "@/services/index";
import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";
import Image from "next/image";

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

        <div className="flex-wrap grid md:grid-cols-2 grid-cols-1 place-items-center gap-4">
          {activeCategory === "images" &&
            data.images.map((image, index) => (
              <div key={index} className=" rounded overflow-hidden shadow-lg">
                <Image
                  className=" md:h-[800px] md:w-[800px] h-[500px] w-[500px] object-cover"
                  width={1000}
                  height={1000}
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
