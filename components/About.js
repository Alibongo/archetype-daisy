import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import ButtonSvg from "./ButtonSvg";
// import Image from "next/image";
// import group from "../public/images/general/group.webp";

export default function About({}) {
  return (
    <section id="about" className="pt-5">
      <div className="container md:w-8/12">
        <div className="">
          <div className="">
            <div className="text-center">
              <h2 className="font-bold text-gray-800">About Us</h2>
              <div>
                <div className="relative py-8">
                  {/* <Image
                    className="rounded-full"
                    src={group}
                    width={300}
                    height={300}
                    alt="Shoes"
                    objectFit="cover"
                  /> */}

                  <img
                    src="/images/general/group.webp"
                    className="w-64 h-64 mx-auto rounded-full"
                    alt="group"
                    height="auto"
                    object-fit="cover"
                  />
                </div>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Archetype was started in 2015 in Gloucestershire by myself,
                  Lily Cheetham, and my partner, Matt Curtis. It was born from
                  our shared love of art, and developed using experience spent
                  working in various parts of the art world. We love working for
                  ourselves and use our range of skills and knowledge to produce
                  bespoke creative picture frames/exhibition installation and
                  specialist fabrication services.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  Our wonderful workshop is based in Stroud, a creative town in
                  itself. We have worked with national public galleries and
                  commercial, international artists and collectors alike.
                </p>
                {/* <p className="mb-6 text-base leading-relaxed text-body-color">
                    Piglet, our newest addition to the company.
                  </p> */}
              </div>
            </div>
            {/* image section */}
            <div className="text-center">
              <div className="relative inline-block ">
                <img
                  className=""
                  src="./images/general/shelf.jpeg"
                  alt="Studio Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
