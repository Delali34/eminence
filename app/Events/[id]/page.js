// ============================================
// FILE: app/Events/[id]/page.jsx
// PASTE THIS INTO: app/Events/[id]/page.jsx
// This is the SINGLE EVENT DETAIL page.
// ============================================

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineTag,
  HiArrowLeft,
  HiOutlineShare,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { getEventById, events } from "@/data/events";

export default function EventDetailPage({ params }) {
  const { id } = params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  // Get other events (exclude current)
  const otherEvents = events.filter((e) => e.id !== event.id).slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: event.title,
        text: event.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFDF1]">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#680070] via-[#4a0050] to-[#2d0030]" />
        )}

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/Events">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiArrowLeft size={18} />
              All Events
            </motion.div>
          </Link>
        </div>

        {/* Share Button */}
        <div className="absolute top-6 right-6 z-20">
          <motion.button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineShare size={18} />
            Share
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#680070] mb-4">
                <HiOutlineTag size={12} />
                {event.category}
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                {event.title}
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
                {event.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Happened
            </h2>

            <div className="prose prose-lg max-w-none">
              {event.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="sticky top-28 space-y-6">
              {/* Event Details Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  Event Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#680070]/10 flex items-center justify-center flex-shrink-0">
                      <HiOutlineCalendar className="text-[#680070]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Date
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#680070]/10 flex items-center justify-center flex-shrink-0">
                      <HiOutlineLocationMarker
                        className="text-[#680070]"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#680070]/10 flex items-center justify-center flex-shrink-0">
                      <HiOutlineTag className="text-[#680070]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Category
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {event.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              {event.impact && event.impact.length > 0 && (
                <div className="bg-gradient-to-br from-[#680070] to-[#4a0050] rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Our Impact
                  </h3>
                  <div className="space-y-3">
                    {event.impact.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#e8b4ff] flex-shrink-0" />
                        <span className="text-white/90 font-medium text-sm">
                          {stat}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Partners Card */}
              {event.partners && event.partners.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HiOutlineUserGroup className="text-[#680070]" size={22} />
                    Partners
                  </h3>
                  <div className="space-y-3">
                    {event.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#680070] flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Events */}
              {otherEvents.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    More Events
                  </h3>
                  <div className="space-y-4">
                    {otherEvents.map((related) => (
                      <Link key={related.id} href={`/Events/${related.id}`}>
                        <div className="group flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors -mx-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            {related.image ? (
                              <Image
                                src={related.image}
                                alt={related.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#680070] to-[#a855f7]" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-gray-900 group-hover:text-[#680070] transition-colors truncate">
                              {related.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {related.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#680070] via-[#4a0050] to-[#2d0030] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Help Us Do More
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Your support helps us reach more communities and create lasting
            change. Every contribution makes a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/Donate">
              <motion.button
                className="px-8 py-3.5 rounded-xl text-[#680070] font-bold bg-white hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </motion.button>
            </Link>
            <Link href="/Contact">
              <motion.button
                className="px-8 py-3.5 rounded-xl text-white font-bold border-2 border-white/30 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
