import React from "react";
import Link from "next/link";

function navbar() {
  return (
    <div className=" max-w-6xl mx-auto lg:flex hidden font-maintext items-center justify-between pt-10 px-10  ">
      <div className="text-white   flex items-center space-x-10 text-xl font-semibold">
        <Link href="/AboutUs">
          <h1 className="hover:text-[#FFE353] duration-300">About Us</h1>
        </Link>
        <Link href="/Programs">
          <h1 className="hover:text-[#FFE353] duration-300">Programs</h1>
        </Link>
        <Link href="/Contact">
          <h1 className="hover:text-[#FFE353] duration-300">Contact</h1>
        </Link>
        {/* <Link href="/Gallery">
          <h1 className="hover:text-[#FFE353] duration-300">Gallery</h1>
        </Link> */}
        <Link href="/Blog">
          <h1 className="hover:text-[#FFE353] duration-300">Blog</h1>
        </Link>
      </div>
      <Link href="/Donate">
        <div className="hover:bg-[#680070] hover:text-white duration-300 p-3 bg-white w-[100px] rounded-[5px]">
          <div className="flex items-center justify-center">
            <h1 className="text-xl">Donate</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default navbar;
