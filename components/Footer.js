import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg font-maintext text-white p-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* First Column */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Eminence Lead International
          </h3>
          <p>Creating Hope and Igniting Greatness</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61559729709338"
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/eminencelead?igsh=MW93MjduY3ZtNjExYw=="
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsInstagram />
            </Link>
            <Link
              href="https://x.com/eminencelead?t=Ko6lOyL5QUgSFaDyRrYfjw&s=08"
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/eminence-lead-international-498418307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://youtube.com/@eminencelead?si=pSktC99gOISujArN"
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.tiktok.com/@eminence.lead.int?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className="md:text-4xl text-2xl hover:text-[#FF521A] duration-200"
            >
              <FaTiktok />
            </Link>
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
        © 2024 Eminence Lead International. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
