import React, { useEffect } from 'react';
import logo from '../assets/navlogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation happens only once
    });
  }, []);

  return (
    <footer className="w-full bg-gradient-to-b from-[#fb5607b3] to-[#fb5607] mt-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8 px-4 sm:px-6 lg:px-8">
          <div
            className="col-span-full mb-10 lg:col-span-2 lg:mb-0 flex justify-center items-center"
          >
            <img src={logo} alt="Logo" className="w-64" data-aos='fade-right' />
          </div>

          <div className="lg:mx-auto text-left" data-aos="fade-up">
            <h4 className="text-lg text-white font-medium mb-7">Links</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-gray-50 font-medium hover:text-gray-100">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Pricing
                </a>
              </li>
              <li>
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg text-white font-medium mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-gray-50 font-medium hover:text-gray-100">
                  Figma UI System
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Icons Assets
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Responsive Blocks
                </a>
              </li>
              <li>
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Components Library
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg text-white font-medium mb-7">Resources</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-gray-50 font-medium hover:text-gray-100">
                  FAQs
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Quick Start
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Documentation
                </a>
              </li>
              <li>
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg text-white font-medium mb-7">Blogs</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-gray-50 font-medium hover:text-gray-100">
                  News
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Tips & Tricks
                </a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  New Updates
                </a>
              </li>
              <li>
                <a href="javascript:;" className=" text-gray-50 font-medium hover:text-gray-100">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full py-7 border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center justify-center flex-col lg:justify-between lg:flex-row"
          >
            <p className="text-sm text-white font-bold ">
              ©<a href="/">Prontoo</a> 2024, All rights reserved.
            </p>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <p className="text-sm text-white font-bold">
                Design and developed by{' '}
                <a
                  href="https://xcentic.in"
                  target="blank"
                  className="tracking-[2px] hover:underline duration-200"
                >
                  XCENTIC
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
