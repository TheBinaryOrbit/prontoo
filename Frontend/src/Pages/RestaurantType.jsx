import { keyframes } from 'framer-motion/dom';
import React from 'react'


const restaurantTypes = [
  {
    "title1": "Quick-Service Restaurants",
    "title2": "Fast Food & Cafés",
    "description": "Fast-paced restaurants that focus on quick service and high-volume sales.",
    "keyPoints": [
      "Fast food chains like McDonald's, KFC, Subway",
      "Food trucks with mobile operations",
      "Cafés and coffee shops for quick beverages",
      "Juice & smoothie bars catering to health-conscious customers"
    ]
  },
  {
    "title1": "Full-Service Restaurants",
    "title2": "Casual & Fine Dining",
    "description": "Sit-down restaurants offering a wide range of cuisines with table service.",
    "keyPoints": [
      "Casual dining restaurants like Applebee’s, Olive Garden",
      "Fine dining establishments with luxury ambiance",
      "Family-style restaurants with large shared portions",
      "Theme restaurants with unique decor and concepts"
    ]
  },
  {
    "title1": "Cloud Kitchens",
    "title2": "Delivery-Only Outlets",
    "description": "Virtual kitchens focused on online orders without a physical dining area.",
    "keyPoints": [
      "Ghost kitchens with multiple brands under one roof",
      "Virtual brands operating solely via delivery apps"
    ]
  },
  {
    "title1": "Bars & Pubs",
    "title2": "Entertainment & Drinks",
    "description": "Establishments serving alcoholic beverages, often with food and live entertainment.",
    "keyPoints": [
      "Sports bars featuring live game screenings",
      "Cocktail lounges offering handcrafted drinks",
      "Nightclubs with DJs, dance floors, and bottle service"
    ]
  },
  {
    "title1": "Bakery & Confectionery",
    "title2": "Sweet & Baked Goods",
    "description": "Shops specializing in baked goods, desserts, and confectionery items.",
    "keyPoints": [
      "Cake shops with custom-made desserts",
      "Donut shops offering a variety of flavors",
      "Pastry shops with fresh-baked items"
    ]
  },
  {
    "title1": "Buffets & Self-Service",
    "title2": "All-You-Can-Eat",
    "description": "Restaurants offering unlimited food options for a fixed price.",
    "keyPoints": [
      "All-you-can-eat restaurants with diverse menus",
      "Salad bars with fresh, customizable options"
    ]
  },
  {
    "title1": "Hotel & Resort Dining",
    "title2": "Luxury & Exclusive",
    "description": "High-end dining experiences within hotels and resorts.",
    "keyPoints": [
      "In-house hotel dining with gourmet offerings",
      "Poolside and rooftop dining with scenic views"
    ]
  },
  {
    "title1": "Food Courts",
    "title2": "Mall & Airport Dining",
    "description": "Multi-brand food outlets in high-footfall areas.",
    "keyPoints": [
      "Shopping mall food courts with diverse cuisines",
      "Airport and railway station stalls for travelers"
    ]
  },
  {
    "title1": "Specialty & Ethnic Restaurants",
    "title2": "Cultural Cuisine",
    "description": "Restaurants specializing in specific regional or ethnic cuisines.",
    "keyPoints": [
      "Sushi bars with Japanese specialties",
      "Indian, Chinese, Mexican, Italian restaurants"
    ]
  },
  {
    "title1": "Catering & Event Dining",
    "title2": "Large-Scale Food Service",
    "description": "Food services for weddings, corporate events, and private functions.",
    "keyPoints": [
      "Wedding catering with customized menus",
      "Corporate catering for business meetings and events"
    ]
  }
];



const RestaurantType = () => {
  return (
    <div className="p-6 mt-10">
      <div className="mb-12  text-center flex justify-center flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center capitalize font-bold text-gray-900 py-5 font-Poppins tracking-wider" data-aos="fade-up">
          Prontoo build for all <span className="text-logocolor">type of Restaurant</span>
        </h2>
        <p className="sm:text-lg text-md font-normal text-gray-500 max-w-md md:max-w-3xl mx-auto px-5" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore laboriosam harum. Odio, nulla quasi. Odio architecto sed magnam praesentium!
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {
          restaurantTypes.map((item, index) => (
            <div key={index} className={`w-full h-fit flex  flex-col-reverse justify-between items-center  md:gap-20 mb-10 ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className='md:w-[40%] p-5 top-[10vh] left-0'>
                <h2 className="text-3xl sm:text-3xl text-gray-800 font-Poppins font-medium text-left mb-2 md:mb-4">
                  {item.title1}<span className="text-logocolor "> {item.title2}</span>
                </h2>
                <p className='text-justify text-lg sm:text-md text-gray-500 mb-6'>{item.description}</p>
                <ul>
                  {
                    item.keyPoints.map((keys, i) => (
                      <li key={i} className="flex items-start gap-3" data-aos="fade-up">
                        <div>
                          <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 mb-3">
                            {keys}
                          </p>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='md:w-[60%] h-[20rem] md:h-[30rem] p-5'>
                <canvas className='w-full h-full bg-slate-300 rounded-2xl'></canvas>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantType
