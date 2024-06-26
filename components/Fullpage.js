"use client";
import React, { useState, useEffect } from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Impact from "@/components/Impact";
import Support from "./Support";
import Changelives from "./Changelives";
import Support2 from "./Support-mobile";
import { GrLinkTop } from "react-icons/gr";
import Partner from "../components/Partner";
import Testimony from "@/components/Testimony";
import Footer from "./Footer";
import Scrolltext from "./Scrolltext";
import Campaign from "./Campaign";

function Fullpage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {" "}
      <div className="lg:flex ">
        <Column1 />
        <Column2 />
      </div>
      <Impact />
      <Scrolltext />
      <Campaign />
      <Scrolltext />
      <Support />
      <Support2 />
      <Testimony />
      <Partner />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0 -bottom-1  md:right-3 right-5 m-5 p-3 font-font bg-[#FF521A] rounded-full shadow-md text-[#FFFDF1] hover:bg-[#FFFDF1] hover:text-white transition transform duration-200 ease-in-out z-[200]"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}
    </div>
  );
}

export default Fullpage;
