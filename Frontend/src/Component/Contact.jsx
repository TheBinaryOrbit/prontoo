import React, { useEffect } from "react";
import img from '../assets/contact.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Duration of the animation (in ms)
      easing: 'ease-in-out',  // Easing function for the animation
      once: true,  // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between p-6 lg:p-16 max-w-7xl mx-auto" id="contact">
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <h3 className="text-4xl font-bold mb-2 font-lora tracking-wider md:text-left text-center">
          Book a free Demo
        </h3>
        <p className="text-gray-600 mb-6 md:text-left font-lora text-center">
          Get in touch with our team to clarify your queries
        </p>
        <form className="space-y-4" aria-labelledby="contact-form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium font-lora  text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium font-lora  text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium font-lora  text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium font-lora  text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="restaurant" className="block text-sm font-medium font-lora text-gray-700">
              Restaurant Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="restaurant"
              name="restaurant"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-logocolor text-white rounded-xl hover:bg-[#fe4c38ed] duration-300 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-bold font-lora"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section: Illustration */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center" data-aos="fade-left">
        <img
          src={img}
          alt="Illustration"
          className=" scale-90"
        />
      </div>
    </div>
  );
};

export default Contact;
