// ============================================
// FILE: app/Events/page.jsx
// PASTE THIS INTO: app/Events/page.jsx
// This is the EVENTS LISTING PAGE with cards.
// ============================================

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineTag,
} from "react-icons/hi";
import { events } from "@/data/events";
import Navbar from "@/components/Navbar2";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function EventCard({ event }) {
  return (
    <motion.div variants={cardVariants}>
      <Link href={`/Events/${event.id}`}>
        <motion.div
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer border border-gray-100"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#680070] to-[#a855f7] flex items-center justify-center">
                <HiOutlineCalendar className="text-white/30" size={80} />
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#680070]">
                <HiOutlineTag size={12} />
                {event.category}
              </span>
            </div>

            {/* Date overlay */}
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-white font-bold text-sm flex items-center gap-1.5">
                <HiOutlineCalendar size={16} />
                {event.date}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#680070] transition-colors duration-300">
              {event.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {event.excerpt}
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
              <HiOutlineLocationMarker size={16} className="flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>

            {/* Impact Stats */}
            {event.impact && (
              <div className="flex flex-wrap gap-2 mb-5">
                {event.impact.slice(0, 2).map((stat, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#680070]/5 text-[#680070]"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-end pt-4 border-t border-gray-100">
              <span className="text-sm font-semibold text-gray-900 group-hover:text-[#680070] transition-colors flex items-center gap-1">
                Read More
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF1]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#680070] via-[#4a0050] to-[#2d0030]" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20"
          >
            Our Events
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Stories of
            <br />
            <span className="text-[#e8b4ff]">Impact &amp; Change</span>
          </motion.h1>
        </div>
      </section>

      {/* Events Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>

        {events.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <HiOutlineCalendar
              className="mx-auto text-gray-300 mb-4"
              size={64}
            />
            <p className="text-gray-500 text-lg">No events yet.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
