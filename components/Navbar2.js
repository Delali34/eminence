"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  const menuItems = [
    "Home",
    "About Us",
    "Programs",
    "Contact",
    "Gallery",
    "blog",
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#FFFDF1]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/EMINECE LOGO22.png"
              alt="Eminence Logo"
              className="transition-transform duration-300 hover:scale-110"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
              >
                <motion.span
                  className="text-sm font-semibold text-black hover:text-[#680070] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </div>

          <Link href="/Donate" className="hidden lg:block">
            <motion.button
              className={`px-6 py-2 rounded-[5px] text-white font-semibold transition-colors duration-300 ${
                scrolled
                  ? "bg-[#000] hover:bg-[#680070]"
                  : "bg-[#680070] hover:bg-[#000]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.button>
          </Link>

          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            ref={menuRef}
            className="fixed top-0 right-0 bottom-0 w-72 bg3 shadow-2xl p-6 overflow-y-auto lg:hidden"
          >
            <div className="flex justify-end mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-black focus:outline-none"
              >
                <HiX size={24} />
              </motion.button>
            </div>
            {menuItems.map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <Link
                  href={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    className="block py-3 text-lg font-semibold text-black hover:text-[#680070] transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-8">
              <Link href="/Donate" onClick={() => setIsOpen(false)}>
                <motion.button
                  className="w-full px-6 py-3 rounded-[5px] text-white font-semibold bg-[#680070] hover:bg-[#000] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
