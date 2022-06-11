import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import ContactF from "../components/ContactF";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke Fine Art Framing"
    >
      <section>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to drop us a line for more information.
            </p>
          </div>
          <ContactF />
        </div>
      </section>
    </Container>
  );
}
