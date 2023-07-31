"use client";
import React from "react";
import Hero_Section from "../components/Hero_Section";
import Title from "../components/Title";
import AboutUs from "../components/AboutUs";
import Mid_Section from "../components/Mid_Section";
import RevMid_Section from "../components/RevMid_Section";

const home = () => {
  return (
    <div>
      <Hero_Section />
      <Title heading="About us" />
      <AboutUs />
      <Title heading="Why Choose Us" />
      <Mid_Section content="" image="/WhyWe.png" />
      <Title heading="What We Do" />
      <RevMid_Section content="" image="/WhatWe.png" />
    </div>
  );
};

export default home;
