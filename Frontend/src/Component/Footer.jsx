import React from 'react'
import logo from '../assets/footerlogo.gif'

const Footer = () => {
  return (
    <footer class="w-full  bg-logocolor mt-28">
      <div class="w-full max-w-7xl mx-auto">
        
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8 px-4 sm:px-6 lg:px-8">
          <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0 flex justify-center items-center">
            <img src={logo} alt="" className='w-64' />
          </div>
          
          <div class="lg:mx-auto text-left ">
            <h4 class="text-lg text-white font-medium mb-7">Links</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6"><a href="javascript:;" class="text-gray-50 font-medium hover:text-gray-100">Home</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">About</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Pricing</a></li>
              <li><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Features</a></li>
            </ul>
          </div>
          
          <div class="lg:mx-auto text-left ">
            <h4 class="text-lg text-white font-medium mb-7">Products</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6"><a href="javascript:;" class="text-gray-50 font-medium hover:text-gray-100">Figma UI System</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Icons Assets</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Responsive Blocks</a></li>
              <li><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Components Library</a></li>
            </ul>
          </div>
          
          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-white font-medium mb-7">Resources</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6"><a href="javascript:;" class="text-gray-50 font-medium hover:text-gray-100">FAQs</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Quick Start</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Documentation</a></li>
              <li><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">User Guide</a></li>
            </ul>
          </div>
          
          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-white font-medium mb-7">Blogs</h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6"><a href="javascript:;" class="text-gray-50 font-medium hover:text-gray-100">News</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Tips & Tricks</a></li>
              <li class="mb-6"><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">New Updates</a></li>
              <li><a href="javascript:;" class=" text-gray-50 font-medium hover:text-gray-100">Events</a></li>
            </ul>
          </div>
        </div>
        
        <div class="w-full py-7 border-t border-gray-200 bg-logocolor px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span class="text-sm text-white font-bold ">©<a href='/'>Prontoo</a> 2024, All rights reserved.</span>
            <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <span class="text-sm text-white  font-bold">Design and developed by <a href='https://xcentic.in' target='blank' className=' tracking-[2px]  hover:underline duration-200'>XCENTIC</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
