import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// TODO: sticky navbar component over hero.

export default function Container({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Archetype Fine Art Framing",
    description: `Bespoke framing lorem ipsum dolar ipsum dolar lorem dolar ipsum dolar`,
    // image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div id="top">
      {/* meta data */}
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Archetype" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@molloy_ali" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
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
