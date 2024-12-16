// pages/become-an-investor.js
"use client";
import React, { useState } from "react";
import Navbar2 from "@/components/Navbar2";

import Mobilebar from "@/components/Mobilebar";

const BecomeInvestorForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Here, you would handle the actual submission, like sending data to a server
  };

  return (
    <div className="bg2 font-mont">
      <Navbar2 />

      <div className="container mx-auto px-5">
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto my-10 p-4 border border-green-500 rounded">
            <p className="text-green-700 text-center">
              Form submitted successfully!
            </p>
          </div>
        ) : (
          <div>
            <div className="max-w-2xl px-5 mx-auto my-10">
              <h2 className="text-2xl font-bold mb-6">
                Why You Should Invest in Our Organization?
              </h2>
              <p className="text-gray-700 mb-4">
                We are on a transformative mission to ignite enduring change by
                championing economic empowerment and forging gender equality. By
                providing comprehensive entrepreneurship training, fostering
                access to financial resources, and creating a supportive
                ecosystem for women-led enterprises, we strive to break down
                barriers, challenge gender norms, and create pathways for women
                to achieve economic independence as an organization.
              </p>
              <p className="text-gray-700 mb-4">
                ➢ We want to offer you this exciting opportunity to invest in
                our organization in creating hope and igniting greatness.
              </p>
              <p className="text-gray-700 mb-4">
                ➢ This could provide you or company with an opportunity to
                contribute to the Sustainable Development Goals
              </p>
              <p className="text-gray-700 mb-4">
                ➢ EMINENCE LEAD INTERNATIONAL wants to extend a formal
                invitation to you or your company to invest in our
                organizational programs and projects.
              </p>
              <p className="text-gray-700 mb-4">
                ➢ We believe there is strength in numbers and that through
                fostering sustainable support, we are able to make an even more
                meaningful impact in the world. Please follow the form to
                express your interest in becoming an investor today. The
                Founders of EMINENCE LEAD INTERNATIONAL will follow up with you
                shortly.
              </p>
            </div>
            <form
              className="max-w-2xl px-5 mx-auto my-10"
              onSubmit={handleSubmit}
            >
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name of Investor or Company
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Country of Origin Field */}
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Country of Origin
                </label>
                <input
                  type="text"
                  id="country"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  By submitting this form, you agree to our terms and conditions
                  and acknowledge that the information provided will be used in
                  accordance with our privacy policy.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button
                  className="bg text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeInvestorForm;
