"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  const images = [
    "/river.jpg",

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
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
          <motion.span
            className="block"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Creating Hope
          </motion.span>
          <motion.span
            className="block"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            and Igniting
          </motion.span>
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Greatness
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronLeft size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaChevronRight size={28} />
        </motion.button>
      </motion.div>

      <div className="flex justify-center mt-6">
        {images.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full mx-2 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
