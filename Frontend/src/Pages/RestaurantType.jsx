import React from 'react';

const foodTypes = [
  {
    title1: "Fast Food",
    title2: "Quick & Tasty",
    description: "Popular grab-and-go meals known for their convenience and speed.",
    keyPoints: [
      "Burgers, fries, and fried chicken",
      "Pizza, hot dogs, and sandwiches",
      "Tacos, burritos, and wraps"
    ],
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg"
  },
  {
    title1: "Healthy & Organic",
    title2: "Nutritious Choices",
    description: "Wholesome meals made with fresh, organic, and natural ingredients.",
    keyPoints: [
      "Salads, quinoa bowls, and smoothie bowls",
      "Vegan and plant-based meals",
      "Gluten-free and keto-friendly options"
    ],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
  },
  {
    title1: "Seafood",
    title2: "Fresh & Flavorful",
    description: "A variety of fish, shellfish, and other ocean delicacies.",
    keyPoints: [
      "Grilled salmon, tuna, and mackerel",
      "Lobster, shrimp, and crab dishes",
      "Sushi, sashimi, and poke bowls"
    ],
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title1: "Desserts & Sweets",
    title2: "Indulgent Treats",
    description: "A variety of cakes, pastries, and sugary delights.",
    keyPoints: [
      "Chocolate cakes, cheesecakes, and cupcakes",
      "Ice creams, gelato, and sorbets",
      "Traditional desserts like baklava, mochi, and churros"
    ],
    image: "https://images.pexels.com/photos/4110007/pexels-photo-4110007.jpeg"
  },
  {
    title1: "Street Food",
    title2: "Global Delicacies",
    description: "Quick and affordable dishes from around the world.",
    keyPoints: [
      "Tacos, kebabs, and dumplings",
      "Hot dogs, samosas, and falafels",
      "Bubble tea, churros, and crepes"
    ],
    image: "https://images.pexels.com/photos/2010701/pexels-photo-2010701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title1: "BBQ & Grilled",
    title2: "Smoky & Juicy",
    description: "Charred and smoked meats cooked over an open flame.",
    keyPoints: [
      "Steak, ribs, and brisket",
      "Grilled chicken and lamb chops",
      "Kebabs and skewers from different cuisines"
    ],
    image: "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg"
  },
  {
    title1: "Asian Cuisine",
    title2: "Bold & Flavorful",
    description: "Authentic dishes from various Asian cultures.",
    keyPoints: [
      "Chinese: Fried rice, dumplings, and Peking duck",
      "Japanese: Sushi, ramen, and tempura",
      "Thai: Pad Thai, green curry, and mango sticky rice"
    ],
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
  },
  {
    title1: "Italian Cuisine",
    title2: "Classic & Comforting",
    description: "Deliciously rich pasta, pizza, and cheese-based dishes.",
    keyPoints: [
      "Pasta: Carbonara, lasagna, and spaghetti",
      "Pizza: Margherita, pepperoni, and Sicilian",
      "Risottos, gnocchi, and tiramisu"
    ],
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
  },
  {
    title1: "Indian Cuisine",
    title2: "Spices & Aromas",
    description: "A blend of spices, curries, and aromatic flavors.",
    keyPoints: [
      "Biryani, butter chicken, and tikka masala",
      "Dal, naan, and samosas",
      "Sweets like gulab jamun and jalebi"
    ],
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
  },
  {
    title1: "Mediterranean Cuisine",
    title2: "Healthy & Delicious",
    description: "A diet rich in fresh vegetables, olive oil, and lean proteins.",
    keyPoints: [
      "Greek salads, hummus, and falafel",
      "Shawarma, kebabs, and grilled seafood",
      "Baklava, olives, and feta cheese dishes"
    ],
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];


const FoodType = () => {
  return (
    <div className="p-6 mt-10">
      <div className="mb-12 text-center flex justify-center flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center capitalize font-bold text-gray-900 py-5 font-lora tracking-wider" data-aos="fade-up">
          Explore <span className="text-logocolor">Delicious Food Categories</span>
        </h2>
        <p className="sm:text-md text-md font-lora font-normal text-gray-500 max-w-md md:max-w-3xl mx-auto px-5" data-aos="fade-up">
          A variety of cuisines and food types, perfect for every taste and preference.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {foodTypes.map((item, index) => (
          <div
            key={index}
            className={`w-full h-fit flex flex-col-reverse justify-between items-center md:gap-20 mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="md:w-[50%] p-5">
              <h2 className="text-3xl sm:text-3xl text-gray-800 font-lora font-semibold text-left mb-2 md:mb-4" data-aos="fade-up">
                {item.title1} <span className="text-logocolor">{item.title2}</span>
              </h2>
              <p className="text-justify text-md sm:text-md text-gray-500 mb-6 font-lora" data-aos="fade-up">
                {item.description}
              </p>
              <ul>
                {item.keyPoints.map((keyPoint, i) => (
                  <li key={i} className="flex items-start gap-3" data-aos="fade-up">
                    <p className="text-sm sm:text-md lg:text-lg text-gray-800 mb-3 font-lora">
                      {i + 1}. {keyPoint}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[50%] w-full h-[20rem] md:h-[30rem] p-5">
              <img
                src={item.image}
                alt={`${item.title1} - ${item.title2}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                data-aos="fade-up"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodType;
