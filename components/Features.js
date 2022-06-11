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
      <h2 id="services" className="text-center font-bold pt-8 mb-5">
        Our Services
      </h2>
      {/* grid */}
      <div id="feature-content" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Bespoke Framing */}
          <div className="order-2 md:order-1 col-span-1 flex h-full flex-col items-center justify-center py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-4xl font-semibold">
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
          <div className="order-1 md:order-2 col-span-1 relative">
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
          <div className="order-3 col-span-1 relative">
            <Image
              className="absolute "
              objectFit="cover"
              layout="responsive"
              width={4928 / 4}
              height={3264 / 4}
              src={tarySimon}
            />
          </div>
          <div className="order-4 col-span-1 flex h-full flex-col items-center justify-center py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-4xl font-semibold">
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
          <div className="order-6 md:order-5 col-span-1 flex h-full flex-col items-center justify-center py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-4xl font-semibold">
                Fabrication
              </h3>
              <p className="">
                We’re now able to offer many bespoke requests using our
                carpentry skills and well-equipped workshop, helping us provide
                creative solutions for all aspects of the art industry.
              </p>
              <p>Our services include:</p>
              <ul className="list-disc list-inside leading-loose w-9/12">
                <li className="">
                  Providing custom canvas stretchers, constructed with wood or
                  aluminium.
                </li>
                <li className="">
                  Stretching and priming surfaces with a wealth of knowledge and
                  advice about fabrics and products, ensuring you have the right
                  surface for artistic needs.
                </li>
                <li className="">
                  Creating custom plinths for sculpture using plywood among many
                  others materials, and just like the frames we can offer
                  unlimited finishes.
                </li>
              </ul>
            </div>
          </div>
          <div className="order-5 md:order-6 col-span-1 relative">
            <Image
              className="absolute"
              src={skateBoard}
              layout="responsive"
              objectFit="cover"
              objectPosition="0 40%"
              width={4928 / 4}
              height={3264 / 4}
            />
          </div>

          {/* Artist Studio Support */}
          <div className="order-7 col-span-1 relative">
            <Image
              className="absolute"
              src={chevron}
              layout="responsive"
              objectFit="contain"
              width={4928 / 4}
              height={3264 / 4}
            />
          </div>
          <div className="order-8 col-span-1 flex h-full flex-col items-center justify-center py-10 md:p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-4xl font-semibold">
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
