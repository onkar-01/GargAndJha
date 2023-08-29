"use client";
import React from "react";
import Title from "./Title";

const ContactUs = () => {
  return (
    <div className="h-full">
      <Title heading="Connect with us" />
      <div className="contact_form h-full">
        <div className=" h-full  ">
          <div className=" p-10  mx-auto rounded h-full">
            <form className="flex flex-col w-full space-y-10" action="">
              <div className="title"></div>

              <div className="flex items-center mb-5 border-b-2 border-[#c08e02] w-[100%]">
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className=" border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                />
              </div>

              <div className="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Your Phone Number"
                  className="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:bborder-[#c08e02]"
                />
              </div>
              <div className="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Your Email Address"
                  className="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#c08e02]"
                />
              </div>
              <div className="flex items-center mb-10 border-b-2 border-[#c08e02] ">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Your Concern"
                  className="border-none bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#c08e02]"
                />
              </div>
              <div className="text-right">
                <button className="py-3 px-8 bg-[#c08e02] text-[#f1f0eeaa] font-bold rounded">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
