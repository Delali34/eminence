import React from "react";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";

function page() {
  return (
    <div>
      <Navbar />
      <Mobilebar />
      <AboutUs />
    </div>
  );
}

export default page;
