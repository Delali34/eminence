"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Stories = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targets = [34620, 9300, 2010];
  const increments = [500, 300, 50];
  const durations = [25, 80, 40];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const intervals = [];

      targets.forEach((target, index) => {
        intervals[index] = setInterval(() => {
          setCounts((prevCounts) => {
            const newCount = Math.min(
              prevCounts[index] + increments[index],
              target
            );
            if (newCount === target) clearInterval(intervals[index]);
            return [
              ...prevCounts.slice(0, index),
              newCount,
              ...prevCounts.slice(index + 1),
            ];
          });
        }, durations[index]);
      });

      setHasAnimated(true);

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  return (
    <div className="bg-white lg:p-10 px-3 pb-3">
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="lg:text-4xl text-2xl text-center font-header font-bold mb-20">
          Building a better Tomorrow, Today
        </h1>
        <div className="mb-10">
          <div className="relative w-full lg:pt-[35%] pt-[56.56%]">
            <iframe
              src="https://www.youtube.com/embed/N7YpWLmL6JU"
              title="One.org | Unlocking the power of data with Data Commons"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div
          ref={ref}
          className="max-w-5xl font-header mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 pt-10"
        >
          <div>
            <h2 className="text-5xl font-bold text-center">
              {counts[0]}
              <span className="text-3xl">+</span>
            </h2>
            <h1 className="text-center font-bold text-xl py-2">
              Educational Advancement
            </h1>
            <p className="text-center font-maintext">
              Includes the empowerment and impact achieved through educational
              programs across various levels and disciplines.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-center">{counts[1]}+</h2>
            <h1 className="text-center font-bold text-xl py-2">
              Community and Social Development
            </h1>
            <p className="text-center font-maintext">
              Highlights the impact on community development, women's enterprise
              support, and youth leadership.
            </p>
          </div>
          <div className="pb-5">
            <h2 className="text-5xl font-bold text-center">{counts[2]}+</h2>
            <h1 className="text-center font-bold text-xl py-2">
              Economic Empowerment{" "}
            </h1>
            <p className="text-center font-maintext">
              Focuses on the enhancement of economic opportunities and corporate
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
