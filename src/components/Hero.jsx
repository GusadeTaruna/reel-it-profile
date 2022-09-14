import React from "react";
import Topbar from "./Topbar";
import MovingText from "react-moving-text";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-hero flex flex-col text-white p-8">
        <Topbar />
        <div className="my-auto ml-28 mr-auto">
          <MovingText
            type="slideInFromTop"
            duration="1100ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <h1 className="text-4xl md:text-7xl xl:text-[9em]">REEL IT</h1>
            <h1 className="text-4xl md:text-7xl xl:text-[9em] mb-8">STUDIOS</h1>
          </MovingText>
        </div>
      </div>
    </>
  );
};

export default Hero;
