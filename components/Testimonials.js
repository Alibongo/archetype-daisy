import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";

export default function Testimonials({}) {
  return (
    // turn these into grid instead
    <section id="testimonials" className="pt-10">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="w-full mx-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                What Our Clients Say
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                &ldquo;I’ve been working with Archetype for years now, the
                quality of their frames and plinths are excellent, they always
                have great advice and has been able to accommodate some very
                tight deadlines too, which is much appreciated!&rdquo;.
              </p>
              <span className="text-sm font-semibold">Rachel Howard</span>
              <p className="text-xs text-[#969696]">Artist</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="p-8 mb-12 bg-white shadow-testimonial"
              data-wow-delay=".1s"
            >
              <div className="mb-6 ud-testimonial-content">
                <p className="text-base tracking-wide text-body-color">
                  &ldquo;Archetype produces bespoke conservation grade mounting
                  and framing at the highest standard. They are a pleasure to
                  work with, adapting to a wide range of briefs and offering
                  invaluable advice.&rdquo;
                </p>
              </div>
              <div className="flex items-center ud-testimonial-info">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">Simon Philpott</span>
                  <p className="text-xs text-[#969696]">
                    Senior Paper Conservation Technician at The Tate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="p-8 mb-12 bg-white ud-single-testimonial wow fadeInUp shadow-testimonial"
              data-wow-delay=".15s
              "
            >
              <div className="mb-6 ud-testimonial-content">
                <p className="text-base tracking-wide text-body-color">
                  &ldquo;We started working with Archetype Fine Art Services a
                  year ago. One experience was enough to trust them with all our
                  orders since then. They handle everything so professionally,
                  with a great level of care and precision. No matter how big
                  the challenge, they always try their best to come up with the
                  best solution!&rdquo;
                </p>
              </div>
              <div className="flex items-center ud-testimonial-info">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">Azadeh Zaferani</span>
                  <p className="text-xs text-[#969696]">
                    Director, Ab-Anbar Gallery
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="p-8 mb-12 bg-white ud-single-testimonial wow fadeInUp shadow-testimonial"
              data-wow-delay=".2s
              "
            >
              <div className="mb-6 ud-testimonial-content">
                <p className="text-base tracking-wide text-body-color">
                  &ldquo;Lily is a patient, innovative and expert framer.
                  Working with her is always fun; her keen eye and deep material
                  knowledge have led to bespoke frame finishes and unique
                  options as well as problem solving. I trust her judgment and
                  expertise and her fresh take on framing is always a total
                  pleasure to collaborate with.&rdquo;
                </p>
              </div>
              <div className="flex items-center ud-testimonial-info">
                <div className="ud-testimonial-meta">
                  <span className="text-sm font-semibold">Emma Cousin</span>
                  <p className="text-xs text-[#969696]">Artist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mx-4">
            <div className="mb-8 text-center ud-title">
              <h6 className="relative inline-flex items-center text-xs font-normal text-body-color">
                <span className="mr-4 inline-block h-[1px] w-8 bg-[#afb2b5] "></span>
                Some Of Our Clients
                <span className="ml-4 inline-block h-[1px] w-8 bg-[#afb2b5]"></span>
              </h6>
            </div>
            <div className="flex flex-wrap ud-brands-logo place-content-center">
              <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                <a
                  href="https://www.sidmotiongallery.co.uk/"
                  target="_blank"
                  rel="nofollow noopner noreferrer"
                >
                  <img
                    src="/images/clients/tate-logo.png"
                    alt="tailgrids"
                    className="duration-300 grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                <a
                  href="https://museum.wales/"
                  target="_blank"
                  rel="nofollow noopner noreferrer"
                >
                  <img
                    src="/images/clients/nmw-logo.gif"
                    alt="Museum of Wales"
                    className="duration-300 grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                <a
                  href="https://williammorrissociety.org/"
                  target="_blank"
                  rel="nofollow noopner noreferrer"
                >
                  <img
                    src="/images/clients/williammorris-logo.jpg"
                    alt="William Morris Society"
                    className="duration-300 grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="ud-single-logo mr-10 mb-5 max-w-[140px]">
                <a
                  href="https://graygrids.com"
                  target="_blank"
                  rel="nofollow noopner noreferrer"
                >
                  <img
                    src="/images/clients/zardi-logo.png"
                    alt="Zardi and Zardi"
                    className="duration-300 grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="ud-single-logo mr-9 mb-5 max-w-[165px]">
                <a
                  href="https://www.pangolinlondon.com/"
                  target="_blank"
                  rel="nofollow noopner noreferrer"
                >
                  <img
                    src="/images/clients/pangolin.png"
                    alt="Panagolin"
                    className="duration-300 grayscale hover:filter-none"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
