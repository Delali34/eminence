import React from "react";
import Link from "next/link";
import Image from "next/image";

function navbar() {
  return (
    <div className="bg-[#FFFDF1] sticky-navbar">
      {" "}
      <div className=" max-w-[1800px]  mx-auto lg:flex hidden font-maintext items-center justify-between py-5 px-10  ">
        <Link href="/">
          <Image width={70} height={70} src="/EMINENCE.jpg" />
        </Link>

        <div className="text-black   flex items-center space-x-10 text-xl font-semibold">
          <Link href="/">
            <h1 className="hover:text-[#680070] duration-300">Home</h1>
          </Link>
          <Link href="/AboutUs">
            <h1 className="hover:text-[#680070] duration-300">About Us</h1>
          </Link>
          <Link href="/Programs">
            <h1 className="hover:text-[#680070] duration-300">Programs</h1>
          </Link>
          <Link href="/Contact">
            <h1 className="hover:text-[#680070] duration-300">Contact</h1>
          </Link>
        </div>
        <Link href="/Donate">
          <div className="hover:bg-[#000] hover:text-white text-white duration-300 p-3 bg-[#680070] w-[100px] rounded-[5px]">
            <div className="flex items-center justify-center">
              <h1 className="text-xl">Donate</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
