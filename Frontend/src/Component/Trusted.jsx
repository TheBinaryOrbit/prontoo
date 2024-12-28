import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Trusted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation (in ms)
      easing: 'ease-in-out',  // Easing function for the animation
      once: true,  // Whether the animation should happen only once
    });
  }, []);

  const trustedItems = [
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
    { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h4 className="text-4xl font-extrabold font-playfair italic text-gray-800">
            Trusted <span className="text-logocolor">Restaurants</span>
          </h4>
          <p className="mt-4 text-lg text-gray-600 md:mx-28 italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
          {trustedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 transition-transform hover:scale-105"
              data-aos="fade-up" // Add AOS animation here
              data-aos-duration="1000" // Optional: Set animation duration
            >
              <a href="#" className="flex justify-center items-center">
                <img
                  src={item.icon}
                  alt={item.label}  // Alt text for accessibility
                  className="h-28 w-28 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
