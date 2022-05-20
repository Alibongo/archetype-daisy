import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";

export default function Features({}) {
  return (
    <section id="about" className=" pt-20 lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
          <div className="">
            <div className="">
              <div className="text-center">
                {/* written content */}

                {/* <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"> */}
                <span className="mb-5 inline-block py-2 text-sm font-medium">
                  Something punchy about us.
                </span>
                <h2 className="font-bold text-gray-800 mb-8">
                  Something About Us.
                </h2>
                <div>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Operating from our studios in the South West we offer a
                    range of fine art services including Bespoke Conservation
                    Framing, Artist Studio Support, Fabrication, and Exhibition
                    Installation.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illo veritatis exercitationem nisi eos dignissimos saepe eum
                    ut laboriosam, totam, error iusto quis id quo vel culpa
                    cupiditate nemo quas dolorem..
                  </p>
                  <button className="btn btn-outline">More info</button>
                </div>
              </div>
              {/* image section */}
              <div className="text-center">
                <div className="relative z-10 inline-block">
                  <img
                    src="assets/images/about/about-image.svg"
                    alt="image"
                    className="mx-auto lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
