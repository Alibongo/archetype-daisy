import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import Image from "next/image";

import chevron from "../public/images/examples/AbigailGrey.webp";
import alumFrame from "../public/images/examples/alumFrame.webp";
import skateBoard from "../public/images/examples/SkateFab.webp";
// import conservation from "../public/images/examples/conservation.webp";
import tarySimon from "../public/images/examples/tarySimonExhibition.webp";

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
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {/* Bespoke Framing */}
          <div className="flex flex-col items-center justify-center order-2 h-full col-span-1 py-10 lg:order-1 md:p-5">
            <div className="flex flex-col w-3/4 gap-3">
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
              <div className="grid gap-4 text-white md:grid-cols-3 place-content-center">
                <div className="p-5 bg-green-600">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Provide
                  </h3>
                  custom canvas stretchers, constructed with wood or aluminium.
                </div>
                <div className="p-5 bg-yellow-500">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Stretched and primed
                  </h3>
                  surfaces and advice about fabrics and products, ensuring you
                  have the right surface for artistic needs.
                </div>
                <div className="p-5 bg-orange-400">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Create
                  </h3>
                  custom plinths for sculpture using plywood among many others
                  materials, also with unlimited finishes.
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center justify-center order-1 col-span-1 lg:order-2">
            <Image
              className="absolute rounded-lg"
              objectFit="cover"
              objectPosition="0 20%"
              layout="responsive"
              width={4928 / 4}
              height={3264 / 4}
              src={alumFrame}
            />
          </div>

          {/* Specialist Exhibition*/}
          <div className="relative order-3 col-span-1 rounded-md">
            <Image
              className="absolute rounded-lg"
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
              <div className="grid gap-4 text-white md:grid-cols-3 place-content-center">
                <div className="p-5 rounded-md bg-blue-900/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold ">
                    Installation
                  </h3>
                  Books, artefacts and artworks placed into exhibition space.
                </div>
                <div className="p-5 rounded-md bg-blue-800/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Consultations and advice
                  </h3>
                  How to display artefacts safely.
                </div>
                <div className="p-5 rounded-md bg-blue-700/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Fabrication
                  </h3>
                  Book cradles fabricated with Perspex/ Mountboard.
                </div>
              </div>
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
              <div className="grid gap-4 text-white md:grid-cols-3 place-content-center">
                <div className="p-5 rounded-md bg-blue-900/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Provide
                  </h3>
                  custom canvas stretchers, constructed with wood or aluminium.
                </div>
                <div className="p-5 rounded-md bg-blue-800/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Stretched and primed
                  </h3>
                  surfaces and advice about fabrics and products, ensuring you
                  have the right surface for artistic needs.
                </div>
                <div className="p-5 rounded-md bg-blue-700/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Create
                  </h3>
                  custom plinths for sculpture using plywood among many others
                  materials, also with unlimited finishes.
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-5 col-span-1 lg:order-6">
            <Image
              className="absolute rounded-lg"
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
              className="absolute rounded-lg"
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
              <div className="grid gap-4 text-white md:grid-cols-3 place-content-center">
                <div className="p-5 rounded-md bg-blue-900/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Provide
                  </h3>
                  custom canvas stretchers, constructed with wood or aluminium.
                </div>
                <div className="p-5 rounded-md bg-blue-800/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Stretched and primed
                  </h3>
                  surfaces and advice about fabrics and products, ensuring you
                  have the right surface for artistic needs.
                </div>
                <div className="p-5 rounded-md bg-blue-700/100">
                  <h3 className="mb-2 text-xl leading-tight text-bold">
                    Create
                  </h3>
                  custom plinths for sculpture using plywood among many others
                  materials, also with unlimited finishes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
