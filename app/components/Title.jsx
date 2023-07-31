import React from "react";

import Bounce from "react-reveal/Bounce";

const Title = ({ heading }) => {
  return (
    <div className=" title text-[#000] md:text-3xl w-[300px] py-5 text-center mx-auto md:my-5 2 uppercase border-b-4 border-[#c08e02] text-2xl font-semibold font-['josefin-sans', sans-serif]  ">
      <Bounce top>{heading}</Bounce>
    </div>
  );
};

export default Title;
