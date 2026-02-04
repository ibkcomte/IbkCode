import React from "react";

import {
  BookOpen,
  User,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#f8f8f8] dark:bg-slate-950 p-4 sm:p-8 md:p-16 flex justify-center items-center">
      <div className=" rounded-lg shadow-2xl w-full max-w-6xl p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row">
        <div className="font-serif lg:w-1/3 pr-0 lg:pr-12 space-y-10 border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 mb-8 lg:mb-0">
          <h2 className="text-3xl font-extrabold italic tracking-widest text-center lg:text-left">
            CONTACT ME
          </h2>
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-teal-200">LET'S</span>
            <h3 className="text-2xl font-light">Talk About Ideas</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <BookOpen className="text-gray-600 hover:text-teal-400" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Address
                </p>
                <p className="font-medium text-gray-800">Lagos, Nigeria.</p>
              </div>
            </div>

            {/* Freelance */}
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <User className="text-gray-600 hover:text-teal-400" />
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Freelance
                </p>
                <p className="text-sm font-light text-teal-200">
                  Available Right Now
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 mt-1">
                <ShoppingBag className="text-gray-600 hover:text-teal-400"/>
              </div>
              <div>
                <p className="text-sm font-light uppercase text-gray-900">
                  Email
                </p>
                <p className="font-medium text-gray-800">
                  cathycomte30@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 lg:pl-12">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="text-xs uppercase text-gray-500 block mb-2"
                >
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:border-teal-500 focus:outline-none transition duration-300"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="text-xs uppercase text-gray-500 block mb-2"
                >
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:border-green-500 focus:outline-none transition duration-300"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="text-xs uppercase text-gray-500 block mb-2"
              >
                YOUR SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full p-3 border-b border-gray-300 focus:border-lime-500 focus:outline-none transition duration-300"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase text-gray-500 block mb-2"
              >
                YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                required
                className="w-full p-4 border border-gray-300 focus:border-lime-500 focus:outline-none transition duration-300 resize-none"
              />
            </div>

            {/* Footer and Button */}
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center text-xs  text-gray-500">
                <input type="checkbox" id="terms" required className="mr-2 " />
                <label htmlFor="terms" className="cursor-pointer italic">
                  * Accept the terms and conditions.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#00CED1] hover:bg-teal-200 text-white font-semibold py-3 px-8 transition duration-300 rounded-lg shadow-md"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
