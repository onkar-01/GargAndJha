"use client"
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Button = ({ name, href }) => {
  const isTelephoneLink = href.startsWith("tel:");

  const containerClasses =
    "relative cta flex lg:w-[200px] right-3 top-1 md:top-1";
  const textClasses = "hidden lg:block sm:text-white sm:font-medium sm:mx-3";

  return (
    <div className="">
      <a href={href} className={containerClasses}>
        {isTelephoneLink && <BsFillTelephoneForwardFill />}
        <span className={textClasses}>{name}</span>
      </a>
    </div>
  );
};

export default Button;
