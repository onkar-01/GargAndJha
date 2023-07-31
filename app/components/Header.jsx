"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "./link";
import Button from "./Button";

import Bounce from "react-reveal/Bounce";
const Header = () => {
  const [open, setOpen] = useState(false);

  if (typeof document !== "undefined") {
    const menuBth = document.querySelector(".menu-btn");
    const hamburger = document.querySelector(".menu-btn__burger");

    const nav = document.querySelector(".nav");
    const menuNav = document.querySelector(".menu-nav");
    const navItems = document.querySelectorAll(".menu-nav__item");

    menuBth.addEventListener("click", () => {
      if (!open) {
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach((item) => item.classList.add("open"));
        setOpen(true);
      } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach((item) => item.classList.remove("open"));
        setOpen(false);
      }
    });
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  }
  return (
    <>
      <div className="header  fixed flex z-10  lg:justify-around w-screen text-white top-3">
        <div className="sidebar  lg:hidden">
          <div class="menu-btn">
            <span class="menu-btn__burger"></span>
          </div>
          <nav class="nav">
            <ul class="menu-nav">
              <li class="menu-nav__item active">
                <a href="index.html" class="menu-nav__link">
                  Home
                </a>
              </li>
              <li class="menu-nav__item">
                <a href="about.html" class="menu-nav__link">
                  About Me
                </a>
              </li>
              <li class="menu-nav__item">
                <a href="Projects.html" class="menu-nav__link">
                  My Projects
                </a>
              </li>
              <li class="menu-nav__item">
                <a href="index.html" class="menu-nav__link">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Bounce top>
          <div className=" relative logo mx-auto left-5 top-2 ">
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
          <Link href="/" name="HOME" />
          <Link href="/about" name="ABOUT" />
          <Link href="/news&updates" name="NEWS & UPDATES" />
          <Link href="/contact" name="CONTACT" />
        </div>

        {/* <Link href="tel:+91-9999999999" name="+91 9006005081" /> */}
        <Button href="tel:+91-9999999999" name="+91 9006005081" />
      </div>
    </>
  );
};

export default Header;
