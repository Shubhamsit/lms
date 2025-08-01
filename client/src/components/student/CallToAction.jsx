import React from "react";
import { assets } from "../../assets/assets";

function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
    Fuel your growth with flexible, hands-on learning-accessible from wherever you are, whenever you choose.
      </p>

      <div className="flex items-center gap-6 font-medium mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-blue-600">
          Get started
        </button>
        <button className="flex items-center gap-2">
          Learn more <img src={assets.arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
