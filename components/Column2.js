"use client";
import React from "react";
import Navbar from "@/components/Navbar2";
import Hero from "./Hero";
import Mobilebar from "./Mobilebar";

function Column2() {
  return (
    <div className="bg  w-full relative">
      <Navbar />

      <Hero />

      <div></div>
    </div>
  );
}

export default Column2;
