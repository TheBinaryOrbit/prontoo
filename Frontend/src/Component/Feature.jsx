import React, { useEffect } from "react";
import img from "../assets/image4.png";
import image from "../assets/butcherknife.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation (in ms)
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation happens only once
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 h-fit mt-20 mb-24">
      <div
        className="relative flex flex-col md:flex-row items-center md:items-start justify-between md:h-[40vh] sm:px-6 md:px-10 overflow-visible rounded-3xl"
        data-aos="fade-up" // Animation on scroll
      >
        <div className="absolute w-full h-full bg-logocolor top-0 left-0 clip-path-curve rounded-3xl overflow-hidden shadow-2xl"></div>

        {/* Pizza Image Overflowing */}
        <img
          src={image}
          alt="Pizza"
          className="absolute -top-[100px] right-4 sm:-right-[10px] bg-white w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full scale-125 duration-300 hover:rotate-360"
          data-aos="zoom-in" // Animation on scroll
        />

        {/* Mobile App Preview */}
        <div className="relative rounded-3xl" data-aos="fade-left">
          <img
            src={img}
            alt="App Preview"
            className="h-96 sm:h-[500px] md:h-[450px] rounded-2xl border-4 border-black transform -translate-y-[30px] sm:-translate-y-[50px] hover:rotate-3 duration-300"
          />
        </div>

        {/* Download Section */}
        <div
          className="flex-1 flex flex-col justify-center items-start p-4 md:ml-10 z-50"
          data-aos="fade-right"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-Barlow  tracking-[2px] font-bold text-white text-left mb-5 mt-0 md:mt-8">
            Download <br /> our Mobile App
          </h2>
          <div className="mt-3 flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            ].map((src, index) => (
              <img
                key={index}
                className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white  cursor-pointer hover:scale-105 duration-300 "
                src={src}
                alt={`User ${index + 1}`}
                // data-aos="zoom-in" // Animation on scroll
              />
            ))}
          </div>
        </div>

        {/* Play Store and App Store Buttons */}
        <div
          className="flex flex-row justify-center items-center md:items-end gap-4 h-full mt-8 md:mt-0 z-40"
          data-aos="fade-up"
        >
          {[
            {
              label: "Play Store",
              rating: "4.5/5",
              img: "https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000",
            },
            {
              label: "App Store",
              rating: "4.8/5",
              img: "https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000",
            },
          ].map((store, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col justify-center items-center space-x-2 bg-white px-6 py-4 rounded-t-full transition duration-300"
            >
              <img
                src={store.img}
                alt={store.label}
                className="w-5 sm:w-6"
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold">{store.label}</p>
                <p className="text-xs text-gray-500">{store.rating}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
