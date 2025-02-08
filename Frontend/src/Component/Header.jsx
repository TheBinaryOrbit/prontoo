import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { motion, useScroll, useTransform } from "framer-motion";
import navlogo from '../assets/nav.png';
import AOS from "aos";
import "aos/dist/aos.css";  // Don't forget to import AOS styles
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
const Header = () => {
    const navigate = useNavigate()
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
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation (in ms)
            easing: "ease-in-out", // Easing function for the animation
            once: true, // Whether the animation happens only once
        });
    }, []);

    return (
        <header
            className={`w-full index-60 sticky bg-white top-0 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
        // Adding fade-down animation to the header
        >
            {
                !isScrolled ? (
                    <div className="absolute inset-0">
                        <div className="bg-gradient-to-r from-blue-50 via-white to-pink-50 w-full h-full opacity-75"></div>
                        <div className="absolute top-10 left-10 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
                    </div>
                )
                    :
                    ""
            }
            {/* Scroll Progress Bar */}
            <div className="flex justify-between items-center px-2 py-2 max-w-full md:max-w-7xl mx-auto rounded-b-3xl">
                {/* Logo */}
                <img src={navlogo} alt="Logo" className="w-36 index-60 cursor-pointer" data-aos="fade-right" onClick={() => navigate('/')} /> {/* Add animation */}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <div className="group relative index-60" data-aos="fade-down">
                        <HashLink to={'/#whyprontoo'} className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                            Feature
                        </HashLink>
                    </div>
                    <div className="group relative index-60" data-aos="fade-down" data-aos-delay="200">
                        <Link to={'/ecosystem'} className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium index-60">
                            Products
                        </Link>
                    </div>
                    <div className="group relative index-60" data-aos="fade-down" data-aos-delay="300">
                        <Link to={'/restauranttype'} className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium index-60">
                            Restaurant Type
                        </Link>
                    </div>
                    <div className="group relative index-60" data-aos="fade-down" data-aos-delay="500">
                        <Link to={'/pricing'} className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium index-60">
                            Pricing
                        </Link>
                    </div>
                    <div className="group relative index-60" data-aos="fade-down" data-aos-delay="400">
                        <button className="text-gray-800 hover:text-logocolor focus:outline-none flex justify-center items-center gap-1 font-medium">
                            Recources
                            <FaCaretDown size={12} className="translate-y-[1px] group-hover:rotate-180 duration-300" />
                        </button>
                        <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                <div className="bg-gray-200 items-center justify-center flex h-10 w-10 rounded-lg">
                                    <FaInstagram />
                                </div>
                                <div>
                                    <h1>Instagram</h1>
                                    <p className="text-sm text-gray-400">Follow Us on Instagram</p>
                                </div>
                            </li>
                            <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                <div className="bg-gray-200 items-center justify-center flex h-10 w-10 rounded-lg">
                                    <FaXTwitter />
                                </div>
                                <div>
                                    <h1>Twitter</h1>
                                    <p className="text-sm text-gray-400">Follow Us on Twitter</p>
                                </div>
                            </li>
                            <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                <div className="bg-gray-200 items-center justify-center flex h-10 w-10 rounded-lg">
                                    <FaFacebook />
                                </div>
                                <div>
                                    <h1>FaceBook</h1>
                                    <p className="text-sm text-gray-400">Follow Us on FaceBook</p>
                                </div>
                            </li>
                            <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer duration-200 flex items-center gap-2">
                                <div className="bg-gray-200 items-center justify-center flex h-10 w-10 rounded-lg">
                                    <FaYoutube />
                                </div>
                                <div>
                                    <h1>Youtube</h1>
                                    <p className="text-sm text-gray-400">Follow Us on Youtube</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Right-side Buttons */}
                <div className="hidden md:flex items-center space-x-4 index-60" data-aos="zoom-in" data-aos-delay="800">
                    <HashLink className="px-4 py-2 rounded-2xl hover:bg-logocolor-600 duration-300 font-bold text-gray-800 bg-logocolor flex justify-center items-center gap-1 hover:scale-105" to={'/#contact'}>
                        <HiSpeakerphone size={16} className="translate-y-[1px]" /> Book A Demo
                    </HashLink>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden index-60">
                    <button className="text-gray-800 duration-300" onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white md:hidden">
                        <nav className="flex flex-col space-y-4 px-6 py-4">
                            <a href="#" className="text-gray-800 hover:text-logocolor">
                                Feature
                            </a>
                            <Link to={'/ecosystem'} className="text-gray-800 hover:text-logocolor">
                                Products
                            </Link>
                            <Link to={'/restauranttype'} className="text-gray-800 hover:text-logocolor">
                                Restaurant Type
                            </Link>
                            <Link to={'/pricing'} className="text-gray-800 hover:text-logocolor">
                                Pricing
                            </Link>
                            <button className="px-4 py-2 text-white font-semibold rounded-md bg-logocolor">
                                Book A Demo
                            </button>
                        </nav>
                    </div>
                )}
            </div>

            <motion.div
                className="h-1 bg-logocolor origin-0 rounded-full"
                style={{ scaleX }} // scaleX will animate from 0 to 1 based on scroll progress
            />
        </header>
    );
};

export default Header;
