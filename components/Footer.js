"use client";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Newsletter from "./Newsletter";

const Footer = () => {
  const socialIcons = [
    {
      Icon: BsFacebook,
      href: "https://www.facebook.com/profile.php?id=61559729709338",
    },
    {
      Icon: BsInstagram,
      href: "https://www.instagram.com/eminencelead?igsh=MW93MjduY3ZtNjExYw==",
    },
    {
      Icon: BsTwitter,
      href: "https://x.com/eminencelead?t=Ko6lOyL5QUgSFaDyRrYfjw&s=08",
    },
    {
      Icon: BsLinkedin,
      href: "https://www.linkedin.com/in/eminence-lead-international-498418307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      Icon: FaYoutube,
      href: "https://youtube.com/@eminencelead?si=pSktC99gOISujArN",
    },
    {
      Icon: FaTiktok,
      href: "https://www.tiktok.com/@eminence.lead.int?is_from_webapp=1&sender_device=pc",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "/AboutUs" },
    { name: "Campaigns", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "/Contact" },
  ];

  const companyLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Preferences", href: "#" },
  ];

  return (
    <footer className="bg-[#6C0971] text-white font-maintext">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Eminence Lead International
            </h3>
            <p className="text-purple-200 mb-6">
              Creating Hope and Igniting Greatness
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-purple-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Newsletter />
          </motion.div>
        </div>
      </div>
      <div className="border-t border-purple-400">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-purple-200">
            © {new Date().getFullYear()} Eminence Lead International. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
