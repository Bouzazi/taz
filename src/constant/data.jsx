import {
  bread,
  burger,
  pasta,
  nuddles,
  salad,
  sandwich,
  // avatarOne, avatarThree, avatarTwo,
  dishEight, dishFive, dishFour, dishOne, dishSeven, dishSix, dishThree, dishTwo, dishNine
} from "./imageData";
import { icons } from "./icons";

export const ourSpecialitiesList = [
  {
    image: nuddles,
    name: "nuddles",
  },
  {
    image: burger,
    name: "burger",
  },
  {
    image: salad,
    name: "salad",
  },
  {
    image: bread,
    name: "bread dish",
  },
  {
    image: pasta,
    name: "pasta",
  },
  {
    image: sandwich,
    name: "sandwich",
  },
];

export const socialLinksMap = [
  {
    socialLink: "https://www.facebook.com/",
    socialIconName: icons.facebookIcon,
  },
  {
    socialLink: "https://www.youtube.com/",
    socialIconName: icons.youtubeIcon,
  },
  {
    socialLink: "https://x.com/?lang=en",
    socialIconName: icons.twitterIcon,
  },
  {
    socialLink: "https://www.instagram.com/",
    socialIconName: icons.instagramIcon,
  },
];

export const restaurantTimeMap = [
  {
    restaurantWeek: "Mon-Fri",
    restaurantTime: "8am-11pm",
  },
  {
    restaurantWeek: "Sun",
    restaurantTime: "10am-4pm",
  },
  {
    restaurantWeek: "Sat",
    restaurantTime: "10am-6pm",
  },
];

export const menuDishesData = [
  {
    imgSrc: dishOne,
    dishName: "Grilled salmon salad",
    description: "Savor the Flavors of Grilled Salmon and Fresh Greens.",
    price: "$39",
    rating: 4.4,
    ratingCount: 2050,
  },
  {
    imgSrc: dishTwo,
    dishName: "Chilly Chicken Topped with Sesame",
    description: "Elevate Your Palate with Teriyaki Chicken and Crisp Cucumber.",
    price: "$29",
    rating: 4.3,
    ratingCount: 1080,
  },
  {
    imgSrc: dishThree,
    dishName: "Pasta con le sarde (Pasta with sardines)",
    description: "Evoke the Mediterranean Sun with Every Forkful.",
    price: "$32",
    rating: 4.6,
    ratingCount: 2120,
  },
  {
    imgSrc: dishFour,
    dishName: "Italian Salad with Fresh shrimp",
    description: "A Fresh Twist on Italian Seafood: Insalata di Calamari.",
    price: "$24",
    rating: 4.2,
    ratingCount: 1030,
  },
  {
    imgSrc: dishFive,
    dishName: "Tomato Soup with Broccoli",
    description: "Comfort in a Bowl: Where Earthy Vegetables Meet Exotic Spice.",
    price: "$19",
    rating: 4.1,
    ratingCount: 999,
  },
  {
    imgSrc: dishSix,
    dishName: "Blueberry pan Cake.",
    description: " Blueberry Meets Plumcot in Perfect Harmony.",
    price: "$30",
    rating: 4.7,
    ratingCount: 1125,
  },
  {
    imgSrc: dishSeven,
    dishName: "Cheese Stuffed Burgers",
    description: "Savor the Melt: Homemade Cheese-Stuffed Burgers.",
    price: "$29",
    rating: 4.5,
    ratingCount: 1256,
  },
  {
    imgSrc: dishEight,
    dishName: "Stuffed Bell Papers with Coriander",
    description: "Elevate Your Dish with Our Pepper Perfection.",
    price: "$45",
    rating: 4.6,
    ratingCount: 1325,
  },
  {
    imgSrc: dishNine,
    dishName: "Fresh Cucumber and Tofu Sushi",
    description: "Fresh Sushi Meets the Opulence of Red Caviar.",
    price: "$39",
    rating: 4.6,
    ratingCount: 1325,
  },
]

export const drinkNamesData = [
  {
    drinkName: "Mocktail",
    drinkVariant: "Blueberry / Pineapple Mint Refreshed / Margarita ",
    price: "$13",
  },
  {
    drinkName: "Fruit Shakes",
    drinkVariant: "Apple / Mango / Watermelon / Banana / Strawberry.",
    price: "$18",
  },
  {
    drinkName: "Alcohol",
    drinkVariant: "Ember Whiskey / Crimson Tide Vodka / Horizon Rum",
    price: "$15",
  },
  {
    drinkName: "Soda",
    drinkVariant: "Cherry Wave /Berry Blast Soda / Mango Breeze Soda",
    price: "$10",
  },
]

export const dessertsNamesData = [
  {
    dessertName: "Cakes",
    dessertVariant: "Velvet Dream Cake / Chocolate Decadence / Strawberry Cake ",
    price: "$8",
  },
  {
    dessertName: "Muffins",
    dessertVariant: "Mocha Magic Muffins / Choco-Chip  / Banana Nut Crunch ",
    price: "$10",
  },
  {
    dessertName: "Donets",
    dessertVariant: "Blueberry Burst / Coconut Paradise  / Caramel Crunch Rings.",
    price: "$15",
  },
  {
    dessertName: "Ice Cream",
    dessertVariant: "Vanilla Bean Bliss /Coconut Almond Joy / Butter Scooch",
    price: "$8",
  },
]

export const reviewsSwiperData = [
  {
    // imgSrc: avatarOne,
    reviewMessage: "I've visited many restaurants, but Cooking Healthy Food stands out for its impeccable service and delicious food",
    name: "Josie rizal",
  },
  {
    // imgSrc: avatarTwo,
    reviewMessage: "The flavors at Cooking Healthy Food  are unmatched. Each dish was a masterpiece",
    name: "rachel springer",
  },
  {
    // imgSrc: avatarThree,
    reviewMessage: "We celebrated a special occasion at Cooking Healthy Food, and it exceeded all expectations",
    name: "fabien smith",
  },
  {
    // imgSrc: avatarOne,
    reviewMessage: "I've visited many restaurants, but Cooking Healthy Food stands out for its impeccable service and delicious food",
    name: "Josie rizal",
  },
  {
    // imgSrc: avatarTwo,
    reviewMessage: "he flavors at Cooking Healthy Food  are unmatched. Each dish was a masterpiece",
    name: "rachel springer",
  },
]