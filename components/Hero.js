import React from "react";
import VideoBg from "./VideoBg";
// TODO: Navbar remove from here
// import Navbar from "./Navbar";

export default function Hero() {
  return (
    //mobile set up
    //does it need to be sticky
    //make hero dynamic and reusable
    <div className="hero">
      {/* <Navbar /> */}
      <VideoBg />
      <div className="hero-overlay min-h-screen bg-opacity-60"></div>
      <div className="">
        <div className="max-w-md">
          <h1 className="md:text-5xl text-white">
            Bespoke conservation, Framing, Artist studio support, Fabrication
            and, Exhibition installation.
          </h1>
        </div>
      </div>
    </div>
  );
}
