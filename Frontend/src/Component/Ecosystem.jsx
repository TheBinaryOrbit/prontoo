import React from 'react'
import Portals from '../Pages/Portals'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ecosystem from '../assets/ecosystem.png'
const Ecosystem = () => {
    const navigate = useNavigate()
    return (
        <section className="py-20">
            <div className="mb-0 md:mb-12 text-center flex justify-center flex-col items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-900 py-5 font-lora tracking-wider" data-aos="fade-up">
                    Prontoo<span className="text-logocolor"> Eco-System</span>
                </h2>
                <p className="text-lg sm:text-md font-normal font-lora text-gray-500 max-w-md md:max-w-2xl mx-auto px-5 mb-16" data-aos="fade-up">
                    Skip the lines: Order directly from your phone and pick up your meal when it’s ready - no more waiting.
                </p>
            </div>
            <div className='max-w-7xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center h-fit '>
                <div className='md:w-1/2 p-5'>
                    <h2 className="md:text-3xl  text-2xl font-bold text-black  capitalize  text-left mb-1 md:mb-6 font-lora tracking-wider" data-aos="fade-up">
                        Prontoo Eco-System<span className="text-logocolor "> Provides You</span>
                    </h2>
                    <p className='text-justify font-lora text-lg sm:text-md text-gray-500 mb-6' data-aos="fade-up">The all-in-one Restaurant Management System for all types of restaurant formats and food outlets . Your SimpleEasy-in-house Food ordering</p>
                    <div className='flex flex-col mb-12 justify-start items-start  cursor-pointer'>
                        <div className='pr-5 py-2 border-b-2 border-orange-600' data-aos="fade-up">
                            <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105  duration-300'>1. Customer Application</h1>
                        </div>  
                        <div className='pr-5 py-2 border-b-2 border-orange-600 cursor-pointer' data-aos="fade-up" data-aos-delay="200">
                            <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105 duration-300'>2. Admin Portal</h1>
                        </div>
                        <div className='pr-5 py-2 border-b-2 border-orange-600 cursor-pointer' data-aos="fade-up" data-aos-delay="400">
                            <h1 className='text-xl font-bold font-lora tracking-wider hover:scale-105 duration-300'>3. Vendor Portal</h1>
                        </div>
                    </div>
                    <button
                        className="py-3 px-6 max-sm:w-fit group rounded-xl font-lora bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-between items-center gap-2 hover:scale-105"
                    data-aos="fade-up" // AOS fade-up animation
                    onClick={()=> navigate('/ecosystem')}
                    >
                        Explore More<FaArrowRight className='text-xs translate-y-[1px] group-hover:translate-x-1 duration-300' />
                    </button>
                </div>
                <div className='md:w-1/2 h-fit px-5'>
                        <div className='w-full bg-[#fe4c38d6] h-full rounded-2xl group overflow-hidden brightness-95 hover:brightness-100 sm:mb-0 mb-10' >
                            <img src={ecosystem} alt="" className='group-hover:scale-105 group-hover:-rotate-2 duration-700'/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Ecosystem
