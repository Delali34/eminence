"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Mobilebar from "./Mobilebar";

function Column2() {
  return (
    <div className="bg lg:w-[75%] w-full relative">
      <Navbar />
      <Mobilebar />
      <Hero />

      <div></div>
    </div>
  );
}

export default Column2;
