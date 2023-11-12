import React from "react";
import Navbar from "@/components/Navbar2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillWechat, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import Mobilebar from "@/components/Mobilebar";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Mobilebar />

      <div className="bg2">
        <div className="max-w-7xl mx-auto pb-10">
          {" "}
          <div className="flex items-center justify-center flex-col py-14">
            <BiSolidPhoneCall className="lg:text-6xl text-4xl" />
            <h1 className="mt-6 lg:text-5xl text-3xl font-mont font-bold text-center">
              Contact Our Friendly Team
            </h1>
            <h1 className="mt-5 text-[20px]">Let us know how we can help.</h1>
          </div>
          <div className="flex px-5 flex-wrap justify-center gap-5">
            <div className="bg-white p-4 border-[1px] border-black/20 rounded-xl">
              <AiFillWechat className="text-3xl" />
              <h1 className="mt-14 font-mont font-semibold text-lg">
                Chat on WhatsApp
              </h1>
              <p className="font-mont">Speak to our friendly team.</p>
              <p className="font-mont text-lg mt-2 font-semibold">
                +233 548483430
              </p>
            </div>
            <div className="bg-white p-4 border-[1px] border-black/20 rounded-xl">
              <AiOutlineMail className="text-3xl" />
              <h1 className="mt-14 font-mont font-semibold text-lg">
                Send us an email
              </h1>
              <p className="font-mont">We are here to help</p>
              <p className="font-mont text-lg mt-2 font-semibold">
                info@eminencelead.org
              </p>
            </div>
            <div className="bg-white w-[250px] h-[250px] p-4 border-[1px] border-black/20 rounded-xl">
              <FaLocationDot className="text-3xl" />
              <h1 className="mt-14 font-mont font-semibold text-lg">
                Visit Us
              </h1>
              <p className="font-mont">Visit our office HQ</p>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/vEP6xHk88Br5Mmya8"
              >
                {" "}
                <p className="font-mont text-lg mt-2 font-semibold underline">
                  View on Google Maps
                </p>
              </Link>
            </div>
            <div className="bg-white p-4 w-[250px] h-[250px] border-[1px] border-black/20 rounded-xl">
              <LuPhoneCall className="text-3xl" />
              <h1 className="mt-14 font-mont font-semibold text-lg">Call Us</h1>
              <p className="font-mont">Mon-Fri 8am-5pm</p>
              <p className="font-mont text-lg mt-2 font-semibold">
                +233 548 483 430
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
