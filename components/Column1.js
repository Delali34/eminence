import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiShareForwardFill } from "react-icons/ri";
import { MdVolunteerActivism } from "react-icons/md";

function column1() {
  return (
    <div className="bg-[#FFE353] w-[25%] hidden lg:flex font-maintext">
      <div className="max-w-4xl max-auto p-10">
        {" "}
        <div className=" text-xl ">
          <Link href="/">
            <h1 className="">Eminence Lead</h1>
          </Link>
        </div>
        <div className="mt-20">
          <Image width={70} height={70} src="/EMINECE LOGO22.png" />
          <div className="mt-10">
            <h1 className="text-xl font-bold">Donate Now</h1>
            <p className="mt-3 font-medium">
              Your financial contribution can make a real difference. Every
              money you donate goes directly towards our projects{" "}
            </p>
            <div className=" mt-4">
              <Link
                className="flex animate-bounce items-center gap-2 hover:text-white"
                href="/Donate"
              >
                <h1 className="font-bold text-xl">Get Started</h1>

                <RiShareForwardFill />
              </Link>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black " />
          </div>
        </div>
        <div>
          <MdVolunteerActivism className="text-6xl text-[#660070]" />
          <div className="mt-10">
            <h1 className="text-xl font-bold">Become A Volunteer</h1>
            <p className="mt-3 font-medium">
              Join our team of dedicated Volunteers and actively participate in
              our projects and events. Your time and skills are invaluable
            </p>

            <div className=" mt-4">
              <Link
                className="flex animate-bounce items-center gap-2 hover:text-white"
                href="/Volunteer"
              >
                <h1 className="font-bold text-xl">Get Started</h1>

                <RiShareForwardFill />
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default column1;
