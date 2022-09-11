import React from "react";

const Topbar = () => {
  return (
    <div className="grid grid-cols-12 gap-0 mb-4">
      <div className="col-span-9 border border-[#37373e] bg-[#0e0e10] p-4 w-full flex align-middle">
        <span className="text-left text-xs font-grotesk_mono mt-[-0.2rem]">
          SHOOT YOUR DANCE COVER VIDEO WITH US
        </span>
      </div>
      <div className="col-span-2 border border-[#37373e] bg-[#0e0e10] p-4 w-full flex align-middle">
        <span className="uppercase text-sm m-auto">Film it. Reel it.</span>
      </div>
      <div className="col-span-1 border border-[#37373e] bg-[#0e0e10] p-4 w-full flex align-middle"></div>
    </div>
  );
};

export default Topbar;
