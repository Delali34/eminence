import React from "react";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";
import Teams from "@/components/Team";

function page() {
  return (
    <div>
      <Navbar />
      <Mobilebar />
      <AboutUs />
      <Teams />
    </div>
  );
}

export default page;
