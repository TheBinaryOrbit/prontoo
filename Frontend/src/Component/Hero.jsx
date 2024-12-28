import React from 'react'
import { FaPlay } from "react-icons/fa";
import heroimage from '../assets/hero.png'

const Hero = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between max-w-7xl mx-auto bg-pink p-4  md:p-10 w-full md:h-[70vh] h-fit gap-10'>
            <div className='flex flex-col  justify-center items-center md:items-start w-full md:w-[50%]  md:h-full h-fit'>
                <h1 className='text-4xl sm:text-6xl font-playfair capitalize font-bold italic leading-[50px] sm:leading-[70px] mb-6 text-center md:text-left'>Fast & <span className='text-logocolor capitalize'>Easy-in-house</span> Food <span className='text-logocolor capitalize'>ordering</span></h1>
                <p className='text-lg sm:text-2xl  mb-6  italic text-center md:text-left'>Say good bye to long queues and say hello to convenience !</p>
                <div className='flex justify-between gap-5 sm:gap-10 items-center'>
                    <button className="px-6 py-3  shadow-play rounded-2xl  duration-300 font-bold text-white bg-logocolor  hover:scale-105">
                        Take A Free Demo
                    </button>
                    <button className='bg-white rounded-full p-6 sm:p-7  shadow-play relative z-10'>
                        <div className=' absolute top-0 left-0 h-full w-full bg-logocolor animate-ping  rounded-full z-0' >
                            <p className=' opacity-0'>0</p>
                        </div>
                        <div className='absolute top-0 left-0 h-full w-full bg-white  flex justify-center items-center rounded-full'>
                            <FaPlay className='text-red-600' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[50%]  md:h-full h-fit flex justify-center items-center '>
                {/* <img src={heroimage} alt="" className='sm:w-full w-66' /> */}
            </div>
        </div>
    )
}

export default Hero
