"use client";
import React from "react";
import Navbar from "@/components/Navbar2";
import Hero from "./Hero";
import Mobilebar from "./Mobilebar";

function Column2() {
  return (
    <div className="animated-gradient  w-full relative">
      <Navbar />

      <Hero />

      <style jsx global>{`
        @keyframes gradient {
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

        .animated-gradient {
          background: linear-gradient(
            -45deg,
            #ffffff,
            #e6e6fa,
            #d8bfd8,
            #dda0dd
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Column2;
