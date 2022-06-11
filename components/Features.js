import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import Image from "next/image";

import chevron from "../public/images/examples/AbigailGrey.jpg";
import alumFrame from "../public/images/examples/alumFrame.jpg";
import skateBoard from "../public/images/examples/SkateFab.jpg";
import conservation from "../public/images/examples/conservation.jpg";
import tarySimon from "../public/images/examples/tarySimonExhibition.jpg";

export default function Features() {
  return (
    //padding top 120 pb 50
    //image full... Gifs for various
    //add link to images/sections to go through to larger pages
    <section className="container pb-5">
      <h2 id="services" className="pt-8 mb-5 font-bold text-center">
        Our Services
      </h2>
      {/* grid */}
      <div id="feature-content" className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Bespoke Framing */}
          <div className="flex flex-col items-center justify-center order-2 h-full col-span-1 py-10 lg:order-1 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold md:text-4xl">
                Bespoke Conservation Framing
              </h3>
              <p className="">
                We possess a specialist knowledge of conservation, allowing us
                to offer advice on how to best fit your artwork and protect it
                going forward. We use an up-to-date methodology and utilise
                modern-materials to minimise the intervention on the artwork.
              </p>
              <p className="">
                We also work with accredited painting/textile and paper
                conservators when treatment is required for your artwork.
              </p>
            </div>
          </div>
          <div className="relative order-1 col-span-1 lg:order-2">
            <Image
              className="absolute"
              objectFit="cover"
              objectPosition="0 20%"
              layout="responsive"
              width={4928 / 4}
              height={3264 / 4}
              src={alumFrame}
            />
          </div>

          {/* Specialist Exhibition*/}
          <div className="relative order-3 col-span-1">
            <Image
              className="absolute "
              objectFit="cover"
              layout="responsive"
              width={4928 / 4}
              height={3264 / 4}
              src={tarySimon}
            />
          </div>
          <div className="flex flex-col items-center justify-center order-4 h-full col-span-1 py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold md:text-4xl">
                Specialist Exhibition Installation
              </h3>
              <p className="">
                We work with big national public galleries/exhibitions and
                private clients to provide a range of install/de-install
                services:
              </p>
              <p className="">
                This consists of installing archive items and books into
                vitrines in exhibitions. We offer consultations to make supports
                for the above, with the book cradles made from Perspex and
                mount/box board. We work with curators, technicians and art
                handlers on site to help deliver to the highest standard.{" "}
              </p>
            </div>
          </div>

          {/* Fabrication */}
          <div className="flex flex-col items-center justify-center order-6 h-full col-span-1 py-10 lg:order-5 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold md:text-4xl">
                Fabrication
              </h3>
              <p className="">
                Utilising our wealth of carpentry skills and well-equipped
                workshop, we offer many bespoke solutions for all aspects of the
                art industry.
              </p>
              <p>Our services include:</p>
              <ul className="w-9/12 leading-loose list-disc list-inside">
                <li className="">
                  Providing custom canvas stretchers, constructed with wood or
                  aluminium.
                </li>
                <li className="">
                  Stretching and priming surfaces and advice about fabrics and
                  products, ensuring you have the right surface for artistic
                  needs.
                </li>
                <li className="">
                  Creating custom plinths for sculpture using plywood among many
                  others materials, also with unlimited finishes.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative order-5 col-span-1 lg:order-6">
            <Image
              className="absolute"
              src={skateBoard}
              layout="responsive"
              objectFit="cover"
              objectPosition="0 40%"
              width={4928 / 4}
              height={3364 / 4}
            />
          </div>

          {/* Artist Studio Support */}
          <div className="relative order-7 col-span-1">
            <Image
              className="absolute"
              src={chevron}
              layout="responsive"
              objectFit="contain"
              width={4928 / 4}
              height={3264 / 4}
            />
          </div>
          <div className="flex flex-col items-center justify-center order-8 h-full col-span-1 py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold md:text-4xl">
                Artist Studio Support
              </h3>
              <p className="">
                Drawing on a wealth of experience working for various high
                profile artists. We offer varied support, from creating
                databases and back catalogues of your collections. Photographing
                your work. General admininstration practical assistance needed
                in-studio support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
