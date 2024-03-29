"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
function FadeInSection(props) {
  const [ref, inView] = useInView({
    threshold: 0.6,
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

function Support() {
  return (
    <div className="bg">
      <div className="hidden lg:flex">
        {" "}
        <div className="max-w-7xl mx-auto px-10">
          <div>
            <h1 className="font-bold text-5xl text-center py-10 text-white">
              Focus Areas
            </h1>
          </div>
          <FadeInSection>
            {" "}
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <Image
                  src="/leadership.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl"
                />
              </div>
              <div className="lg:w-[50%] w-full">
                <h1 className="text-white text-center lg:text-left lg:text-5xl text-xl md:text-3xl font-header font-extrabold">
                  Leadership development programs
                </h1>
                <p className="text-white font-maintext text-center   lg:text-left  font-medium text-[18px] mt-3">
                  Our Leadership Development Programs are meticulously crafted
                  to nurture the potential of aspiring leaders, equipping them
                  with the skills and insights needed to excel in today's
                  dynamic business landscape.
                </p>
                <Link href="/Programs/#Leadership">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <h1 className="text-white text-center lg:text-left lg:text-5xl text-3xl font-header font-extrabold">
                  Educational programs
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  Welcome to our comprehensive range of educational programs
                  designed to ignite curiosity, inspire creativity, and foster
                  lifelong learning.
                </p>
                <Link href="/Programs/#Education">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
              <div className="w-[50%]">
                <Image
                  src="/school2.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <Image
                  src="/gender.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  Gender Equality and social inclusion
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  Gender equality and social inclusion are fundamental
                  principles that promote fairness, equal opportunities, and
                  respect for all individuals, regardless of their gender,
                  background, or identity.
                </p>
                <Link href="/Programs/#Gender">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            {" "}
            <div className=" flex  lg:flex-row flex-col  justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  {" "}
                  Community Development
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  At EMINENCE LEAD INTERNATIONAL, community development is about
                  fostering a sense of belonging and collective responsibility.
                </p>
                <Link href="/Programs/#Community">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
              <div className="w-[50%]">
                <Image
                  src="/Play.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            {" "}
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <Image
                  src="/annie-spratt-2rMn97DPTdU-unsplash.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  Poverty eradication
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  Poverty eradication stands as a paramount global mission,
                  representing the collective effort to eliminate the widespread
                  and debilitating condition of living in destitution and lack
                </p>
                <Link href="/Programs/#Poverty">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-fulllg">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  Human Right Advocacy
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  Our mission is to raise awareness, advocate for change, and
                  empower individuals and communities to stand up for their
                  rights and the rights of others
                </p>
                <Link href="/Programs/#Human">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
              <div className="w-[50%]">
                <Image
                  src="/human.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            {" "}
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <Image
                  src="/part.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  Governance
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  Governance refers to the framework of rules, practices, and
                  processes that guide and oversee the management and
                  decision-making within an organization.
                </p>
                <Link href="/Programs/#Governance">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            {" "}
            <div className=" flex lg:flex-row flex-col justify-between py-10 items-center gap-14">
              <div className="lg:w-[50%] w-full">
                <h1 className="text-white lg:text-5xl text-3xl font-header font-extrabold">
                  Environmental Protection
                </h1>
                <p className="text-white font-maintext font-medium text-[18px] mt-3">
                  At EMINENCE LEAD INTERNATIONAL, we are committed to making a
                  positive impact on our planet by prioritizing environmental
                  protection as one of our key focus areas
                </p>
                <Link href="/Programs/#Environment">
                  <div className="flex justify-center items-center w-[120px] bg-[#FF521A] hover:bg-black duration-200 p-3 mt-3">
                    <h1 className="text-center text-white">Read More</h1>
                  </div>
                </Link>
              </div>
              <div className="w-[50%]">
                <Image
                  src="/water.jpg"
                  width={500}
                  height={700}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] w-[350px] h-[250px] object-cover rounded-xl  "
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default Support;
