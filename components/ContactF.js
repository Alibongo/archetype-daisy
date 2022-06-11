import React, { useEffect, useState } from "react";

import Link from "next/link";

export default function ContactF({}) {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h2 className="mb-4 font-bold title-font">Contact Us</h2>
          <p className="mx-auto leading-relaxed lg:w-2/3">
            Feel free to drop us a line for more information.
          </p>
          <a
            className="underline contactEmail decoration-indigo-500"
            href="mailto:enquiries@archetypefineart.com"
          >
            enquiries@archetypefineart.com
          </a>
        </div>
        <div className="flex justify-center"></div>
      </div>
    </section>
  );
}
