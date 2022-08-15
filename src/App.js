import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import "./App.css";
import Navigation from "./components/Navigation";
import Category from "./components/Category";
import Advertisement from "./components/Advertisement";
import Ofyou from "./components/OfYou";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Signin from "./containers/SignIn";
import Routing from "./components/Routing";

const categories = [
  {
    imgUrl: "./images/delivery.jpeg",
    title: "Delivery",
  },
  {
    imgUrl: "./images/eat.jpeg",
    title: "Eat",
  },
  {
    imgUrl: "./images/Groceries.jpeg",
    title: "Groceries",
  },
  {
    imgUrl: "./images/Hotel.jpeg",
    title: "Hotels",
  },
  {
    imgUrl: "./images/Pet2.jpeg",
    title: "Pets",
  },
  {
    imgUrl: "./images/hospital.jpeg",
    title: "Hospital",
  },
  {
    imgUrl: "./images/Beauty.jpeg",
    title: "Beauty",
  },
  {
    imgUrl: "./images/movie2.webp",
    title: "Movies",
  },
  {
    imgUrl: "./images/beverages.webp",
    title: "Drinks",
  },
  {
    imgUrl: "./images/Tickets.jpeg",
    title: "Tickets",
  },
  {
    imgUrl: "./images/category2.webp",
    title: "All",
  },
];

const menus = [
  //Offer for You
  {
    mTitle: {
      mTit:"Offer For you :"
    },
    menuUrl: "./images/briyani.webp",
    star: "###",
    price: "99",
  },
  {
    menuUrl: "./images/itc1.webp",
    star: "####",
    price: "300",
  },
  {
    menuUrl: "./images/burger.webp",
    star: "##",
    price: "125",
  },
  {
    menuUrl: "./images/cinema.jpeg",
    star: "###",
    price: "250",
  },

  //Deal Of The Day
  {
    menuUrl: "./images/starBriyani.jpeg",
    star: "###",
    price: "250",
  },
  {
    menuUrl: "./images/Subway.jpeg",
    star: "###",
    price: "499",
  },
  {
    menuUrl: "./images/goibobo.jpeg",
    star: "###",
    price: "3000",
  },
  {
    menuUrl: "./images/travel.jpeg",
    star: "###",
    price: "9999",
  },

  //Briyani Festival
  {
    menuUrl: "./images/mutton-bri.webp",
    star: "###",
    price: "300",
  },
  {
    menuUrl: "./images/briyani.webp",
    star: "###",
    price: "2000",
  },
  {
    menuUrl: "./images/bri.jpeg",
    star: "###",
    price: "180",
  },
  {
    menuUrl: "./images/veg-bri.jpeg",
    star: "###",
    price: "99",
  },

  //Summer
  {
    menuUrl: "./images/ice-1.jpeg",
    star: "###",
    price: "98",
  },
  {
    menuUrl: "./images/ice-2.webp",
    star: "###",
    price: "140",
  },
  {
    menuUrl: "./images/ice-3.jpeg",
    star: "###",
    price: "320",
  },
  {
    menuUrl: "./images/ice-4.webp",
    star: "###",
    price: "299",
  },


];
function App() {
  return (
    <Router>
    
      <Navigation /><br /><br /><br />
      <div className="row mt-4 ms-2">
        <span class="border-top p-2"></span>
        {categories.map((category, index) => {
          return (
            <div className="col-md-1 m-1" key={index}>
              <Category {...category} />
            </div>
          );
        })}
      </div>
      <Advertisement />
      <div className="row mt-4 p-3">
      <h1 class="text-start mt-3">Offer For You :</h1> <br />
        {menus.map((menu, index) => {
          return (
            <div className="col-lg-3 md-5 text-center rounded" key={index}>
              <Ofyou {...menu} />
            </div>
          );
        })}
      </div>
      <Footer />
      <Social />
      <Routing />
      
    </Router>
  );
}

export default App;
