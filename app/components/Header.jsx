"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link_second from "./Link_second";
import Button from "./Button";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    const menuBth = document.querySelector(".menu-btn");
    const hamburger = document.querySelector(".menu-btn__burger");
    const nav = document.querySelector(".nav");
    const menuNav = document.querySelector(".menu-nav");
    const navItems = document.querySelectorAll(".menu-nav__item");

    if (menuBth && hamburger && nav && menuNav && navItems) {
      menuBth.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");
        menuNav.classList.toggle("open");
        navItems.forEach((item) => item.classList.toggle("open"));
        handleMenuClick();
      });
    }

    if (typeof window !== "undefined") {
      const handleScroll = () => {
        header.classList.toggle("scrolled", window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="header fixed flex z-10 justify-between lg:justify-around w-screen text-white top-3">
      <div className="sidebar lg:hidden">
        <div className="menu-btn">
          <span className="menu-btn__burger"></span>
        </div>
        <nav className="nav">
          <ul className={`menu-nav ${open ? "open" : ""}`}>
            <li className="menu-nav__item active">
              <Link href="/" className="menu-nav__link">
                Home
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link href="/about" className="menu-nav__link">
                About Me
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link href="/news&updates" className="menu-nav__link">
                News & Update
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link href="/contact-us" className="menu-nav__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Bounce top>
        <div className="relative logo mx-auto left-5 top-2 ">
          <Image
            src="/logo.png"
            alt="logo"
            className="sm:w-[230px]"
            width={200}
            height={100}
          />
        </div>
      </Bounce>
      <div className="hidden w-[0px] md:w-full md:links lg:flex md:gap-x-5 md:justify-center md:items-center">
        <Link_second href="/" name="HOME" />
        <Link_second href="/about" name="ABOUT" />
        <Link_second href="/news&updates" name="NEWS & UPDATES" />
        <Link_second href="/contact-us" name="CONTACT US" />
      </div>

      <Button href="tel:+91-9999999999" name="+91 9006005081" />
    </div>
  );
};

export default Header;
