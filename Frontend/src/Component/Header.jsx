import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import navlogo from '../assets/navlogo.png'



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" index-60">
            <div className="flex justify-between items-center px-6 py-5  max-w-full md:max-w-7xl mx-auto bg-[#23222a] rounded-b-3xl">
                {/* Logo */}
                <img src={navlogo} alt="" className="w-36" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <div className="group relative">
                        <button className="text-white hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                            Point of Sale <FaCaretDown size={12} className={` translate-y-[1px] group-hover:rotate-180 duration-300`} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 2
                            </a>
                        </div>
                    </div>
                    <div className="group relative">
                    <button className="text-white hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                                Add-Ons <FaCaretDown size={12} className={` translate-y-[1px] group-hover:rotate-180 duration-300`} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 2
                            </a>
                        </div>
                    </div>
                    <div className="group relative">
                    <button className="text-white hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                                Outlets Types <FaCaretDown size={12} className={` translate-y-[1px] group-hover:rotate-180 duration-300`} />
                        </button>
                        {/* Dropdown */}
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Option 2
                            </a>
                        </div>
                    </div>
                    <a href="#" className="text-white hover:text-logocolor font-medium">
                        Pricing
                    </a>
                </nav>

                {/* Right-side Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2  rounded-2xl hover:bg-logocolor-600 duration-300 font-bold text-white bg-logocolor flex justify-center items-center gap-1 hover:scale-105">
                        <HiSpeakerphone size={16} className={` translate-y-[1px] group-hover:rotate-180 duration-300`} /> Book A Demo 
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        className="text-white duration-300"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-[#23222a]  md:hidden duration-700">
                        <nav className="flex flex-col space-y-4 px-6 py-4">
                            <a href="#" className="text-white hover:text-logocolor">
                                Point of Sale
                            </a>
                            <a href="#" className="text-white hover:text-logocolor">
                                Add-Ons
                            </a>
                            <a href="#" className="text-white hover:text-logocolor">
                                Outlet Types
                            </a>
                            <a href="#" className="text-white hover:text-logocolor">
                                Pricing
                            </a>
                            <a href="#" className="text-white hover:text-logocolor">
                                Sign In
                            </a>
                            <button className="px-4 py-2 text-white rounded-md bg-logocolor">
                                Book A Demo
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
