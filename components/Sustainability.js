import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import ButtonSvg from "./ButtonSvg";
import Image from "next/image";

export default function Sustainability({}) {
  return (
    <section id="sustainability" className="">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col w-full mb-8 text-center">
          <h2 className="pt-8 mb-5 font-bold text-center">
            Our Sustainability Goals
          </h2>
          <p className="mx-auto text-base leading-relaxed">
            We are commited to reducing our environmental impact and implement
            the following key values in our daily practices:
          </p>
          <p className="mb-4 text-base leading-relaxed">
            We try to offer advice that would result in the frame lasting
            longer, for example as using a harder wood or a more robust design.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Conservation</h3>
            <p className="mb-4 text-base leading-relaxed">
              Conservation is sustainability at work, we work with adhesives and
              careful framing methods to ensure no future damage to the artwork
              is likely to occur.
            </p>
          </div>
          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Reduce Waste</h3>
            <p className="mb-4 text-base leading-relaxed">
              Where possible we make sure we produce as little waste as
              possible, including our offcuts of glass and wood. We research how
              to most efficiently separate a sheet.
            </p>
          </div>
          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Recycle</h3>
            <p className="mb-4 text-base leading-relaxed">
              We try to recycle as much of our waste output as possible,
              donating offcuts of paper and mountboard to schools, artists, and
              parents.
            </p>
          </div>
          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Longevity</h3>
            <p className="mb-4 text-base leading-relaxed">
              When sourcing sundries and any other products we will judge its
              effectiveness against its longevity and its recyclability.
            </p>
          </div>
          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Water-based</h3>
            <p className="mb-4 text-base leading-relaxed">
              We only use water-based primers and lacquers for our sprayed frame
              finishes. The environmental impact is considerably less and
              results in a better finish, as it is less likely to have the
              yellowing colour in the finishes often associated with solvent
              lacquers.
            </p>
          </div>

          <div className="px-8 py-6 xl:w-1/4 lg:w-1/2 md:w-full ">
            <h3 className="mb-2 text-4xl">Balance</h3>
            <p className="mb-4 text-base leading-relaxed">
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
