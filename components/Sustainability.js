import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import ButtonSvg from "./ButtonSvg";
import Image from "next/image";
import lily from "../public/images/general/Lily.jpg";

export default function Sustainability({}) {
  return (
    <section id="sustainability" className="">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="text-center font-bold pt-8 mb-5">
            Our Sustainability Goals
          </h2>
          <p className="mx-auto leading-relaxed text-base">
            We are commited to reducing our environmental impact and implement
            the following key values in our daily practices:
          </p>
          <p className="leading-relaxed text-base mb-4">
            We try to offer advice that would result in the frame lasting
            longer, for example as using a harder wood or a more robust design.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Conservation</h3>
            <p className="leading-relaxed text-base mb-4">
              Conservation is sustainability at work, we work with adhesives and
              careful framing methods to ensure no future damage to the artwork
              is likely to occur.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Reduce Waste</h3>
            <p className="leading-relaxed text-base mb-4">
              Where possible we make sure we produce as little waste as
              possible, including our offcuts of glass and wood. We research how
              to most efficiently separate a sheet.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Recycle</h3>
            <p className="leading-relaxed text-base mb-4">
              We try to recycle as much of our waste output as possible,
              donating offcuts of paper and mountboard to schools, artists, and
              parents.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Longevity</h3>
            <p className="leading-relaxed text-base mb-4">
              When sourcing sundries and any other products we will judge its
              effectiveness against its longevity and its recyclability.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Water-based</h3>
            <p className="leading-relaxed text-base mb-4">
              We only use water-based primers and lacquers for our sprayed frame
              finishes. The environmental impact is considerably less and
              results in a better finish, as it is less likely to have the
              yellowing colour in the finishes often associated with solvent
              lacquers.
            </p>
          </div>

          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 ">
            <h3 className="text-4xl mb-2">Balance</h3>
            <p className="leading-relaxed text-base mb-4">
              We try to strike a balance when it comes to wood selection for
              frames, aiming to choose the best pieces of wood whilst still
              appreciating the natural elements of the material. Despite small
              organic imperfections, the frames are still beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
