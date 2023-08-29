"use client";
import { useState, useEffect } from "react";

const NumberAnimation = ({ state }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // Function to check if the component is in the viewport
    const handleScroll = () => {
      const component = document.getElementById("number-animation");
      const rect = component.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Increment the number until reaching 100
      const interval = setInterval(() => {
        if (number < 100) {
          setNumber((prevNumber) => prevNumber + 1);
        } else {
          clearInterval(interval);
        }
      }, 20);

      // Clean up the interval on component unmount or when not visible
      return () => clearInterval(interval);
    }
  }, [isVisible, number]);

  return (
    <div className="number-animation" id="number-animation">
      <div className={`number ${isVisible ? "visible" : ""}`}>
        {/* Display percentage or number based on state */}
        {state ? <span>{number + "%"}</span> : <span>{number + "+"}</span>}
      </div>
    </div>
  );
};

export default NumberAnimation;
