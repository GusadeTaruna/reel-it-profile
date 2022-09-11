import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-hero flex flex-col align-middle justify-center text-white text-center">
        <div className="p-4 m-auto">
          <h1 className="text-4xl xl:text-9xl">REEL IT</h1>
          <div className="border border-[#37373e] bg-[#0e0e10] px-[1.5em] py-[0.6em] mb-3">
            <span className="font-grotesk_mono uppercase text-[#a8a8a8]">
              Lorem
              <span className="font-monument_regular text-white">
                {" "}
                Creative
              </span>{" "}
              ipsum dolor sit{" "}
              <span className="font-monument_regular text-white">
                amet
              </span>{" "}
              Lorem ipsum{" "}
              <span className="font-monument_regular text-white">Taste</span>
            </span>
          </div>
          <h1 className="text-4xl xl:text-9xl mb-12">STUDIOS</h1>
          <div className="flex justify-center">
            <div className="border rounded border-[#37373e] bg-[#0e0e10] w-[50%] p-[1.6em] mb-3 -rotate-3">
              <h1 className="text-xl">HIT US UP!</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
