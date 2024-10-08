"use client";
import React, { useState } from "react";
import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";
import Footer from "@/components/Footer";
import { IoIosRemoveCircle } from "react-icons/io";
import emailjs from "emailjs-com";

function Page() {
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [interests, setInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState("");
  const [daysAvailable, setDaysAvailable] = useState([]);

  const handleDonationClick = (skill) => {
    setSkills([...skills, skill]);
    setCustomSkill("");
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleInterestClick = (interest) => {
    setInterests([...interests, interest]);
    setCustomInterest("");
  };

  const handleRemoveInterest = (index) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);
  };

  const handleDayClick = (day) => {
    setDaysAvailable([...daysAvailable, day]);
  };

  const handleRemoveDay = (day) => {
    const updatedDays = daysAvailable.filter((d) => d !== day);
    setDaysAvailable(updatedDays);
  };

  const handleSuccess = () => {
    // Handle success logic

    const templateParams = {
      firstName: firstName,
      email: email,
      phone: phone,
      skills: skills.join(", "),
      interests: interests.join(", "),
      daysAvailable: daysAvailable.join(", "),
    };

    // Send the form data using EmailJS
    emailjs
      .send(
        "service_mcm6ab8",
        "template_bmb7ma9",
        templateParams,
        "kiOr2GgDyZF2d1t-a"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Display success message
        const message = `Email sent successfully! We will get back to you soon 😍`;
        setSuccessMessage(message);
        setShowSuccessMessage(true);
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        // Handle error logic here if needed
      })
      .finally(() => {
        // Reset form fields and skills after successful submission
        setFirstName("");
        setEmail("");
        setDonationAmount("");
        setPhone("");
        setSkills([]);
        setCustomSkill("");
        setInterests([]);
        setCustomInterest("");
        setDaysAvailable([]);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          setSuccessMessage("");
        }, 5000);
      });
  };

  return (
    <div className="bg5">
      <Navbar2 />
      <Mobilebar />
      <section className="flex flex-col gap-10 justify-between items-center px-5 font-mont container mx-auto lg:px-10 py-5">
        <div className="lg:w-[80%]">
          <h1 className="text-white text-center text-4xl lg:text-6xl font-bold font-mont mt-5 text-shadow-black">
            Volunteer to support our vision
          </h1>
          <p className="text-white text-center lg:text-2xl lg:mb-10 mb-5 text-[16px] font-mont mt-10">
            Your time and skills are invaluable
          </p>
        </div>
        <div className="bg2 lg:w-[80%]">
          <div className="bg-primary text-black py-8">
            <div className="container mx-auto text-center">
              <div className="mt-4 m-10">
                <input
                  type="text"
                  required
                  id="firstname"
                  className="w-full bg-white text-primary border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Full Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mt-4 m-10">
                <input
                  type="tel"
                  required
                  id="phone"
                  className="w-full bg-white text-primary border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-4 m-10">
                <input
                  type="email"
                  required
                  id="email"
                  className="w-full bg-white text-black border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <h3 className="md:text-2xl text-[16px] font-bold mb-4">
                  What skill(s) do you currently have?
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleDonationClick("Public Speaking")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Public Speaking
                  </button>
                  <button
                    onClick={() => handleDonationClick("Social Media")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Social Media
                  </button>
                  <button
                    onClick={() => handleDonationClick("Writing")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Writing
                  </button>
                  <button
                    onClick={() => handleDonationClick("Graphic Design")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg text-md lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Graphic Design
                  </button>
                </div>
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block mb-5 font-semibold"
                >
                  You can add your own skill
                </label>
                <input
                  type="text"
                  id="custom-amount"
                  className="w-full bg-white text-primary text-black border-2 border-gold rounded-lg p-3 lg:text-xl text-[12px] focus:outline-none focus:border-opacity-50"
                  placeholder="Enter skill"
                  value={customSkill}
                  onChange={(e) => setCustomSkill(e.target.value)}
                />
                <div className="flex justify-center">
                  <div className="bg-white w-[130px] mt-2 lg:text-[16px] text-[12px] font-semibold rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                    <button onClick={() => handleDonationClick(customSkill)}>
                      Add Skill
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-1">
                  Selected Skills
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-primary text-black bg-white p-2  rounded-lg flex items-center"
                    >
                      {skill}
                      <button
                        className="ml-2 text-black"
                        onClick={() => handleRemoveSkill(index)}
                      >
                        <IoIosRemoveCircle />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-4 px-2">
                  What Interest do you have?
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  <button
                    onClick={() => handleInterestClick(" Women Empowerment")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Women Empowerment
                  </button>
                  <button
                    onClick={() => handleInterestClick(" Gender Equality")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Gender Equality
                  </button>
                  <button
                    onClick={() => handleInterestClick("Poverty Eradication")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Poverty Eradication
                  </button>
                  <button
                    onClick={() => handleInterestClick("Education")}
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                  >
                    Education
                  </button>
                </div>
              </div>
              <div className="mt-4 m-10">
                <label
                  htmlFor="custom-amount"
                  className="block mb-5 font-semibold"
                >
                  You can add your own Interest
                </label>
                <input
                  type="text"
                  id="custom-amount"
                  className="w-full bg-white text-primary text-black border-2 border-gold rounded-lg p-3 text-lg focus:outline-none focus:border-opacity-50"
                  placeholder="Enter custom skill"
                  value={customInterest}
                  onChange={(e) => setCustomInterest(e.target.value)}
                />
                <div className="flex justify-center">
                  <div className="bg-white w-[130px] mt-2 font-semibold rounded-xl lg:text-[16px] text-[12px] hover:bg-black cursor-pointer hover:text-white p-3">
                    <button onClick={() => handleInterestClick(customInterest)}>
                      Add Interest
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-1">
                  Selected Interest
                </h3>
                <div className="flex p-4 flex-wrap justify-center gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-primary text-black bg-white p-2 lg:text-xl text-[12px]  rounded-lg flex items-center"
                    >
                      {interest}
                      <button
                        className="ml-2 text-black"
                        onClick={() => handleRemoveInterest(index)}
                      >
                        <IoIosRemoveCircle />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-4">
                  Days Available
                </h3>
                <div className="flex flex-wrap p-4 justify-center gap-4">
                  <button
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                    onClick={() => handleDayClick("Monday")}
                  >
                    Monday
                  </button>
                  <button
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                    onClick={() => handleDayClick("Tuesday")}
                  >
                    Tuesday
                  </button>
                  <button
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                    onClick={() => handleDayClick("Wednesday")}
                  >
                    Wednesday
                  </button>
                  <button
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                    onClick={() => handleDayClick(" Thursday")}
                  >
                    Thursday
                  </button>
                  <button
                    className="bg-white text-primary hover:bg-opacity-80 py-3 px-6 rounded-lg lg:text-xl text-[12px] text-black font-semibold transition duration-300"
                    onClick={() => handleDayClick("Friday")}
                  >
                    Friday
                  </button>
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-[16px] font-bold mb-4">
                  Selected Days
                </h3>
                <div className="flex p-4 justify-center gap-4">
                  {daysAvailable.map((day, index) => (
                    <div
                      key={index}
                      className="lg:text-xl text-[12px] text-black bg-white p-2  rounded-lg flex items-center"
                    >
                      {day}
                      <button
                        className="ml-2 text-black"
                        onClick={() => handleRemoveDay(day)}
                      >
                        <IoIosRemoveCircle />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-white w-[130px] lg:text-xl text-[12px] font-semibold mt-5 rounded-xl hover:bg-black cursor-pointer hover:text-white p-3">
                  <button onClick={handleSuccess}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showSuccessMessage && (
        <div className="slide-in-bottom-right">{successMessage}</div>
      )}
    </div>
  );
}

export default Page;
