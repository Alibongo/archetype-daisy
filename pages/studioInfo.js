import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
//TODO: Navbar currently not inside container
import Navbar from "../components/Navbar";

import studio from "../public/images/examples/AbigailGrey.webp";
import blueFrame from "../public/images/examples/BlueFrame.webp";

// padding on items

export default function Conservation() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke framing lorem ipsum dolar ipsum dolar lorem dolar ipsum dolar"
      className="absolute z-50 bg-green-200"
    >
      <section id="top-area" className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <h3 className="mb-5 title-font">Our Studio Practice</h3>
          <Image
            className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
            alt="hero"
            src={studio}
          />
          <div className="w-full mt-6 lg:w-2/3">
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork. Meggings
              kinfolk echo park stumptown DIY, kale chips beard jianbing
              tousled. Chambray dreamcatcher trust fund, kitsch vice godard
              disrupt ramps hexagon mustache umami snackwave tilde chillwave
              ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk
              freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>
      <section id="conservation-content" className="text-gray-600 body-font">
        <div className="container flex flex-wrap p-5 mx-auto">
          <div className="flex flex-wrap content-start mt-auto mb-auto lg:w-1/2 sm:w-2/3 sm:pr-10">
            <div className="w-full px-4 mb-6 sm:p-4">
              <h3 className="mb-2 text-gray-900 ">
                Moon hashtag pop-up try-hard offal truffaut
              </h3>
              <div className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dignissimos vel ipsum nisi, temporibus iusto expedita libero
                aliquam. Rem asperiores architecto ex atque assumenda explicabo.
                Debitis itaque quia dignissimos placeat.
              </div>
            </div>
          </div>
          <div className="order-last w-full mt-6 overflow-hidden lg:w-1/2 sm:w-1/3 md:order-first sm:mt-0">
            <Image
              className="object-cover object-center w-full h-full rounded-lg"
              src={blueFrame}
              alt="stats"
            />
          </div>
        </div>
        <div className="container flex flex-wrap p-5 mx-auto">
          <div className="flex flex-wrap content-start mt-auto mb-auto lg:w-full sm:w-2/3 sm:pr-10">
            <div className="w-full px-4 mb-6 sm:p-4">
              <h3 className="mb-2 text-gray-900 ">
                Moon hashtag pop-up try-hard offal truffaut
              </h3>
              <div className="leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                quos facilis incidunt tenetur ducimus ipsam totam ullam
                consequuntur, commodi exercitationem, aut similique iste cum nam
                obcaecati fugiat harum deleniti eos!
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
