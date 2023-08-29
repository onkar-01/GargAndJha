"use client";
import { Bounce } from "react-awesome-reveal";

const Title = ({ heading }) => {
  return (
    <div className="title text-[#000] md:text-3xl w-[350px] py-5 text-center mx-auto md:my-5 2 capitalise rotating-border text-2xl font-semibold font-'Josefin Sans', sans-serif">
      <Bounce duration={2000}>{heading}</Bounce>
    </div>
  );
};

export default Title;
