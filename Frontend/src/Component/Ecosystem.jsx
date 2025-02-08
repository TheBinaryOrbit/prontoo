import React from 'react'
import Portals from '../Pages/Portals'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Ecosystem = () => {
    const navigate = useNavigate()
    return (
        <section className="py-10">
            <div className="mb-12 md:mb-0 text-center flex justify-center flex-col items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-gray-900 py-5 font-Barlow tracking-wider" data-aos="fade-up">
                    Prontoo<span className="text-logocolor"> Eco-System</span>
                </h2>
                <p className="text-lg sm:text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5" data-aos="fade-up">
                    Skip the lines: Order directly from your phone and pick up your meal when it’s ready - no more waiting.
                </p>
            </div>
            <div className='max-w-7xl mx-auto flex md:flex-row flex-col-reverse justify-between items-center h-[40rem] '>
                <div className='md:w-1/2 p-5'>
                    <h2 className="md:text-3xl  text-2xl font-bold text-black  capitalize  text-left mb-1 md:mb-6 font-Barlow tracking-wider" data-aos="fade-up">
                        Prontoo Eco-System<span className="text-logocolor "> Provides You</span>
                    </h2>
                    <p className='text-justify text-lg sm:text-md text-gray-500 mb-6' data-aos="fade-up">The all-in-one Restaurant Management System for all types of restaurant formats and food outlets . Your SimpleEasy-in-house Food ordering</p>
                    <div className='flex flex-col mb-12 justify-start items-start  cursor-pointer'>
                        <div className='pr-5 py-2 border-b-2 border-orange-600' data-aos="fade-up">
                            <h1 className='text-xl font-bold font-roboto tracking-wider hover:scale-105 duration-300'>1. Customer Application</h1>
                        </div>  
                        <div className='pr-5 py-2 border-b-2 border-orange-600 cursor-pointer' data-aos="fade-up" data-aos-delay="200">
                            <h1 className='text-xl font-bold font-roboto tracking-wider hover:scale-105 duration-300'>2. Admin Portal</h1>
                        </div>
                        <div className='pr-5 py-2 border-b-2 border-orange-600 cursor-pointer' data-aos="fade-up" data-aos-delay="400">
                            <h1 className='text-xl font-bold font-roboto tracking-wider hover:scale-105 duration-300'>3. Vendor Portal</h1>
                        </div>
                    </div>
                    <button
                        className="py-3 px-6 max-sm:w-fit group rounded-xl font-roboto bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-between items-center gap-2 hover:scale-105"
                    data-aos="fade-up" // AOS fade-up animation
                    onClick={()=> navigate('/ecosystem')}
                    >
                        Explore More<FaArrowRight className='text-xs translate-y-[1px] group-hover:translate-x-1 duration-300' />
                    </button>
                </div>
                <div className='md:w-1/2 h-[20rem] md:h-[30rem] p-5'>
                        <canvas className='w-full h-full bg-slate-300 rounded-2xl' data-aos="fade-up"></canvas>
                </div>
            </div>
        </section>
    )
}

export default Ecosystem
