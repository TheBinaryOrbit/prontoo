import React, { useEffect } from 'react';
import img1 from '../assets/who.png';
import img2 from '../assets/key.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,  // Duration of the animation (in ms)
    easing: 'ease-in-out',  // Easing function for the animation
    once: true,  // Whether the animation should happen only once
  });

  return (
    <div className="relative p-6 md:p-12 max-w-7xl mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background gradients can be uncommented for additional visual effects */}
      </div>

      {/* Who We Are Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12" data-aos="fade-up">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-playfair italic text-center md:text-left text-gray-800">
            Who We Are <span className="font-serif">?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            Prontoo is your go-to app for quick and convenient food ordering
            from in-house vendors. Whether you're at a university, a corporate
            office, or any other organization with on-site food vendors.
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-6 font-roboto leading-relaxed">
            Prontoo helps you skip the lines and enjoy your meals faster - all
            with just a few taps.
          </p>
          <button className="bg-logocolor text-sm sm:text-base lg:text-lg font-bold hover:scale-105 duration-300 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500">
            Know More
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={img1}
            alt="Who We Are Illustration"
            className="max-w-full scale-90"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="relative mt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6" data-aos="fade-up">
          {/* Left Section: Features List */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 font-playfair italic text-center md:text-left text-gray-800">
              Key Features
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Explore Vendor Menus",
                  description:
                    "Browse the latest menus from your organization’s food vendors, with detailed item descriptions, prices, and customization options.",
                },
                {
                  title: "Seamless Ordering & Payment",
                  description:
                    "Select, customize, and pay for your meal directly in the app, ensuring a quick, secure, and cashless experience.",
                },
                {
                  title: "Real-Time Order Updates",
                  description:
                    "Stay updated with notifications about your order status, so you know exactly when it’s ready to pick up.",
                },
                {
                  title: "Multiple Payment Methods",
                  description:
                    "Choose from a variety of payment options including UPI, Pay later apps, and more.",
                },
                {
                  title: "24/7 Customer Support",
                  description:
                    "Need assistance? Our customer support team is available anytime to help with your questions or issues.",
                },
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3" data-aos="fade-up">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white font-bold">
                    •
                  </span>
                  <div>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">
                      {feature.title}
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={img2}
              alt="Features Illustration"
              className="max-w-full scale-90"
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
