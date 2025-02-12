import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
import r4 from '../assets/r4.png'
import r5 from '../assets/r5.png'
import r6 from '../assets/r6.png'
import chef from '../assets/chef.png'

const Restaurant = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-800 py-10'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  p-5">
        <div className="mb-12 text-center flex justify-center flex-col items-center">
          <p className="flex justify-start items-center border-[1px] border-white px-3 rounded-lg text-xs  gap-1 mb-4  text-white font-semibold">
            <IoFastFoodOutline size={12} /><span className="text-xs -translate-y-[1px] font-semibold py-1">Outlet Types</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white font-lora mb-4  tracking-wider" data-aos="fade-up">
            Restaurant Type
            {/* <span className="text-logocolor"> Type</span> */}
          </h2>
          <p className="text-lg sm:text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5 font-lora" data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nisi consequatur. Est voluptatibus
          </p>
        </div>
        <div className="relative mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6" data-aos="fade-up">
            <div className="w-full h-fit flex md:flex-row flex-col-reverse justify-between items-start    md:gap-20  mb-10">
              <div className='md:w-1/2 p-5 top-[10vh] left-0 justify-center items-start flex flex-col'>
                <h2 className="text-3xl  font-bold text-white font-lora tracking-wider capitalize  text-left mb-1 md:mb-6">
                  Built for all types of <span className="text-logocolor">food business</span>
                </h2>
                <p className='text-justify text-lg sm:text-md text-gray-500 mb-6 font-lora'>The all-in-one Restaurant Management System for all types of restaurant formats and food outlets . Your SimpleEasy-in-house Food ordering</p>
                <div className="grid grid-cols-3 gap-5 mb-6">
                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r1} alt="Noodles" className="w-3/4 h-auto object-cover duration-200" />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Seafood</h4>
                  </div>

                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r2} alt="Soup" className="w-3/4 h-auto object-cover duration-200" />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Fast Food</h4>
                  </div>

                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r3} alt="Burger" className="w-3/4 h-auto object-cover duration-200 scale-110 " />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Fine Dining</h4>
                  </div>

                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r4} alt="Indian Food" className="w-3/4 h-auto object-cover duration-200" />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Diner</h4>
                  </div>
                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r5} alt="Noodles" className="w-3/4 h-auto object-cover duration-200" />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Cloud Kitchen</h4>
                  </div>

                  <div className="rounded-2xl w-full h-full flex flex-col justify-center items-center p-4 group transition bg-white">
                    <img src={r6} alt="Soup" className="w-3/4 h-auto object-cover duration-200" />
                    <h4 className="font-bold text-lg text-[#6d432d] text-nowrap">Buffet</h4>
                  </div>
                </div>

                <button
                  className="py-3 px-6 max-sm:w-full group rounded-xl  bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-between items-center gap-2 hover:scale-105 font-lora"
                  data-aos="fade-up" // AOS fade-up animation
                  onClick={() => navigate('/restauranttype')}
                >
                  Explore Restaurant Type  <FaArrowRight className='text-xs translate-y-[1px] group-hover:translate-x-1 duration-300' />
                </button>
              </div>
              <div className="md:w-1/2 h-fit p-5 justify-center items-center flex">
                <div className='w-full h-full bg-logocolor rounded-full p-5 overflow-hidden'>
                  <img src={chef} alt="" className=' translate-y-5' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
