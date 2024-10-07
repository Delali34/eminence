"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar2";
import { motion } from "framer-motion";
import { FaUsers, FaHandsHelping, FaLightbulb } from "react-icons/fa";
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
          src="/youth.jpg"
          alt="Youth Community Development"
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
              Youth in Community Development Empowerment Program
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Empowering Youth, Transforming Communities
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
            individual has the opportunity to thrive, with a special focus on
            youth empowerment.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={<FaUsers className="text-4xl text-blue-500" />}
              title="Youth Engagement"
              description="Actively involving young people in community development initiatives and decision-making processes."
            />
            <FocusCard
              icon={<FaHandsHelping className="text-4xl text-green-500" />}
              title="Skills Development"
              description="Providing training and resources to enhance youth capabilities in leadership, entrepreneurship, and community service."
            />
            <FocusCard
              icon={<FaLightbulb className="text-4xl text-yellow-500" />}
              title="Innovation Support"
              description="Encouraging and supporting youth-led innovative solutions to community challenges."
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
            We aim to impact two (2) million youth in poverty-stricken
            communities across Ghana by empowering them to take leadership roles
            in community development initiatives.
          </p>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Target: $5 Million</h3>
            <p className="text-gray-700">
              Your support is crucial in reaching our $5 million goal. Every
              contribution brings us closer to making a real difference in the
              lives of young people and their communities across Ghana.
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
            Our comprehensive programs address the challenges faced by youth
            through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Leadership training and mentorship programs</li>
            <li>Community-based project implementation</li>
            <li>Entrepreneurship and skills development workshops</li>
            <li>Advocacy for youth-inclusive policies</li>
            <li>
              Collaborative partnerships with local and national stakeholders
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
            Despite the potential of youth in Ghana, significant challenges
            remain:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Approximately 57% of Ghana's population is under the age of 25
              [World Bank, 2020]
            </li>
            <li>
              Limited access to resources and opportunities for youth in
              poverty-stricken areas
            </li>
            <li>Inadequate infrastructure to support youth-led initiatives</li>
            <li>
              Socio-economic disparities affecting youth participation in
              community development
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
