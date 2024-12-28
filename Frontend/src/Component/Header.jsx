import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import navlogo from '../assets/footerlogo.gif';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Track scroll position
    const { scrollYProgress } = useScroll();

    // Transform the scrollYProgress into a scaling factor
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <header className={`w-full index-60 sticky bg-white top-0 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            {
                !isScrolled ? (
                    <div className="absolute inset-0">
                        <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 w-full h-full opacity-75"></div>
                        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
                    </div>
                )
                    :
                    ""
            }
            {/* Scroll Progress Bar */}
            <div className="flex justify-between items-center px-6 py-5 max-w-full md:max-w-7xl mx-auto rounded-b-3xl">
                {/* Logo */}
                <img src={navlogo} alt="Logo" className="w-36 index-60" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <div className="group relative">
                        <button className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                            Point of Sale <FaCaretDown size={12} className="translate-y-[1px] group-hover:rotate-180 duration-300" />
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
                        <button className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium index-60" >
                            Add-Ons <FaCaretDown size={12} className="translate-y-[1px] group-hover:rotate-180 duration-300" />
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
                        <button className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                            Outlet Types <FaCaretDown size={12} className="translate-y-[1px] group-hover:rotate-180 duration-300" />
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
                    <a href="#" className="text-gray-800 hover:text-logocolor font-medium index-60">
                        Pricing
                    </a>
                </nav>

                {/* Right-side Buttons */}
                <div className="hidden md:flex items-center space-x-4 index-60">
                    <button className="px-4 py-2 rounded-2xl hover:bg-logocolor-600 duration-300 font-bold text-gray-800 bg-logocolor flex justify-center items-center gap-1 hover:scale-105">
                        <HiSpeakerphone size={16} className="translate-y-[1px]" /> Book A Demo
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-gray-800 duration-300" onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>


                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white md:hidden">
                        <nav className="flex flex-col space-y-4 px-6 py-4">
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Point of Sale
                            </a>
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Add-Ons
                            </a>
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Outlet Types
                            </a>
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Pricing
                            </a>
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Sign In
                            </a>
                            <button className="px-4 py-2 text-white font-semibold rounded-md bg-logocolor">
                                Book A Demo
                            </button>
                        </nav>
                    </div>
                )}
            </div>

            <motion.div
                className="h-1 bg-logocolor origin-0"
                style={{ scaleX }} // scaleX will animate from 0 to 1 based on scroll progress
            />
        </header>
    );
};

export default Header;
