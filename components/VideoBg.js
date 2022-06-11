import React, { useState, useEffect } from "react";

export default function Video() {
  return (
    <video
      id="background-video"
      className="w-full h-full"
      autoPlay
      loop="yes"
      muted
      poster="./video/studio.webp"
    >
      <source type="video/mp4" src="./video/hero-vid.mp4" />
      <img src="./video/studio.webp" alt="archetype studio" />
    </video>
  );
}
