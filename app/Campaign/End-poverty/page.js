"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import { FaTools, FaLightbulb, FaHandsHelping } from "react-icons/fa";
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
          alt="Empowerment through Vocational Skills"
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
              End the Poverty Syndrome
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Through Vocational Skills and Entrepreneurship Empowerment
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
            individual has the opportunity to thrive and break free from
            poverty.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaTools className="text-4xl text-blue-500" />}
              title="Vocational Skills"
              description="Equipping individuals with practical skills for sustainable livelihoods."
            />
            <FocusCard
              icon={<FaLightbulb className="text-4xl text-yellow-500" />}
              title="Entrepreneurship"
              description="Fostering a culture of innovation and self-reliance through business skills."
            />
            <FocusCard
              icon={<FaHandsHelping className="text-4xl text-green-500" />}
              title="Community Support"
              description="Providing resources and mentorship for long-term success."
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
            We aim to empower individuals and communities across Ghana,
            particularly in regions with high poverty rates, by providing them
            with the skills, resources, and mindset needed to break free from
            the cycle of poverty.
          </p>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $350,000</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $350,000 goal. Every
              contribution brings us closer to making a real difference in the
              lives of millions struggling with poverty.
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
            Our comprehensive programs address the root causes of poverty
            through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive vocational training programs</li>
            <li>Entrepreneurship workshops and mentorship</li>
            <li>Access to resources and startup support</li>
            <li>Ongoing guidance and community building</li>
            <li>Partnerships with local businesses and institutions</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-6">Target Beneficiaries</h2>
          <p className="text-lg text-gray-700">
            Our efforts will primarily benefit individuals and communities
            grappling with poverty across various regions of Ghana, including
            but not limited to Accra, Kumasi, Tamale, and Sekondi-Takoradi. We
            aim to uplift the most vulnerable populations and create pathways to
            prosperity for all.
          </p>
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
