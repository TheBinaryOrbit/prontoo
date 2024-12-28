import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/admin.png';
import { FaPlay } from 'react-icons/fa';

const LaptopView = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
    <div>
      <section
        className={`bg-white py-10 text-center relative transform transition-transform duration-700 overflow-x-hidden`}
      >
        {/* Background shape */}
        <div className="absolute bg-gray-300 top-32 left-0 right-0 bottom-0 bg-cover bg-center opacity-40 rounded-t-full"></div>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="xl:w-10/12 relative">
              {/* Video panel */}
              <div className="relative">
                <a href="#" className="block">
                  <img
                    ref={sectionRef}
                    src={img}
                    alt="Shop Banner"
                    className={`w-full h-auto rounded-lg ${ isInView ? 'scale-105' : 'scale-90' } duration-1000`}
                    loading="lazy"
                  />
                  <button className="bg-white rounded-full p-6 sm:p-7 shadow-play z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
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
