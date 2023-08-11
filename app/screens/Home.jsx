"use client";
import React from "react";
import Hero_Section from "../components/Hero_Section";
import Title from "../components/Title";
import AboutUs from "../components/AboutUs";
import Mid_Section from "../components/Mid_Section";
import RevMid_Section from "../components/RevMid_Section";
import Services from "../components/Service";
import AboutInNumbers from "../components/AboutInNumbers";

const home = () => {
  return (
    <div>
      <Hero_Section />
      <Title heading="About us" />
      <AboutUs />
      <Title heading="Why Choose Us" />
      <Mid_Section content="" image="/WhyWe.png" />
      <Title heading="What We Do" />
      <div className="hidden lg:block">
        <RevMid_Section content="" image="/WhatWe.png" />
      </div>
      <div className="lg:hidden">
        <Mid_Section content="" image="/WhatWe.png" />
      </div>
      <Title heading="Service we provide" />
      <div className="services">
        <Services />
      </div>
      <Title />
      <AboutInNumbers heading="Confidentiality" />
    </div>
  );
};

export default home;
