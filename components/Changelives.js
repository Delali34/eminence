"use client";
import React from "react";
import { BsJoystick } from "react-icons/bs";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
function FadeInSection(props) {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}
function FadeInSectionRight(props) {
  const [ref, inView] = useInView({
    threshold: 0.9,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

function Changelives() {
  return (
    <div className="bg2">
      <div className="max-w-7xl mx-auto pt-20 pb-5 flex lg:flex-row flex-col gap-14 lg:px-20 justify-center place-items-center lg:justify-between">
        <div className="lg:w-[50%] w-full">
          <FadeInSection>
            <h1 className="font-header text-center lg:text-left font-extrabold lg:text-7xl text-5xl">
              Together, We
            </h1>
            <h1 className="font-header font-extrabold lg:text-left text-center lg:text-7xl text-5xl">
              Change Lives
            </h1>
            <p className="mt-7 text-center lg:text-left px-5 lg:px-0">
              We are on a transformative mission to ignite enduring change by
              championing economic empowerment and forging gender equality Our
              mission is to catalyse lasting change by promoting economic
              empowerment and gender equality through entrepreneurship.
            </p>
            <div className="mt-8 flex lg:flex-row flex-col lg:items-end items-center gap-2">
              <BsJoystick className="text-[#670070] text-5xl" />
              <div>
                <h1 className="lg:text-2xl text-xl font-bold">
                  Leadership development programs
                </h1>
              </div>
            </div>
            <div className="mt-8 flex lg:items-end lg:flex-row flex-col items-center gap-2">
              <BsJoystick className="text-[#670070] text-5xl" />
              <div>
                <h1 className="lg:text-2xl text-xl font-bold">
                  Educational programs
                </h1>
              </div>
            </div>
            <div className="mt-8 flex lg:items-end lg:flex-row flex-col items-center gap-2">
              <BsJoystick className="text-[#670070] text-5xl" />
              <div>
                <h1 className="lg:text-2xl text-xl font-bold">
                  Gender Equality and social inclusion
                </h1>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div className="lg:w-[50%] w-full flex items-center justify-center p-10">
          <div className="-mt-5">
            <FadeInSection>
              <Image
                src="/annie-spratt-2rMn97DPTdU-unsplash.jpg"
                width={500}
                height={700}
                alt=""
                className="w-[500px] lg:h-[350px] object-cover"
              />
            </FadeInSection>

            <FadeInSectionRight>
              <div className="flex  items-center gap-8 mt-10 ">
                <div className="lg:w-[50%] w-full">
                  {" "}
                  <Image
                    src="/bill-wegener-7MD4DR9jbP0-unsplash.jpg"
                    width={100}
                    height={100}
                    alt=""
                    className="w-[250px] lg:h-[200px]  object-cover"
                  />
                </div>
                <div className="lg:w-[50%] w-full">
                  <Image
                    src="/annie-spratt-cVEOh_JJmEE-unsplash.jpg"
                    width={100}
                    height={100}
                    alt=""
                    className="w-[230px] lg:h-[230px]   object-cover  rounded-[100%] "
                  />
                </div>
              </div>
            </FadeInSectionRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelives;
