import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Archetype Fine Art Framing",
    description: `Bespoke framing and fine art services`,
    type: "website",
    ...customMeta,
  };
  return (
    <div id="top">
      {/* meta data */}
      <Head>
        <title>{meta.title}</title>
        <meta name="Archetype" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://archetype.com${router.asPath}`}
        />
        <link rel="icon" href="/piggin.png" />
      </Head>
      {/* main content */}
      <main className="w-full">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
