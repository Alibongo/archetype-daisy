import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke framing lorem ipsum dolar ipsum dolar lorem dolar ipsum dolar"
      className="z-50 absolute"
    >
      <Hero />
      <Features />
      <About />
      <Testimonials />
    </Container>
  );
}
