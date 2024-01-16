// pages/become-a-partner.js
"use client";
import React, { useState } from "react";

import Navbar2 from "@/components/Navbar2";
import Mobilebar from "@/components/Mobilebar";

const BecomePartnerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className=" bg2">
      <Navbar2 />
      <Mobilebar />
      <div></div>
      <div className="container mx-auto px-4 font-mont">
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto my-10 p-4 border border-green-500 rounded">
            <p className="text-green-700 text-center">
              Form submitted successfully!
            </p>
          </div>
        ) : (
          <form className="max-w-2xl mx-auto my-10" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold ">Become a Partner</h2>

            {/* Why Become a Partner Section */}
            <div className="mb-4">
              <h1 className="mb-2">Why you should become a Partner</h1>
              <p className="text-gray-700 mb-4">
                EMINENCE LEAD INTERNATIONAL is committed to establishing
                multisector and inclusive partnerships, with a participatory
                approach at the forefront and diversity as a core value.
              </p>
              <p className="text-gray-700 mb-4">
                Our partners have the opportunity to develop a tailored action
                plan with EMINENCE LEAD INTERNATIONAL that can include specific
                deliverables. Partnering with the organization also provides a
                platform for engagement and coordination of global issues and
                implementation strategies.
              </p>
              <p className="text-gray-700 mb-4">
                We believe there is strength in numbers and that through
                fostering sustainable partnerships we are able to make an even
                more meaningful impact in the world.
              </p>
              <p className="text-gray-700 mb-4">
                Please follow the form to express your interest in becoming a
                Partner.
              </p>
              <p className="text-gray-700 mb-4">
                If you have any questions, do not hesitate to write to{" "}
                <span className="font-bold"> info@eminencelead.org</span>
              </p>
            </div>

            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name of Partner/Organization
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
                Email of Partner/Organization
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Partnership Type Field - Multiple Choice */}
            <fieldset className="mb-4">
              <legend className="block text-gray-700 text-sm font-bold mb-2">
                What kind of partnership are you looking for/offering?
              </legend>
              <div className="flex flex-col gap-2">
                {/* List all options as checkboxes */}
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="advocacy"
                  />
                  <span className="ml-2">Advocacy-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="content"
                  />
                  <span className="ml-2">Content-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="event"
                  />
                  <span className="ml-2">Event-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="product"
                  />
                  <span className="ml-2">Product-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="service"
                  />
                  <span className="ml-2">Service-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="research"
                  />
                  <span className="ml-2">Research-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="technology"
                  />
                  <span className="ml-2">Technology-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="training"
                  />
                  <span className="ml-2">Training-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="marketing"
                  />
                  <span className="ml-2">Marketing-based Partnership</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="community"
                  />
                  <span className="ml-2">Community-based Partnership</span>
                </label>
              </div>
            </fieldset>

            {/* Submit Button */}
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
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BecomePartnerForm;
