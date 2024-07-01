"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaDollarSign } from "react-icons/fa";

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
          src="/food.jpg"
          alt="Sustainable Future"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            className="text-center text-white p-8 bg-black/30 rounded-lg backdrop-blur-sm"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              AGRIGROW
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Ending Hunger, Boosting Agriculture
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
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Eminence Lead International is embarking on a transformative journey
            from 2025 to 2031. Guided by our commitment to compassion, justice,
            and equity, we invite you to join us in shaping a world where every
            individual has the opportunity to thrive.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaLeaf className="text-4xl text-green-500" />}
              title="Sustainable Agriculture"
              description="Promoting climate-smart agricultural practices to ensure food security and environmental sustainability."
            />
            <FocusCard
              icon={<FaUsers className="text-4xl  text-blue-500" />}
              title="Empowering Farmers"
              description="Providing training, resources, and market access to smallholder farmers, enhancing their livelihoods."
            />
            <FocusCard
              icon={<FaDollarSign className="text-4xl text-yellow-500" />}
              title="Economic Growth"
              description="Boosting the agricultural sector to drive economic development and reduce poverty in rural areas."
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
            We aim to empower 5 million farmers and agricultural workers across
            Ghana with essential skills, resources, and support needed to thrive
            in their endeavors.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $10 Million</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $10 million goal. Every
              contribution brings us closer to making a real difference in the
              lives of millions.
            </p>
            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
              Donate Now
            </button>
          </div>
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
