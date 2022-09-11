import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";

const Topbar = () => {
  return (
    <div className="grid grid-cols-12 gap-0 mt-10">
      <div className="col-span-9 border border-[#37373e] bg-[#0e0e10] py-8 px-5 w-full flex align-middle">
        <span className="text-left text-xs font-grotesk_mono mt-[-0.2rem]">
          SHOOT YOUR DANCE COVER VIDEO WITH US
        </span>
      </div>
      <div className="col-span-2 border border-[#37373e] bg-[#0e0e10] py-8 px-5 w-full flex align-middle">
        <span className="uppercase text-sm m-auto">Film it. Reel it.</span>
      </div>
      <div className="col-span-1 border border-[#37373e] bg-[#0e0e10] py-8 px-5 w-full flex align-middle relative">
        <div className="absolute w-[40%] h-10 bg-white left-8 top-5 rounded-[50%]"></div>
        <div className="absolute top-[5.3em] left-0 border border-[#37373e] bg-[#0e0e10] w-full h-[75vh] flex flex-col align-middle justify-center py-8">
          <h1
            className="uppercase font-grotesk_mono text-sm mx-auto h-full"
            style={{ writingMode: "vertical-rl" }}
          >
            Follow us on social
          </h1>
          <div id="social-icon" className="mx-auto flex flex-col gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/reelitkpop"
              className="rotate-90"
            >
              <BsFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/reel.it_/"
              className="rotate-90"
            >
              <RiInstagramFill />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/c/ReelIt"
              className="rotate-90"
            >
              <SiYoutubemusic />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
