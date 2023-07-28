"use client";

import React, { useEffect, useState } from "react";
import { GetInTouch } from "../components/GetInTouch";
import SpeedDial from "../components/SpeedDial";

const images = ["home.png", "home2.png", "home3.png"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the background image index every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen relative bg-cover bg-center transition-all duration-500 ease-in-out scale-100"
      style={{ backgroundImage: `url(/${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 flex flex-col md:flex-row  items-center  w-[95%] mx-auto justify-around">
        <div className="text-center relative animate__animated animate__zoomInDown w-[90%] sm:w-[50%] top-20 sm:top-0 sm:p-9">
          <h1 className="lg:text-6xl md:text-4xl  sm:text-2xl text-xl font-bold text-[#c08e02]">
            One of India's 1st Advisory service for resolving Builder-Buyer
            disputes
          </h1>
        </div>
        <div className="w-[48] sm:w-[50%] mx-auto">
          <GetInTouch />
        </div>
      </div>
      <div className="relative justify-end">
        <SpeedDial />
      </div>
    </div>
  );
};

export default Home;
