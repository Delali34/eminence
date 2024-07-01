"use client";
import React, { useState } from "react";
import { Team } from "./Roles";
import { Board } from "./Board";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import Image from "next/image";

function Teams() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openPopup = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedPerson(null);
    document.body.style.overflow = "auto";
  };

  const PersonCard = ({ person }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-80 w-full">
        <Image
          layout="fill"
          objectFit="contain"
          src={person.image}
          alt={person.name}
        />
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
        <p className="text-sm text-purple-600">{person.position}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300"
        onClick={() => openPopup(person)}
      >
        Learn More
      </motion.button>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Meet Our Team
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Team.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-center text-gray-900 my-12"
        >
          Board of Directors
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Board.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-4 flex justify-between items-center border-b border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate mr-2">
                  {selectedPerson.name}
                </h2>
                <button
                  onClick={closePopup}
                  className="text-gray-500 hover:text-purple-600 flex-shrink-0"
                >
                  <IoCloseCircle size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={selectedPerson.image}
                      alt={selectedPerson.name}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {selectedPerson.position}
                </h3>
                <p className="text-gray-700 mb-4">{selectedPerson.details}</p>
                {selectedPerson.details2 && (
                  <p className="text-gray-700 mb-4">
                    {selectedPerson.details2}
                  </p>
                )}
                {selectedPerson.details3 && (
                  <p className="text-gray-700 mb-4">
                    {selectedPerson.details3}
                  </p>
                )}
                {selectedPerson.points && (
                  <p className="text-gray-700">{selectedPerson.points}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Teams;
