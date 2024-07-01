"use client";
import React from "react";
import Navbar from "@/components/Navbar2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillWechat, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import Footer from "@/components/Footer";

function ContactPage() {
  const contactMethods = [
    {
      icon: <AiFillWechat className="text-4xl text-green-500" />,
      title: "Chat on WhatsApp",
      description: "Speak to our friendly team",
      contact: "+233 548483430",
      action: () => window.open("https://wa.me/233548483430", "_blank"),
    },
    {
      icon: <AiOutlineMail className="text-4xl text-blue-500" />,
      title: "Send us an email",
      description: "We are here to help",
      contact: "info@eminencelead.org",
      action: () => (window.location.href = "mailto:info@eminencelead.org"),
    },
    {
      icon: <FaLocationDot className="text-4xl text-red-500" />,
      title: "Visit Us",
      description: "Visit our office HQ",
      contact: "View on Google Maps",
      action: () =>
        window.open("https://maps.app.goo.gl/vEP6xHk88Br5Mmya8", "_blank"),
    },
    {
      icon: <LuPhoneCall className="text-4xl text-purple-500" />,
      title: "Call Us",
      description: "Mon-Fri 8am-5pm",
      contact: "+233 548 483 430",
      action: () => (window.location.href = "tel:+233548483430"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <BiSolidPhoneCall className="mx-auto text-6xl text-blue-600 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Contact Our Friendly Team
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
              Let us know how we can help you today.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
                  onClick={method.action}
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform rotate-12">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-8">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{method.description}</p>
                  <p className="mt-4 text-lg font-medium text-blue-600">
                    {method.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
