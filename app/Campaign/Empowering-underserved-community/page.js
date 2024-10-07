"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaDollarSign } from "react-icons/fa";
import Link from "next/link";

const CampaignPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <motion.header
        className="relative h-[60vh] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/voc.jpg"
          alt="Empowerment of Women and Children"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            className="text-center text-white p-8 bg-black/30 rounded-lg backdrop-blur-sm max-w-4xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Empowering Underserved Community Women and Young Girls
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Unlocking Full Potential Through Education and Support
            </p>
          </motion.div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <motion.section
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Eminence Lead International is embarking on a transformative journey
            from 2025 to 2030. Guided by our commitment to compassion, justice,
            and equity, we invite you to join us in shaping a world where every
            woman and girl has the opportunity to thrive.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaGraduationCap className="text-4xl text-purple-500" />}
              title="Education"
              description="Providing access to quality education and skills training for women and girls."
            />
            <FocusCard
              icon={<FaUsers className="text-4xl text-pink-500" />}
              title="Community Support"
              description="Fostering a supportive environment for women and girls to grow and succeed."
            />
            <FocusCard
              icon={<FaDollarSign className="text-4xl text-green-500" />}
              title="Economic Empowerment"
              description="Enabling financial independence through entrepreneurship and job skills."
            />
          </div>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Our Impact Goal</h2>
          <p className="text-lg text-gray-700 mb-6">
            We aim to empower 8 million individuals, predominantly women and
            young girls, across Ghana with essential skills, resources, and
            support needed to overcome barriers and achieve their full
            potential.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $6 Million</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $6 million goal. Every
              contribution brings us closer to making a real difference in the
              lives of millions of women and girls.
            </p>
            <Link href="/Donate">
              <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
                Donate Now
              </button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our comprehensive programs address the multifaceted challenges faced
            by women and girls in Ghana, ranging from education and agriculture
            to social vulnerabilities and economic hardships. We provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Academic support and skills enhancement</li>
            <li>Financial literacy programs</li>
            <li>Access to sanitary products and personal hygiene education</li>
            <li>Advocacy for gender equality and women's rights</li>
            <li>Entrepreneurship training and support</li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
};

const FocusCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default CampaignPage;
