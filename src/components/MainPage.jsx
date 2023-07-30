import React from "react";
import Beers from "./Beers";

const MainPage = () => {
  return (
    <div className="w-full min-h-screen max-h-fit overflow-hidden p-4">
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-6xl capitalize">The best beers of all time.</h1>
        <Beers />
      </div>
    </div>
  );
};

export default MainPage;
