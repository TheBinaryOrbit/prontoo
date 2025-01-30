import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/admin.png';
import { FaPlay } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LaptopView = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Duration of the animation (in ms)
      easing: 'ease-in-out',  // Easing function for the animation
      once: true,  // Whether the animation should happen only once
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='relative'>
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 w-full h-full opacity-75"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
      </div>
      <section className="pt-14 md:pt-18 bg-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-10">
            <h1
              className="text-4xl sm:text-6xl font-playfair capitalize font-bold italic leading-[50px] sm:leading-[70px] mb-6 text-center"
              data-aos="fade-up" // AOS fade-up animation
            >
              Your Simple Easy-in-house Food <span className="text-logocolor capitalize">ordering</span>
            </h1>

            <div
              className="parent flex flex-col sm:flex-row items-center max-w-xl mx-auto justify-center gap-y-4 sm:justify-between pr-2 sm:pr-1 rounded-full mb-5 relative group transition-all duration-500 md:border border-logocolor focus-within:border-logocolor md:shadow-lg"
              data-aos="fade-up" // AOS fade-up animation
            >
              <input
                type="email"
                className="w-full px-6 py-3.5 text-base max-sm:text-center font-normal shadow-xs max-sm:bg-white text-gray-900 bg-transparent border-none rounded-full placeholder-gray-400 focus:outline-none leading-normal md:flex hidden italic font-playfair"
                placeholder="Let's Connect"
                required
              />
              <button
                className="py-3 px-6 max-sm:w-full rounded-full font-roboto bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all hover:scale-110 duration-300 font-bold sm:absolute top-1.5 right-3"
                data-aos="fade-up" // AOS fade-up animation
              >
                Get Started
              </button>
            </div>

            <p
              className="text-xl font-medium leading-8 text-gray-400 text-center mb-14 max-w-xl mx-auto"
              data-aos="fade-up" // AOS fade-up animation
            >
              Say goodbye to long queues and say hello to convenience!
            </p>
          </div>
        </div>
      </section>
      <section
        className={`bg-white pb-10 text-center relative transform transition-transform duration-700 overflow-x-hidden`}
        data-aos="fade-up" // AOS fade-up animation
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 w-full h-full opacity-75"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto pt-8">
          <div className="flex justify-center">
            <div className="xl:w-10/12 relative">
              {/* Video panel */}
              <div
                className="relative p-5 sm:p-0"
              // AOS fade-up animation
              >
                <a href="#" className="block">
                  <img
                    ref={sectionRef}
                    src={img}
                    alt="Shop Banner"
                    className={`w-full h-auto rounded-lg ${isInView ? 'scale-105' : 'scale-90'} duration-1000`}
                    loading="lazy"
                  // AOS fade-up animation
                  />
                  <button className="bg-white rounded-full p-4 sm:p-7 shadow-play z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
                    <div className="absolute top-0 left-0 h-full w-full bg-logocolor animate-ping rounded-full z-0">
                      <p className="opacity-0">0</p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-white flex justify-center items-center rounded-full">
                      <FaPlay className="text-red-600" />
                    </div>
                  </button>
                  <img
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                    alt="Play Icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaptopView;
