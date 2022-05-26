import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
//TODO: Navbar currently not inside container
import Navbar from "../components/Navbar";

export default function Conservation() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke framing lorem ipsum dolar ipsum dolar lorem dolar ipsum dolar"
      className="z-50 absolute"
    >
      <section id="conservation" className=" pt-20 lg:pt-[120px]">
        <div className="container">
          <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
            <div className="">
              <div className="">
                <div className=" text-center">
                  {/* heading content */}
                  {/* <span className="mb-5 inline-block py-2 text-sm font-medium">
                    Something punchy about us.
                  </span> */}
                  <h1 className="font-bold text-gray-800 mb-8">
                    Our Conservation Practices
                  </h1>
                  {/* image section */}
                  <div id="top-image" className="">
                    <div className="relative z-10 inline-block">
                      <img
                        className="md:float-right"
                        src="https://api.lorem.space/image/shoes?w=750&h=450"
                        alt="Shoes"
                      />
                    </div>
                  </div>
                </div>
                {/* written content */}
                <div className="container mt-5">
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur consectetur similique ex est molestias,
                    voluptatibus provident ea sapiente! Harum doloremque placeat
                    alias facere ad vitae omnis iure ab labore mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur consectetur similique ex est molestias,
                    voluptatibus provident ea sapiente! Harum doloremque placeat
                    alias facere ad vitae omnis iure ab labore mollitia. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur consectetur similique ex est molestias,
                    voluptatibus provident ea sapiente! Harum doloremque placeat
                    alias facere ad vitae omnis iure ab labore mollitia.
                  </p>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste voluptatum consequatur at dolores qui praesentium
                    soluta unde esse id, non porro, cum dignissimos corporis
                    velit sequi eius fugit nostrum hic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
