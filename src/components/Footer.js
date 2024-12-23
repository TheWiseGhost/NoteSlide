import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div className="bg-white flex flex-col px-4 md:px-20 pb-8">
      <div className="flex flex-row space-x-10 justify-center">
        <div className="font-alata border-yellow-400 border-2 border-dashed w-fit px-6 py-3 text-black text-center">
          <p>Founder and CEO : Aditya Byju</p>
        </div>
        {/* <div className="font-alata border-gray-300 border-2 border-dashed w-fit px-6 py-3 text-black text-center">
          <p>CMO: Ani Gounder</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
