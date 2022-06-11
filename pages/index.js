import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import ContactF from "../components/ContactF";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Sustainability from "../components/Sustainability";

export default function Home() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke framing and fine art services"
      image="/piggin.png"
    >
      <Hero />
      <Features />
      <About />
      <Sustainability />
      <Testimonials />
      <ContactF />
    </Container>
  );
}
