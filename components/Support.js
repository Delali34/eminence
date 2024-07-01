"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

function Support() {
  const focusAreas = [
    {
      title: "Leadership development programs",
      description:
        "Our Leadership Development Programs are meticulously crafted to nurture the potential of aspiring leaders, equipping them with the skills and insights needed to excel in today's dynamic business landscape.",
      image: "/leadership.jpg",
      link: "/Programs/#Leadership",
    },
    {
      title: "Educational programs",
      description:
        "Welcome to our comprehensive range of educational programs designed to ignite curiosity, inspire creativity, and foster lifelong learning.",
      image: "/school2.jpg",
      link: "/Programs/#Education",
    },
    {
      title: "Gender Equality and social inclusion",
      description:
        "Gender equality and social inclusion are fundamental principles that promote fairness, equal opportunities, and respect for all individuals, regardless of their gender, background, or identity.",
      image: "/gender.jpg",
      link: "/Programs/#Gender",
    },
    {
      title: "Community Development",
      description:
        "At EMINENCE LEAD INTERNATIONAL, community development is about fostering a sense of belonging and collective responsibility.",
      image: "/Play.jpg",
      link: "/Programs/#Community",
    },
    {
      title: "Poverty eradication",
      description:
        "Poverty eradication stands as a paramount global mission, representing the collective effort to eliminate the widespread and debilitating condition of living in destitution and lack.",
      image: "/annie-spratt-2rMn97DPTdU-unsplash.jpg",
      link: "/Programs/#Poverty",
    },
    {
      title: "Human Right Advocacy",
      description:
        "Our mission is to raise awareness, advocate for change, and empower individuals and communities to stand up for their rights and the rights of others.",
      image: "/human.jpg",
      link: "/Programs/#Human",
    },
    {
      title: "Governance",
      description:
        "Governance refers to the framework of rules, practices, and processes that guide and oversee the management and decision-making within an organization.",
      image: "/part.jpg",
      link: "/Programs/#Governance",
    },
    {
      title: "Environmental Protection",
      description:
        "At EMINENCE LEAD INTERNATIONAL, we are committed to making a positive impact on our planet by prioritizing environmental protection as one of our key focus areas.",
      image: "/water.jpg",
      link: "/Programs/#Environment",
    },
  ];

  return (
    <div className="bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Focus Areas
        </motion.h1>

        {focusAreas.map((area, index) => (
          <FadeInSection key={area.title} delay={index * 0.2}>
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between mb-24`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src={area.image}
                  width={500}
                  height={400}
                  alt={area.title}
                  className="rounded-xl shadow-2xl object-cover w-full h-[300px]"
                />
              </div>
              <div className="lg:w-1/2 lg:px-12">
                <h2 className="text-2xl font-header lg:text-4xl font-bold mb-4 text-white">
                  {area.title}
                </h2>
                <p className="text-white mb-6">{area.description}</p>
                <Link href={area.link}>
                  <motion.button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default Support;
