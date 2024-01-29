"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useInView } from "react-intersection-observer";

const Stories = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targets = [34620, 9300, 2010];
  const increments = [500, 300, 50];
  const durations = [25, 80, 40];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const intervals = [];

      targets.forEach((target, index) => {
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCount = Math.min(
              prevCounts[index] + increments[index],
              target
            );
            if (newCount === target) clearInterval(intervals[index]);
            return [
              ...prevCounts.slice(0, index),
              newCount,
              ...prevCounts.slice(index + 1),
            ];
          });
        }, durations[index]);
      });

      setHasAnimated(true);

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);
  const images = ["/school2.jpg", "/Play.jpg", "/water.jpg"];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className=" bg-[#FFFDF1] lg:p-10 px-3 pb-3">
      <div className="max-w-7xl mx-auto pt-16 ">
        {" "}
        <h1 className="lg:text-6xl text-4xl text-center font-header font-bold mb-20">
          Stories of Hope and Transformation
        </h1>
        <div className="flex justify-center  items-center mb-10">
          <button
            onClick={nextImage}
            className="w-[50px] p-1 bg-white hover:bg-[#FF521A] duration-200 border-black border-2 -mr-5 z-10"
          >
            <GrFormPreviousLink className="text-4xl" />
          </button>
          <div className="relative">
            <Image
              width={1000}
              height={800}
              src={images[currentImageIndex]}
              alt="Volunteers"
              className="rounded-lg  object-cover lg:w-[1000px] lg:h-[600px] shadow-black shadow-lg"
            />
          </div>
          <button
            onClick={nextImage}
            className="w-[50px] p-1 bg-white hover:bg-[#FF521A] duration-200 border-black border-2 -ml-5 z-10"
          >
            <GrFormNextLink className="text-4xl" />
          </button>
        </div>
        <div
          ref={ref}
          className="max-w-5xl font-header mx-auto grid md:grid-cols-3 grid-cols-1  gap-4 pt-10"
        >
          <div>
            <h2 className="text-5xl font-bold text-center">
              {counts[0]}
              <span className="txet-3xl">+</span>
            </h2>
            <h1 className="text-center font-bold text-xl py-2">
              Educational Advancement
            </h1>
            <p className="text-center font-maintext">
              Includes the empowerment and impact achieved through educational
              programs across various levels and disciplines.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-center">{counts[1]}+</h2>
            <h1 className="text-center font-bold text-xl py-2">
              Community and Social Development
            </h1>
            <p className="text-center font-maintext">
              Highlights the impact on community development, women's enterprise
              support, and youth leadership.
            </p>
          </div>
          <div className="pb-5">
            <h2 className="text-5xl font-bold text-center">{counts[2]}+</h2>
            <h1 className="text-center font-bold text-xl py-2">
              Economic Empowerment{" "}
            </h1>
            <p className="text-center font-maintext">
              Focuses on the enhancement of economic opportunities and corporate
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
