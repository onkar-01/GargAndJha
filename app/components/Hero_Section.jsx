"use client";
import  { useEffect, useState } from "react";
import { GetInTouch } from "../components/GetInTouch";

const images = ["home.png", "home2.png", "home3.png"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const downArrowHandler = () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const style = {
    backgroundImage: `url(/${images[currentImageIndex]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <div
      className="h-screen relative bg-cover bg-center transition-all duration-500 ease-in-out scale-100"
      style={style}
    >
      <div className="absolute inset-0 flex flex-col md:flex-row items-center w-[95%] mx-auto justify-around">
        <div className="text-center relative animate__animated animate__zoomInDown w-[90%] sm:w-[50%] top-20 sm:top-0 sm:p-9">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold text-[#c08e02]">
            One of India's 1st Advisory service for resolving Builder-Buyer
            disputes
          </h1>
        </div>
        <div className="w-[48] sm:w-[50%] mx-auto">
          <GetInTouch />
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="relative m-auto top-[95%] transform -translate-x-1/2 animate-bounce w-10 h-10 cursor-pointer"
        onClick={downArrowHandler}
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>
  );
};

export default Home;
