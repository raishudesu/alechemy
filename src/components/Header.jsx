import React from "react";
import { GiBeerStein } from "react-icons/gi";

const Header = () => {
  return (
    <div className="bg-[#F7F6E7] w-full sticky top-0 h-20 flex justify-center items-center z-30">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold flex items-center gap-2">
          <GiBeerStein size={40} className="text-[#F2A154]" />
          <h1>alechemy</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
