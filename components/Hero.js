import React from "react";
import VideoBg from "./VideoBg";
// TODO: Navbar remove from here

export default function Hero() {
  return (
    //mobile set up
    //does it need to be sticky
    //make hero dynamic and reusable

    <div className="w-full relative">
      <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <div className="text-center md:text-left max-w-md">
          <h1 className=" text-2xl md:text-5xl text-white z-10">
            Bespoke conservation framing, Artist studio support, Fabrication
            and, Exhibition installation.
          </h1>
        </div>
      </div>
      <VideoBg />
    </div>
  );
}
