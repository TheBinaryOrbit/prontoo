import React from 'react';

const Trusted = () => {
    const trustedItems = [
        { id: 1, label: 'McDonald\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 2, label: 'Starbucks', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 3, label: 'Subway', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 4, label: 'Pizza Hut', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 5, label: 'Burger King', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 6, label: 'KFC', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 7, label: 'Domino\'s', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
        { id: 8, label: 'Taco Bell', icon: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png' },
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
            >
              <a href="#" className="flex justify-center items-center">
                <img
                  src={item.icon}
                  alt={item.label}
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
