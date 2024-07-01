"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center px-4"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              yoyo: Infinity,
              ease: "easeInOut",
            }}
          >
            Creating Hope and Igniting{" "}
            <span className="text-transparent bg-clip-text animate-gradient-text">
              Greatness
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Empowering communities and transforming lives through innovative
            solutions and compassionate action.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full mx-2 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-text {
          background-size: 300% 300%;
          background-image: linear-gradient(
            45deg,
            #ff00cc,
            #3333ff,
            #00ff99,
            #ff9933
          );
          animation: gradient-text 6s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
