import React, { useEffect, useState } from "react";
import Link from "next/link";
import userData from "../constants/userData";

export default function Features({}) {
  return (
    //padding top 120 pb 50
    //image full... Gifs for various
    //add link to images/sections to go through to larger pages
    <section className="container pt-10">
      <h2 className="font-bold text-center text-gray-800 mb-8">
        Our Primary Services
      </h2>
      {/* grid */}
      <div className="grid gap-4 grid-rows-4">
        {/* first item */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* text */}
          <div className="detail w-full grid place-content-center order-last md:order-first">
            <h3 className="text-3xl text-gray-800 font-bold mb-3 mt-5">
              Bespoke Conservation Framing
            </h3>
            <p className="text-gray-600 mb-3">
              Specialising in conservation framing in line with museum standards
              following up to date research. We use conservation grade materials
              for mounting and framing such as Japanese papers, wheat starch and
              methylcellulose adhesives.
            </p>
            <div>
              <button className="btn btn-outline">More info</button>
            </div>
          </div>
          {/* image */}
          <div className="w-full">
            <img
              src="https://api.lorem.space/image/shoes?w=450&h=450"
              alt="Monitoring"
            />
          </div>
        </div>
        {/* second item */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* image */}
          <div className="">
            <img
              className="md:float-right"
              src="https://api.lorem.space/image/shoes?w=450&h=450"
              alt="Shoes"
            />
          </div>
          {/* text */}
          <div className="detail w-full grid place-content-center">
            <h3 className="text-3xl text-gray-800 font-bold">
              Artist Studio Support
            </h3>
            <p className="text-gray-600">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
            <div>
              <button className="btn btn-outline">More info</button>
            </div>
          </div>
        </div>
        {/* third item */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* text */}
          <div className="detail w-full grid place-content-center order-last md:order-first">
            <h3 className="text-3xl text-gray-800 font-bold mb-3 mt-5">
              Bespoke Conservation Framing
            </h3>
            <p className="text-gray-600 mb-3">
              Specialising in conservation framing in line with museum standards
              following up to date research. We use conservation grade materials
              for mounting and framing such as Japanese papers, wheat starch and
              methylcellulose adhesives.
            </p>
            <div>
              <button className="btn btn-outline">More info</button>
            </div>
          </div>
          {/* image */}
          <div className="w-full">
            <img
              src="https://api.lorem.space/image/shoes?w=450&h=450"
              alt="Monitoring"
            />
          </div>
        </div>
        {/* fourth item */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* image */}
          <div className="">
            <img
              className="md:float-right"
              src="https://api.lorem.space/image/shoes?w=450&h=450"
              alt="Shoes"
            />
          </div>
          {/* text */}
          <div className="detail w-full grid place-content-center">
            <h3 className="text-3xl text-gray-800 font-bold">
              Artist Studio Support
            </h3>
            <p className="text-gray-600">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
            <div>
              <button className="btn btn-outline">More info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
