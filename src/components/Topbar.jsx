import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";

const Topbar = () => {
  return (
    <>
      <div className="border border-[#37373e] bg-[#0e0e10] rounded-l-lg rounded-tr-lg w-full grid grid-cols-12 gap-0">
        <div className="col-span-6 md:col-span-7 xl:col-span-8 p-5 text-left my-auto">
          <h1 className="text-sm font-grotesk_mono uppercase">
            Film it. Reel it.
          </h1>
        </div>
        <div className="col-span-5 md:col-span-4 xl:col-span-3 border-l border-[#37373e] p-7">
          <h1 className="uppercase text-sm text-center">Bali - Indonesia</h1>
        </div>
        <div className="col-span-1 border-l border-[#37373e] relative">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
          <div className="absolute top-[4.82rem] border w-full border-[#37373e] bg-[#0e0e10] rounded-b-lg h-[70vh] xl:h-[78vh] 2xl:h-[85vh] flex flex-col align-middle justify-center text-center">
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
