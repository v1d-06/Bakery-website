import BiscoffCheesecake from "../assets/BiscoffCheesecake.jpg";
import blueberrycup from "../assets/blueberrycup.jpg";
import blueberryzestP from "../assets/blueberryzestP.jpg";
import ccake4 from "../assets/ccake4.jpg";
import Challah from "../assets/Challah.jpg";
import chocop from "../assets/chocop.jpg";
import coffee from "../assets/coffee.jpg";
import cookiesandcreamcup from "../assets/cookiesandcreamcup.jpg";
import Croissant from "../assets/Croissant.jpg";
import GoldendrizzleP from "../assets/GoldendrizzleP.jpg";
import hotchocolate from "../assets/hotchocolate.jpg";
import matchacup from "../assets/matchacup.jpg";
import midnightberrycup from "../assets/midnightberrycup.jpg";
import milkydelightP from "../assets/milkydelightP.jpg";
import raspberrycup from "../assets/raspberrycup.jpg";
import rvcake2 from "../assets/rvcake2.jpg";
import sccake3 from "../assets/sccake3.jpg";
import strawdonut from "../assets/strawdonut.jpg";
import strawberrycup from "../assets/strawberrycup.jpg";
import strawberryswirlP from "../assets/strawberryswirlP.jpg";
import Whitetrufflecup from "../assets/Whitetrufflecup.jpg";

export const MENU_ITEMS = [
  // RECOMMENDED ITEMS (FIRST 6)

  {
    id: 1,
    name: "Red Velvet Delight",
    type: "Cakes",
    category: "Recommended",
    price: 520,
    desc: "Soft red velvet sponge layered with silky cream cheese frosting.",
    tag: "BESTSELLER",
    img: rvcake2,
  },

  {
    id: 2,
    name: "Cookies & Cream Cupcake",
    type: "Cupcakes",
    category: "Recommended",
    price: 290,
    desc: "Chocolate cupcake topped with Oreo buttercream frosting.",
    tag: "",
    img: cookiesandcreamcup,
  },

  {
    id: 3,
    name: "Golden Drizzle Pastry",
    type: "Pastries",
    category: "Recommended",
    price: 340,
    desc: "Layers of caramel sponge with rich golden drizzle topping.",
    tag: "CHEF'S PICK",
    img: GoldendrizzleP,
  },

  {
    id: 4,
    name: "Chocolate Fantasy Cake",
    type: "Cakes",
    category: "Recommended",
    price: 610,
    desc: "Dark chocolate sponge with rich ganache and fudge filling.",
    tag: "",
    img: ccake4,
  },

  {
    id: 5,
    name: "Blueberry Zest Pastry",
    type: "Pastries",
    category: "Recommended",
    price: 310,
    desc: "Fresh blueberry pastry with citrus cream and berry glaze.",
    tag: "NEW",
    img: blueberryzestP,
  },

  {
    id: 6,
    name: "Milky Delight Pastry",
    type: "Pastries",
    category: "Recommended",
    price: 280,
    desc: "Creamy vanilla pastry topped with soft whipped frosting.",
    tag: "",
    img: milkydelightP,
  },

  // OTHER PRODUCTS

  {
    id: 7,
    name: "Strawberry Swirl Pastry",
    type: "Pastries",
    category: "Menu",
    price: 320,
    desc: "Fresh strawberry pastry layered with smooth cream filling.",
    tag: "",
    img: strawberryswirlP,
  },

  {
    id: 8,
    name: "Choco Dream Brownie",
    type: "Pastries",
    category: "Menu",
    price: 260,
    desc: "Dense chocolate brownie topped with rich cocoa glaze.",
    tag: "",
    img: chocop,
  },

  {
    id: 9,
    name: "Blueberry Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 230,
    desc: "Soft vanilla cupcake with blueberry buttercream frosting.",
    tag: "",
    img: blueberrycup,
  },

  {
    id: 10,
    name: "Matcha Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 250,
    desc: "Japanese matcha flavored cupcake with creamy topping.",
    tag: "",
    img: matchacup,
  },

  {
    id: 11,
    name: "Midnight Berry Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 270,
    desc: "Berry flavored cupcake with dark chocolate garnish.",
    tag: "",
    img: midnightberrycup,
  },

  {
    id: 12,
    name: "Raspberry Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 240,
    desc: "Light raspberry cupcake topped with fresh berry cream.",
    tag: "",
    img: raspberrycup,
  },

  {
    id: 13,
    name: "Strawberry Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 220,
    desc: "Classic strawberry cupcake with soft whipped frosting.",
    tag: "",
    img: strawberrycup,
  },

  {
    id: 14,
    name: "White Truffle Cupcake",
    type: "Cupcakes",
    category: "Menu",
    price: 300,
    desc: "Luxury white chocolate cupcake with creamy truffle frosting.",
    tag: "PREMIUM",
    img: Whitetrufflecup,
  },

  {
    id: 15,
    name: "Strawberry Celebration Cake",
    type: "Cakes",
    category: "Menu",
    price: 750,
    desc: "Fresh strawberry layered cake perfect for celebrations.",
    tag: "Seasonal",
    img: sccake3,
    ingredients: ["Fresh Strawberries", "Chantilly Cream", "Vanilla Chiffon Sponge", "Strawberry Glaze"],
    emoji: "🍓"
  },

  {
    id: 16,
    name: "Classic Coffee",
    type: "Beverages",
    category: "Menu",
    price: 180,
    desc: "Freshly brewed creamy cappuccino with latte art.",
    tag: "",
    img: coffee,
  },

  {
    id: 17,
    name: "Hot Chocolate",
    type: "Beverages",
    category: "Menu",
    price: 210,
    desc: "Rich velvety hot chocolate topped with cocoa powder.",
    tag: "",
    img: hotchocolate,
  },

  {
    id: 18,
    name: "Butter Croissant",
    type: "Breads",
    category: "Menu",
    price: 180,
    desc: "72-layer lamination, AOP butter, crispy honeyed crust.",
    tag: "DAILY",
    img: Croissant,
    emoji: "🥐"
  },

  {
    id: 19,
    name: "Artisan Challah Bread",
    type: "Breads",
    category: "Menu",
    price: 310,
    desc: "Traditional braided egg bread, beautifully pillowy with a golden crust.",
    tag: "FRESH",
    img: Challah,
    emoji: "🍞"
  },

  {
    id: 20,
    name: "Lotus Biscoff Cheesecake",
    type: "Cakes",
    category: "Menu",
    price: 680,
    desc: "Creamy cheesecake on a Biscoff crust, layered with melted cookie butter.",
    tag: "TRENDING",
    img: BiscoffCheesecake,
    emoji: "🍰"
  },

  {
    id: 21,
    name: "Glazed Chocolate Donut",
    type: "Breads",
    category: "Menu",
    price: 190,
    desc: "Fluffy yeast-raised donut dipped in a thick, rich chocolate ganache.",
    tag: "",
    img: chocop,
    emoji: "🍩"
  },

  {
    id: 22,
    name: "Strawberry Dream Donut",
    type: "Breads",
    category: "Menu",
    price: 210,
    desc: "Soft artisanal donut topped with a pink strawberry glaze and fresh fruit bits.",
    tag: "NEW",
    img: strawdonut,
    emoji: "🍩"
  }
];

export const TESTIMONIALS = [
  {
    quote:
      "The croissants here are criminally good. I moved neighborhoods just to be closer to this bakery.",
    author: "Priya Mehta",
    status: "Customer since 2022",
  },

  {
    quote:
      "Ordered a custom cake for my wedding. Every guest asked where it was from. Absolutely stunning work.",
    author: "Rohit Sharma",
    status: "Customer since 2023",
  },

  {
    quote:
      "Nothing like it is in Bhopal. The desserts here feel straight out of Paris. Pure magic.",
    author: "Anjali Kapoor",
    status: "Customer since 2022",
  },
];