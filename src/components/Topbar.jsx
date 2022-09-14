import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";

const Topbar = () => {
  return (
    <>
      <div className="border border-[#37373e] bg-[#0e0e10] rounded-l-lg rounded-tr-lg w-full grid grid-cols-12 gap-0">
        <div className="col-span-9 p-5 text-left my-auto">
          <h1 className="text-xs font-grotesk_mono mt-[-12px]">
            SHOOT YOUR DANCE COVER VIDEO WITH US
          </h1>
        </div>
        <div className="col-span-2 border-x border-[#37373e] m-auto p-7">
          <h1 className="uppercase text-sm">Film it. Reel it.</h1>
        </div>
        <div className="col-span-1 relative">
          <div className="w-full h-full py-5 px-8 m-auto">
            <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[4.82rem] border w-full border-[#37373e] bg-[#0e0e10] rounded-b-lg xl:h-[78vh] 2xl:h-[85vh] flex flex-col align-middle justify-center text-center">
            <h1
              className="uppercase font-grotesk_mono text-sm mx-auto h-full"
              style={{ writingMode: "vertical-rl" }}
            >
              Follow us on social
            </h1>
            <div id="social-icon" className="flex flex-col gap-4">
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
      {/* <div className="absolute top-0 right-0 border border-[#37373e] bg-[#0e0e10] p-8 w-20 h-[80vh]"></div> */}
    </>
  );
};

export default Topbar;
