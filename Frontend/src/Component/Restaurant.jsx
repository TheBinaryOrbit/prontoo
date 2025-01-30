import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


import img1 from '../assets/who.png';
import img2 from '../assets/key.png';
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
  const navigate = useNavigate()
  return (
    <div className=' bg-gray-800 py-10'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  p-5">
        <div className="mb-12 text-center flex justify-center flex-col items-center">
          <p className="flex justify-start items-center border-[1px] border-white px-3 rounded-lg text-xs  gap-1 mb-4  text-white font-semibold">
            <IoFastFoodOutline size={12} /><span className="text-xs -translate-y-[1px] font-semibold py-1">Outlet Types</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white font- mb-4 font-Barlow tracking-wider"  data-aos="fade-up">
            Restaurant Type
            {/* <span className="text-logocolor"> Type</span> */}
          </h2>
          <p className="text-lg sm:text-md font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto px-5" data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, nisi consequatur. Est voluptatibus
          </p>
        </div>
        <div className="relative mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6" data-aos="fade-up">
            <div className="w-full h-fit flex md:flex-row flex-col-reverse justify-between items-start    md:gap-20  mb-10">
              <div className='md:w-1/2 p-5 top-[10vh] left-0'>
                <h2 className="text-3xl  font-bold text-white font-Barlow tracking-wider capitalize  text-left mb-1 md:mb-6">
                  Built for all types of food <span className="text-logocolor ">business</span>
                </h2>
                <p className='text-justify text-lg sm:text-md text-gray-500 mb-6'>The all-in-one Restaurant Management System for all types of restaurant formats and food outlets . Your SimpleEasy-in-house Food ordering</p>
                <div className='grid grid-cols-2 grid-rows-2 gap-10 mb-6'>
                  <canvas className='bg-slate-200 rounded-xl w-full h-full'></canvas>
                  <canvas className='bg-slate-200 rounded-xl w-full h-full'></canvas>
                  <canvas className='bg-slate-200 rounded-xl w-full h-full'></canvas>
                  <canvas className='bg-slate-200 rounded-xl w-full h-full'></canvas>
                </div>
                <button
                className="py-3 px-6 max-sm:w-full group rounded-xl font-roboto bg-logocolor text-white text-sm leading-4 whitespace-nowrap transition-all duration-300 font-bold flex justify-between items-center gap-2 hover:scale-105"
                data-aos="fade-up" // AOS fade-up animation
                onClick={()=> navigate('/restauranttype')}
              >
                Explore Restaurant Type  <FaArrowRight className='text-xs translate-y-[1px] group-hover:translate-x-1 duration-300' />
              </button>
              </div>
              <div className='md:w-1/2 h-[20rem] md:h-[30rem] p-5'>
                <canvas className='w-full h-full bg-slate-300 rounded-2xl'></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
