import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "The program has greatly benefited final-year students, enhancing their skills in presentation, leadership, and entrepreneurship. The SRC President commends Eminence Lead International for their inspiring role and urges continued support for Ghana's educational system to develop future leaders. Appreciation is also extended from the Presbyterian Midwifery and Nursing Training College for the significant contributions made.",
    author: "Bonsu Ransford",
    title: "SRC President – Presbyterian Midwifery & Nursing Training College",
  },
  {
    text: "Eminence Lead International education and leadership programs have built my confidence level as a medical student, helped me with learning tools, how to plan and set personal goals, and how to take leadership initiatives. The organization has really helped me to excel academically, personally and emotional wise, I'm also a beneficiary of their sponsorship program for the past eight months. Big thank you to Eminence Lead International and its funding donors for this great initiatives.",
    author: "Prince Yawanke",
    title: "Student of Presbyterian Midwifery & Nursing Training College Agogo",
  },
  {
    text: "I have learnt a lot from Eminence Lead International's engagement program for the past months, I can boldly say that I'm ready for the future. I have learnt how to lead people with good leadership tools, self-presentation, confidence, public speaking skills, and the easy way to learn as student and how to stay motivated in everything I do. Before, I wasn't ready for the future because of fear, ignorance and low self-esteem but now I feel great. Thanks to Eminence Lead International and Its donors for the great work done.",
    author: "Kezia Quansah",
    title: "Student of Presbyterian Midwifery & Nursing Training College Agogo",
  },
  {
    text: "I say big thank to Eminence Lead International for supporting my nursing education through their sponsorship program, empowering me to focus on my education and also building my confidence level to take my education serious. Now, I can boldly say that I'm confident enough all because of what I learnt from Eminence Lead International programs. I personally recommend the organizational to every institution, corporate entities, government, and donors to do more to shape and prepare the next generation of leaders for our country.",
    author: "Agnes Gyimah",
    title: "Student of Presbyterian Midwifery & Nursing Training College Agogo",
  },
  {
    text: "I recommend Eminence Lead International programs to every school and school management. The organization's education and leadership programs have contributed massively to my school performance, build students confidence level, equipped the students with leadership skills and also transformed teaching skills of my teachers. Eminence Lead International is every institution partner, I'm grateful to the organization for their great work that they are doing to support education system in the country.",
    author: "Mr. Charles Shabby",
    title: "Director Paradise Intellectual Academy, Accra",
  },
  {
    text: "I have learnt a lot from the workshop to support my company about planning and setting strategic goals, achieving more in a less time, capacity development, communication and presentation. Thank you to Eminence Lead International for organizing this great workshop to support business owners. I humble appeal to the organization to continue this program from time to time to build our capacities and managerial skills.",
    author: "Mr. John Anku",
    title: "Chief Executive Officer – Jadbecc Company Limited",
  },
  {
    text: "I'm a true beneficiary of Eminence Lead International's Entrepreneurship program, I have learnt a lot as an entrepreneur, I now understand what a business plan is about and financial management. I'm also grateful to the organization for coaching and supporting me to register to formalize my business at the Registrar of Companies. Thank you Eminence Lead International and its funding donors.",
    author: "Mrs. Mary Tetteh",
    title: "Manager - Ultimate Catering and Decoration Services Limited",
  },
  {
    text: "I want to say thank you to Eminence Lead International for their humanitarian work and community transformation project in Medie community. The presence of the organization and its engagement programs have caused massive change in the community and also shifted the lifestyle of people in the community for months of active engagements. I want to extend my preform gratitude to the management of Eminence Lead International and its funding donors for transforming the standard of living in my community.",
    author: "Nii",
    title: "Chief of Medie Community Ga Traditional Area",
  },
  {
    text: "I have learnt how to set goals for myself, learn in a smart way as well as public speaking skills for the past three months of attending Eminence Lead International programs and workshops. The organization is really doing well in sharping and preparing the next generation of Ghana and beyond. God bless Eminence Lead International for the great work that they are doing for mother Ghana.",
    author: "Twenebooah Bernice",
    title: "Political Science Student – University of Ghana",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg2 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Testimonials
        </h2>
        <div className="relative bg-white testimonial-container rounded-lg shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="md:text-sm text-[10px] italic text-gray-700 mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <cite className="block font-semibold text-sm text-gray-900">
                {testimonials[currentIndex].author}
              </cite>
              <p className="text-sm text-gray-600 mt-1">
                {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
