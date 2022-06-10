import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";
import ButtonSvg from "./ButtonSvg";
import Image from "next/image";
import lily from "../public/images/general/Lily.jpg";

export default function About({}) {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="">
            <div className="">
              <div className="text-center">
                <div className="pt-2 relative">
                  <Image
                    className="rounded-full"
                    src={lily}
                    width={300}
                    height={300}
                    alt="Shoes"
                    objectFit="cover"
                  />
                </div>

                <h2 className="font-bold text-gray-800 my-8">
                  A Something Studio
                </h2>
                <div>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    Archetype was started in 2015 in Gloucestershire by myself,
                    Lily Cheetham, and my partner, Matt Curtis. It was born from
                    our shared love of art, and developed using experience spent
                    working in various parts of the art world. We love working
                    for ourselves and use our range of skills and knowledge to
                    produce bespoke creative picture frames/exhibition
                    installation and specialist fabrication services.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    Our wonderful workshop is based in Stroud, a creative town
                    in itself. We have worked with national public galleries and
                    commercial, international artists and collectors alike.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-body-color">
                    Piglet, our newest addition to the company.
                  </p>
                  <ButtonSvg />
                </div>
              </div>
              {/* image section */}
              <div className="text-center">
                <div
                  className="relative inline-block
                "
                >
                  <div className="triangle float-right "></div>
                  {/* <img
                    className="md:float-right "
                    src="./images/general/shelf.jpeg"
                    alt="Studio Image"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
