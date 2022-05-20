import React from "react";
import VideoBg from "./VideoBg";

export default function Hero() {
  return (
    //mobile set up
    //does it need to be sticky
    <div id="top" className="hero">
      <VideoBg />
      <div className="hero-overlay bg-opacity-60"></div>
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
