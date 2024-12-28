import React, { useEffect } from 'react';
import img from '../assets/CookingChef.png';
import whyus1 from '../assets/image 1.png';
import whyus2 from '../assets/image 2.png';
import whyus3 from '../assets/image 3.png';
import Barbecue from '../assets/Barbecue.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyProntoo() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,  // Duration of the animation (in ms)
            easing: 'ease-in-out',  // Easing function for the animation
            once: true,  // Whether the animation should happen only once
        });
    }, []);

    return (
        <section className="py-10">
            <div className="mb-14 text-center flex justify-center flex-col items-center">
                <img src={img} alt="" className="w-20 sm:w-28 lg:w-36" data-aos="fade-up" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-900 py-5 italic font-playfair" data-aos="fade-up">
                    Why <span className="text-logocolor">Prontoo</span>
                </h2>
                <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5" data-aos="fade-up">
                    Skip the lines: Order directly from your phone and pick up your meal when it’s ready - no more waiting.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-x-16 gap-y-8 lg:flex-row lg:justify-between mx-auto max-w-full">
                    <div className="w-full lg:w-7/12 flex gap-5 justify-center lg:justify-start p-4 relative" data-aos="fade-up">
                        <img src={Barbecue} alt="" className="absolute -bottom-[10px] -left-[40px] w-24 -rotate-12 lg:flex hidden z-50" />
                        <img src={whyus1} alt="Why Us" className="rounded-xl object-contain shadow-mobile w-[calc(33%-0.5rem)] shadow-red-500" data-aos="fade-up" />
                        <img src={whyus2} alt="Why Us" className="rounded-xl object-contain shadow-mobile w-[calc(33%-0.5rem)] shadow-logocolor scale-110" data-aos="fade-up" />
                        <img src={whyus3} alt="Why Us" className="rounded-xl object-contain shadow-mobile w-[calc(33%-0.5rem)] shadow-red-500" data-aos="fade-up" />
                    </div>
                    <div className="w-full lg:w-5/12">
                        <div className="lg:max-w-xl">
                            <div className="accordion-group" data-accordion="default-accordion">
                                {/** Accordion Item 1 */}
                                <div className="accordion active mb-6" data-aos="fade-up">
                                    <div id="basic-collapse-one" className="accordion-content w-full px-0 overflow-hidden pr-4 active" aria-labelledby="basic-heading-one">
                                        <li className="flex items-start gap-3">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white font-bold">•</span>
                                            <div>
                                                <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">Convenient Payment Options:</p>
                                                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                                    Prontoo connects you with the food vendors within your university, office, or organization, providing a customized dining experience.
                                                </p>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                {/** Accordion Item 2 */}
                                <div className="accordion active" data-aos="fade-up">
                                    <div id="basic-collapse-two" className="accordion-content w-full px-0 overflow-hidden pr-4 active" aria-labelledby="basic-heading-two">
                                        <li className="flex items-start gap-3">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white font-bold">•</span>
                                            <div>
                                                <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">Tailored for Your Organization:</p>
                                                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                                                    Prontoo connects you with the food vendors within your university, office, or organization, providing a customized dining experience.
                                                </p>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyProntoo;
