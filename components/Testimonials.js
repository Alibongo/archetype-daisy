import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";

export default function Testimonials({}) {
  return (
    // turn these into grid instead
    <section id="testimonials" className="pt-10">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Testimonials
              </span>
              <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                What Our Clients Say
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed mb-6">
                “I’ve been working with Archetype for years now, the quality of
                their frames and plinths are excellent, they always have great
                advice and has been able to accommodate some very tight
                deadlines too, which is much appreciated!"
              </p>
              <span className="text-sm font-semibold">Rachel Howard</span>
              <p className="text-xs text-[#969696]">Artist</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".1s"
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  "Archetype produces bespoke conservation grade mounting and
                  framing at the highest standard. They are a pleasure to work
                  with, adapting to a wide range of briefs and offering
                  invaluable advice."
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">Simon Philpott</span>
                  <p className="text-xs text-[#969696]">
                    Senior Paper Conservation Technician at Tate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".15s
              "
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  “We're impressed. It's all intuitive. It's clean. It's
                  masterfully created. Craftsmanship."
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">Margin Gesmu</span>
                  <p className="text-xs text-[#969696]">Something Gallery</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
              data-wow-delay=".2s
              "
            >
              <div className="ud-testimonial-content mb-6">
                <p className="text-base tracking-wide text-body-color">
                  “Our members are so impressed. Thier work is inuative and
                  clean. It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="ud-testimonial-info flex items-center">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">William Smith</span>
                  <p className="text-xs text-[#969696]">Owner at Aspex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mx-4 w-full">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-title mb-8 text-center">
                <h6 className="relative inline-flex items-center text-xs font-normal text-body-color">
                  <span className="mr-4 inline-block h-[1px] w-8 bg-[#afb2b5] "></span>
                  Some Of Our Clients
                  <span className="ml-4 inline-block h-[1px] w-8 bg-[#afb2b5]"></span>
                </h6>
              </div>
              <div className="ud-brands-logo flex flex-wrap place-content-center">
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://www.sidmotiongallery.co.uk/"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/images/clients/tate-logo.png"
                      alt="tailgrids"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://museum.wales/"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/images/clients/nmw-logo.gif"
                      alt="Museum of Wales"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://williammorrissociety.org/"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/images/clients/williammorris-logo.jpg"
                      alt="William Morris Society"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://graygrids.com"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src="/images/clients/zardi-logo.png"
                      alt="Zardi and Zardi"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
                <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                  <a
                    href="https://www.pangolinlondon.com/"
                    target="_blank"
                    rel="nofollow noopner"
                  >
                    <img
                      src=""
                      alt="Panagolin"
                      className="grayscale duration-300 hover:filter-none"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
