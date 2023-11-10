"use client";
import React, { useState, useEffect } from "react";
import MenuLinks from "./MenuLinks";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean-up function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="max-w-6xl sticky-navbar bg-[#fffdf1] mx-auto font-maintext flex items-center justify-between py-4 px-10 lg:hidden ">
      <div>
        <Link href="/">
          <Image width={50} height={50} src="/EMINENCE.jpg" />
        </Link>
      </div>
      <button onClick={() => setIsOpen(true)} className="text-[#670070]">
        <RxHamburgerMenu className="text-3xl font-extrabold" />
      </button>
      {isOpen && (
        <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Navbar;
