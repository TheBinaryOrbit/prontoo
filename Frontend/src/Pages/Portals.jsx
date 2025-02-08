import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const content = [
    {
        title1: "Our Customer",
        title2: "Application",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        progressbas: [
            {
                title: "Discover Food Outlets",
                perc: 79
            },
            {
                title: "Place Orders",
                perc: 60
            }
        ]
    },
    {
        title1: "Our Admin",
        title2: "Portal",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        progressbas: [
            {
                title: "Detailed Analytics and Reporting",
                perc: 79
            },
            {
                title: "Performance Insights",
                perc: 60
            }
        ]
    },
    {
        title1: "Our Vendor",
        title2: "Portal",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        progressbas: [
            {
                title: "Performance Tracking",
                perc: 60
            },
            {
                title: "Order Management",
                perc: 70
            },
            {
                title: "Customer Interaction",
                perc: 80
            }
        ]
    },
    {
        title1: "Our Super Admin",
        title2: "Portal",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        progressbas: [
            {
                title: "Detailed Analytics and Reporting",
                perc: 79
            },
            {
                title: "Performance Insights",
                perc: 60
            }
        ]
    },
]

const Portals = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Duration of the animation (in ms)
            easing: 'ease-in-out',  // Easing function for the animation
            once: true,  // Whether the animation should happen only once
        });
    }, []);

    return (
        <div className="p-6 mt-10">
            <div className="mb-12  text-center flex justify-center flex-col items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-bold text-gray-900 py-5 font-Poppins tracking-wider" data-aos="fade-up">
                    Prontoo<span className="text-logocolor"> Eco-System</span>
                </h2>
                <p className="sm:text-lg text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5" data-aos="fade-up">
                    Skip the lines: Order directly from your phone and pick up your meal when it’s ready - no more waiting.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {
                    content.map((item, index) => (
                        <div key={index} className={`w-full h-fit flex  flex-col-reverse justify-between items-center  md:gap-20 mb-10 ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className='md:w-[40%] p-5 top-[10vh] left-0'>
                                <h2 className="text-3xl sm:text-3xl text-gray-800 font-Poppins font-medium text-left mb-2 md:mb-4" data-aos="fade-up">
                                    {item.title1}<span className="text-logocolor " > {item.title2}</span>
                                </h2>
                                <p className='text-justify text-lg sm:text-md text-gray-500 mb-6' data-aos="fade-up">{item.description}</p>
                                {
                                    item.progressbas.map((progress, i) => (
                                        <li key={i} className="flex items-start gap-3" data-aos="fade-up">
                                            <div>
                                                <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 mb-3">
                                                    {i+1}. {progress.title}
                                                </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                            <div className='md:w-[60%] h-[20rem] md:h-[30rem] p-5'>
                                <canvas className='w-full h-full bg-slate-300 rounded-2xl' data-aos="fade-up"></canvas>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Portals;
