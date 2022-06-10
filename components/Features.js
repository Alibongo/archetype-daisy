import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import Image from "next/image";
import chevron from "../public/images/examples/AbigailGrey.jpg";
import blueFrame from "../public/images/examples/BlueFrame.jpg";

export default function Features() {
  return (
    //padding top 120 pb 50
    //image full... Gifs for various
    //add link to images/sections to go through to larger pages
    <section className="container pb-5">
      <h2 className=" text-center text-gray-800 mt-8 mb-5">Our Services</h2>
      {/* grid */}
      <div id="feature-content" className="container mx-auto">
        <div className="grid grid-cols-12">
          {/* Bespoke Framing */}
          <div className="col-span-6 flex h-full flex-col items-center justify-center p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl">Bespoke Conservation Framing</h3>
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
              <div className="flex flex-col">
                <a className=" uppercase">Learn more</a>
                <span className="h-4 w-32 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Image
              className="h-full w-full"
              src={chevron}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* Specialist Exhibition*/}
          <div className="col-span-6 relative">
            <Image
              className="h-full w-full"
              src={chevron}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="col-span-6 flex h-full flex-col items-center justify-center p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl">Specialist Exhibition Installation</h3>
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
              <div className="flex flex-col">
                <a className=" uppercase">Learn more</a>
                <span className="h-4 w-32 rounded-full"></span>
              </div>
            </div>
          </div>
          {/* Fabrication */}
          <div className="col-span-6 flex h-full flex-col items-center justify-center p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl">Fabrication</h3>
              <p className="">
                We’re now able to offer many bespoke requests using our
                carpentry skills and well-equipped workshop, helping us provide
                creative solutions for all aspects of the art industry.
              </p>
              <p className="">
                We’re now able to offer many bespoke requests using our
                carpentry skills and well-equipped workshop, helping us provide
                creative solutions for all aspects of the art industry.
              </p>
              <p>Our services include:</p>
              <ul>
                <ol>
                  Providing custom canvas stretchers, constructed with wood or
                  aluminium.
                </ol>
                <ol>
                  Stretching and priming surfaces with a wealth of knowledge and
                  advice about fabrics and products, ensuring you have the right
                  surface for artistic needs.
                </ol>
                <ol>
                  Creating custom plinths for sculpture using plywood among many
                  others materials, and just like the frames we can offer
                  unlimited finishes.
                </ol>
              </ul>
              <div className="flex flex-col">
                <a className=" uppercase">Learn more</a>
                <span className="h-4 w-32 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Image
              className="h-full w-full"
              src={chevron}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* Artist Studio Support */}
          <div className="col-span-6 relative">
            <Image
              className="h-full w-full"
              src={chevron}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="col-span-6 flex h-full flex-col items-center justify-center p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl">Artist Studio Support</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col">
                <a className=" uppercase">Learn more</a>
                <span className="h-4 w-32 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
