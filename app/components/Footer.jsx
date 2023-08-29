"use client"
import Link_second from "./Link_second";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-[#fff] hover:text-[#c08e02] dark:hover:text-white"
  >
    {icon}
  </a>
);

const Footer = () => {
  const containerClasses = "border-t-2 w-[95%] mx-auto border-[#c08e02]";
  const footerClasses = "bg-[#000]";
  const contentWrapperClasses =
    "mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8";
  const socialIconClasses =
    "text-[#fff] hover:text-[#c08e02] dark:hover:text-white";

  return (
    <div className={containerClasses}>
      <footer className={footerClasses}>
        <div className={contentWrapperClasses}>
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="https://gargandjha.com/"
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  className="sm:h-[100px] mr-3"
                  alt="gargandjha Logo"
                  height={200}
                  width={500}
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#c08e02] uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-[#fff] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link_second href="/about" name="About" />
                  </li>
                  <li>
                    <Link_second href="/contact" name="Contact" />
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#c08e02] uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-[#fff]  font-medium">
                  <li className="mb-4">
                    <Link_second
                      href="https://www.facebook.com/gargandjha"
                      name="facebook"
                    />
                  </li>
                  <li className="mb-4">
                    <Link_second
                      href="https://www.instagram.com/gargandjha"
                      name="instagram"
                    />
                  </li>
                  <li>
                    <Link_second
                      href="https://www.instagram.com/gargandjha"
                      name="twitter"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#c08e02] uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-[#fff]  font-medium">
                  <li className="mb-4">
                    <Link_second href="/privacy-policy" name="Privacy Policy" />
                  </li>
                  <li>
                    <Link_second
                      href="/termsandcondition"
                      name="Terms & Condition"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#c08e02] sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center text-center sm:text-start sm:justify-between">
            <span className="text-sm text-[#fff] sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://gargandjha.com/" className="hover:underline">
                gargandjha™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 justify-center sm:justify-center sm:mt-0">
              <SocialLink
                href="#"
                icon={<FaFacebook />}
                label="Facebook page"
              />
              <SocialLink
                href="#"
                icon={<FaInstagram />}
                label="Instagram page"
              />
              <SocialLink href="#" icon={<FaTwitter />} label="Twitter page" />
              <SocialLink
                href="#"
                icon={<FaGithub />}
                label="GitHub repository"
              />
              <SocialLink
                href="#"
                icon={<FaDribbble />}
                label="Dribbble account"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
