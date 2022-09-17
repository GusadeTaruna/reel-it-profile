import React from "react";

const ReasonCard = (props) => {
  console.log(props.color);
  return (
    <div
      className="max-w-[29rem] py-6 px-8 shadow-lg rounded-lg my-8"
      style={{ backgroundColor: props.color }}
    >
      <div>
        <h2 className="text-gray-800 text-2xl uppercase">{props.title}</h2>
        <p className="mt-2 text-gray-600 font-grotesk_reg">{props.desc}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
