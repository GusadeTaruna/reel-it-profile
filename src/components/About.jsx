import React from "react";
import { ReactComponent as Underline } from "../assets/other/underline-about.svg";
import dancingAboutSection from "../assets/other/dancing-about.gif";

const About = () => {
  return (
    <div className="container m-auto flex flex-col justify-center px-16 py-20 min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h1 className="text-[3rem] -rotate-3" style={{ lineHeight: 1.2 }}>
            SHOOT YOUR DANCE COVER VIDEO WITH US
          </h1>
          <div className="-rotate-3 mt-[-1rem] mb-16">
            <Underline />
          </div>
          <hr className="bg-black h-[2px] mb-4"></hr>
          <h1 className="text-3xl uppercase">We help you</h1>
          <p className="font-grotesk_reg text-xl text text-[#222222]">
            to create awesome K-Pop Dance Cover Video and other stuff too! Reel
            It offering services related to video production. Focused on
            providing innovative work consistent with the established vision and
            within budget. Deadline-oriented with exceptional time-management
            techniques.
          </p>
        </div>
        <div className="col-span-6">
          <div className="w-full h-full">
            <img
              src={dancingAboutSection}
              alt="dancing-gif"
              className="m-auto w-auto h-[60vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
