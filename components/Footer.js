// components/Footer.js
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg font-maintext text-white p-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">EminenceLead International</h3>
          <p>Making a Difference, One Act of Kindness at a Time</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
          </ul>
          <div className="mt-4 bg-[#FFFDF1] p-4 rounded">
            <h4 className="text-xl text-black font-bold mb-4">
              Have questions or want to get involved?
            </h4>
            <Link href="/Contact">
              <button className="bg-[#FF521A] hover:bg-black text-white py-2 px-4 rounded">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="mt-8 text-center">
        © 2023 EminenceLead International. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
