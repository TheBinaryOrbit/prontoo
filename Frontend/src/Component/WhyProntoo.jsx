import React, { useEffect } from 'react';
import img from '../assets/CookingChef.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import payment from '../assets/payment.avif'
import payroll from '../assets/payroll.avif'
import superadmin from '../assets/superadmin.jpg'

const content = [
    {
        title1: "Super Admin",
        title2: "POS",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        img : superadmin
    },
    {
        title1: "Payroll",
        title2: "Management",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        img : payroll
    },
    {
        title1: "Pay once a",
        title2: "year",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consectetur ullam illo voluptas totam consequuntur vel fugiat impedit rerum modi possimus voluptatibus alias mollitia assumenda excepturi, ut quos molestias cupiditate eum eligendi nobis.",
        img : payment
    }
]
function WhyProntoo() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 500,  // Duration of the animation (in ms)
            easing: 'ease-in-out',  // Easing function for the animation
            once: true,  // Whether the animation should happen only once
        });
    }, []);

    return (
        <section className="py-10">
            <div className="md:mb-12 mb-5 text-center flex justify-center flex-col items-center">
                <img src={img} alt="" className="w-20 sm:w-28 lg:w-24" data-aos="fade-up" id='whyprontoo' />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-900 py-5 tracking-wider font-lora" data-aos="fade-up">
                    Why <span className="text-logocolor">Prontoo</span>
                </h2>
                <p className="text-md sm:text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5 font-lora" data-aos="fade-up" >
                    Skip the lines: Order directly from your phone and pick up your meal when it’s ready - no more waiting.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {
                    content.map((item , index) => (
                        <div key={index} className="w-full h-fit flex md:flex-row flex-col-reverse justify-between items-center  md:gap-20 relative mb-10">
                            <div className='md:w-1/2 p-2 sm:p-5 md:sticky top-[10vh] left-0'>
                                <h2 className="text-3xl sm:text-3xl text-gray-800 font-lora font-semibold text-left mb-2 md:mb-4" data-aos="fade-up">
                                    {item.title1}<span className="text-logocolor "> {item.title2}</span>
                                </h2>
                                <p className='text-justify text-md leading-7 sm:text-lg text-gray-500 font-lora' data-aos="fade-up">{item.description}</p>
                            </div>
                            <div className='md:w-1/2 h-fit p-5'>
                                <div className='w-full h-full bg--300 rounded-2xl overflow-hidden'  data-aos="fade-up">
                                    <img src={item?.img} alt="" className=' scale-90' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyProntoo;
