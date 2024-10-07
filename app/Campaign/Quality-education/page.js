"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandsHelping,
} from "react-icons/fa";
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
          alt="Empowerment through Education"
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
              Igniting the Next Generation Through Quality Education
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Empowering Minds, Transforming Communities
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
            from 2025 to 2035. Guided by our commitment to compassion, justice,
            and equity, we invite you to join us in shaping a world where every
            individual has the opportunity to thrive through quality education.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaGraduationCap className="text-4xl text-blue-500" />}
              title="Quality Education"
              description="Providing comprehensive educational programs to ignite curiosity and foster lifelong learning."
            />
            <FocusCard
              icon={<FaChalkboardTeacher className="text-4xl text-green-500" />}
              title="Teacher Support"
              description="Offering tailored training programs to enhance educators' effectiveness in the classroom."
            />
            <FocusCard
              icon={<FaHandsHelping className="text-4xl text-purple-500" />}
              title="Community Empowerment"
              description="Equipping individuals with vocational and entrepreneurial skills to break the cycle of poverty."
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
            We aim to catalyze a profound transformation in the educational
            landscape of impoverished areas in Ghana, aligning closely with
            Sustainable Development Goal 4.
          </p>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $15 Million</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $15 million goal. Every
              contribution brings us closer to making a real difference in the
              lives of students and educators across Ghana.
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
            Our comprehensive programs address the challenges faced in education
            through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Mentorship and skills education</li>
            <li>Mental fortitude training</li>
            <li>Support for educators and school administrators</li>
            <li>Vocational and entrepreneurial skills development</li>
            <li>
              Bridging the gap between urban and rural educational quality
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">The Situation in Ghana</h2>
          <p className="text-lg text-gray-700 mb-4">
            Despite progress, significant challenges remain in education:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Only 47% complete higher secondary education [UNICEF, 2023]</li>
            <li>
              Net enrollment rate in primary education is 84.3% [UNESCO, 2021]
            </li>
            <li>Primary completion rate stands at 76.6% [UNESCO, 2021]</li>
            <li>
              Disparities exist between urban and rural areas in access to
              quality education
            </li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
};

const FocusCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default CampaignPage;
