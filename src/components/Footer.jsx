import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-[#E7E6E1] py-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-1 font-bold">
          <BiCopyright />
          <h1>alechemy 2023</h1>
        </div>
        <div className="flex justify-center items-center gap-1 text-sm font-bold">
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
