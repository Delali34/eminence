// components/Sidebar.js
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import MenuLinks from "./MenuLinks";
import { AiOutlineClose } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { MdVolunteerActivism } from "react-icons/md";
import Image from "next/image";

function Sidebar({ isOpen, closeSidebar }) {
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if the sidebar is currently open and if the click was outside of the sidebar
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Cleanup - remove the event listener when the component is unmounted or before re-running the effect
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, closeSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full w-[60%] bg3 transform transition-transform duration-500 ease-in-out opacity-0 overflow-y-auto ${
        isOpen ? "translate-x-0 opacity-100 z-10" : "translate-x-full"
      }`}
    >
      <button onClick={closeSidebar} className="p-2 text-white bg-[#670070] ">
        <AiOutlineClose className="text-2xl" />
      </button>
      <MenuLinks />
      <div className=" p-5 flex flex-col justify-center">
        <div className="">
          <h1 className="text-xl font-bold">Donate Now</h1>
          <p className="mt-3 font-medium bg-white p-4 rounded-lg border-[#531253] border-[1px]">
            Your financial contribution can make a real difference. Every money
            you donate goes directly towards our projects.
          </p>
          <div className=" mt-4">
            <Link
              className="flex animate-bounce items-center gap-2"
              href="/Donate"
            >
              <h1 className="font-bold text-xl">Get Started </h1>
              <RiShareForwardFill />
            </Link>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black " />
        </div>
      </div>
      <div className="p-5 -mt-10">
        <MdVolunteerActivism className="text-6xl text-[#660070]" />
        <div className="mt-5">
          <h1 className="text-xl font-bold">Become A Volunteer</h1>
          <p className="mt-3 font-medium font-maintext bg-white p-4 rounded-lg border-[#531253] border-[1px]">
            Join our team of dedicated Volunteers and actively participate in
            our projects and events. Your time and skills are invaluable
          </p>
          <div className=" mt-4">
            <Link
              className="flex animate-bounce items-center gap-2"
              href="/Volunteer"
            >
              <h1 className="font-bold text-xl">Get Started </h1>
              <RiShareForwardFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
