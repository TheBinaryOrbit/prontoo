import React from 'react';

const Hero2 = () => {
    return (
        <>
            <section className="relative pt-14 md:pt-24 bg-gray-50 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 w-full h-full opacity-75"></div>
                    <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
                        <h1 className="text-4xl sm:text-6xl font-playfair capitalize font-bold italic leading-[50px] sm:leading-[70px] mb-6 text-center">
                            Fast & <span className="text-logocolor capitalize">Easy-in-house</span> Food <span className="text-logocolor capitalize">ordering</span>
                        </h1>

                        <div className="parent flex flex-col sm:flex-row items-center max-w-xl mx-auto justify-center gap-y-4 sm:justify-between pr-2 sm:pr-1 sm:bg-white rounded-full mb-5 relative group transition-all duration-500 border border-logocolor focus-within:border-logocolor shadow-lg">
                            <input
                                type="email"
                                className="block w-full px-6 py-3.5 text-base max-sm:text-center font-normal shadow-xs max-sm:bg-white text-gray-900 bg-transparent border-none rounded-full placeholder-gray-400 focus:outline-none leading-normal"
                                placeholder="What’s your work email?"
                                required
                            />
                            <button className="py-3 px-6 max-sm:w-full rounded-full bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all hover:scale-110 duration-300 font-bold sm:absolute top-1.5 right-3">
                                Get Started
                            </button>
                        </div>

                        <p className="text-xl font-medium leading-8 text-gray-400 text-center mb-14 max-w-xl mx-auto">
                            Say goodbye to long queues and say hello to convenience!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero2;
