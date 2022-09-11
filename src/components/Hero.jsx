import React from "react";
import Topbar from "./Topbar";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-hero flex flex-col text-white text-center">
        <div className="w-[90%] mx-auto z-50">
          <Topbar />
        </div>
        <div className="grid grid-cols-12 gap-4 relative my-auto z-0">
          <div className="p-4 mx-auto col-span-11">
            <h1 className="text-4xl md:text-7xl xl:text-[9em]">REEL IT</h1>
            <div className="border border-[#37373e] bg-[#0e0e10] mb-3">
              <p className="font-grotesk_mono uppercase text-[#a8a8a8] mb-3 p-2">
                Stay tuned. We are launching{" "}
                <span className="text-white">soon.</span>
              </p>
            </div>
            <h1 className="text-4xl md:text-7xl xl:text-[9em] mb-8">STUDIOS</h1>
            <div className="flex justify-center">
              <button className="border rounded border-[#37373e] bg-[#0e0e10] transition duration-200 hover:bg-[#FFFFFF] hover:text-[#000000] w-[50%] p-[1.3em] mb-3 -rotate-3">
                <h1 className="text-xl">HIT US UP!</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
