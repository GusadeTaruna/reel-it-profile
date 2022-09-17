import React from "react";
import { ReactComponent as UnderlineReason } from "../assets/other/underline-reason.svg";

const Reason = () => {
  return (
    <div className="container px-16 py-20 min-h-screen bg-white_line border-t border-gray-500">
      <h1
        className="text-[4rem] uppercase text-center"
        style={{ lineHeight: 0.8 }}
      >
        Why <br /> Reel It
      </h1>
      <div className="max-w-[25em] w-full mx-auto">
        <UnderlineReason />
      </div>
    </div>
  );
};

export default Reason;
