"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFileVideo } from "react-icons/fa";

function Hero() {
  const images = [
    "/river.jpg",
    "/bill-wegener-7MD4DR9jbP0-unsplash.jpg",
    "/annie-spratt-2rMn97DPTdU-unsplash.jpg",
    "/education.jpg",
    "/community.jpg",
    "/rights.jpg",
    "/gender.jpg",
    "/human.jpg",
    "/part.jpg",
    "/environment.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="max-w-6xl mx-auto lg:px-10 px-4 lg:pb-10 lg:mt-10">
      <div>
        <h1 className="lg:text-[130px] md:text-[105px] text-[50px] pt-10 lg:leading-[140px] text-center lg:text-left  font-maintext font-extrabold text-white">
          <span className="lg:tracking-wider tracking-wide">Creating Hope</span>

          <span className="lg:tracking-wider tracking-wide"> and Igniting</span>
          <br />
          <div className="flex items-center justify-center lg:justify-between">
            <span className="tracking-wider ">Greatness </span>
          </div>
        </h1>
      </div>
      <div className="mt-10 relative h-[500px]">
        {images.map((image, index) => (
          <Image
            key={image}
            className={`lg:h-[500px] h-[300px] md:h-[450px] object-cover rounded-lg transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            } absolute top-0`}
            width={1500}
            height={500}
            src={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
