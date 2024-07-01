"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import { FaFemale, FaChild, FaBalanceScale } from "react-icons/fa";

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
          src="/women.jpg"
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
              Empowering Less Privileged Women and Children
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Protecting Rights, Transforming Lives
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
            woman and child has the opportunity to thrive and enjoy their full
            rights.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaFemale className="text-4xl text-pink-500" />}
              title="Women's Rights"
              description="Advocating for gender equality and empowering women in all aspects of life."
            />
            <FocusCard
              icon={<FaChild className="text-4xl text-blue-500" />}
              title="Children's Rights"
              description="Protecting children from exploitation and ensuring access to education and healthcare."
            />
            <FocusCard
              icon={<FaBalanceScale className="text-4xl text-purple-500" />}
              title="Legal Advocacy"
              description="Working to strengthen and enforce laws protecting women and children."
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
            We aim to impact ten (10) million individuals by promoting and
            protecting the rights of women and children in poverty-stricken
            communities across Ghana, creating a more just and inclusive society
            for all.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $5 Million</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $5 million goal. Every
              contribution brings us closer to making a real difference in the
              lives of vulnerable women and children.
            </p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
              Donate Now
            </button>
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
            Our comprehensive programs address the challenges faced by women and
            children through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Advocacy for stronger legal protections</li>
            <li>Education and awareness campaigns</li>
            <li>Community empowerment initiatives</li>
            <li>Collaboration with local stakeholders and policymakers</li>
            <li>Support services for victims of abuse and discrimination</li>
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
            Despite progress, significant challenges remain:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Women hold only 15% of parliamentary seats and 27% of management
              positions in the private sector
            </li>
            <li>
              80% of pregnant women receive skilled care nationally, but only
              60% in the Northern Region
            </li>
            <li>
              Nearly 20% of children under five experience stunting, indicating
              chronic undernourishment
            </li>
            <li>
              Issues of child labor, trafficking, and limited access to
              education persist
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
