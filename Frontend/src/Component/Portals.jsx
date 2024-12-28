import React from 'react'
import app from '../assets/app.jpg'
import admin from '../assets/admin.png'
import vendor from '../assets/vendor.png'
const Portals = () => {
    return (
        <div className="p-6 mt-10">
            {/* Customer Application Section */}
            <section className="bg-white p-6  max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:px-20 mb-5 md:mb-20">
                <div className='md:w-1/2'>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800  font-playfair italic  text-center md:text-left mb-6">
                        Our <span className="text-logocolor">Customer Application</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-1 space-y-4">
                            <p className="text-gray-600 mb-6">
                                The coustem app centralizes campus outlet management with real-time tracking, user control,
                                and analytics, enabling data-driven decisions to optimize performance and streamline
                                operations.
                            </p>
                            <div className='mb-6'>
                                <p className="font-semiextrabold text-gray-700 mb-2">Discover Food Outlets</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semiextrabold text-gray-700 mb-2">Place Orders</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2  flex justify-center items-center'>
                    <img
                        src={app}
                        alt="Customer App"
                        className="h-auto mt-6 md:mt-0 md:ml-6  ml-5 scale-90 hover:scale-100 duration-700"
                    />
                </div>
            </section>

            {/* Admin Portal Section */}
            <section className="bg-white p-6  max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between md:px-20 gap-10 mb-5 md:mb-20">
                <div className='md:w-1/2'>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800  font-playfair italic mb-6 text-center md:text-left">
                        Our <span className="text-logocolor">Admin Portal</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-1 space-y-4">
                            <p className="text-gray-600 mb-6">
                                The coustem app centralizes campus outlet management with real-time tracking, user control,
                                and analytics, enabling data-driven decisions to optimize performance and streamline
                                operations.
                            </p>
                            <div className='mb-6'>
                                <p className="font-semiextrabold text-gray-700 mb-2">Discover Food Outlets</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semiextrabold text-gray-700 mb-2">Place Orders</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2  flex justify-center items-center'>
                    <img
                        src={admin}
                        alt="Customer App"
                        className="h-auto mt-6 md:mt-0 md:ml-6  ml-5 scale-90 hover:scale-100 duration-700"
                    />
                </div>
            </section>

            {/* Vendor Portal Section */}
            <section className="bg-white p-6 mb-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:px-20">
                <div className='md:w-1/2'>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800  font-playfair italic text-center md:text-left mb-6">
                        Our <span className="text-logocolor">Vendor Portal</span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-1 space-y-4">
                            <p className="text-gray-600 mb-6">
                                The coustem app centralizes campus outlet management with real-time tracking, user control,
                                and analytics, enabling data-driven decisions to optimize performance and streamline
                                operations.
                            </p>
                            <div className='mb-6'>
                                <p className="font-semiextrabold text-gray-700 mb-2">Discover Food Outlets</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semiextrabold text-gray-700 mb-2">Place Orders</p>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className="bg-logocolor h-4 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2  flex justify-center items-center'>
                    <img
                        src={vendor}
                        alt="Customer App"
                        className="h-auto mt-6 md:mt-0 md:ml-6  ml-5 scale-90 hover:scale-100 duration-700"
                    />
                </div>
            </section>
        </div>
    )
}
export default Portals
