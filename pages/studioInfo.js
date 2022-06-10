import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
//TODO: Navbar currently not inside container
import Navbar from "../components/Navbar";

import studio from "../public/images/examples/AbigailGrey.jpg";
import blueFrame from "../public/images/examples/BlueFrame.jpg";

// padding on items

export default function Conservation() {
  return (
    <Container
      title="Archetype Fine Art Framing"
      description="Bespoke framing lorem ipsum dolar ipsum dolar lorem dolar ipsum dolar"
      className="z-50 absolute bg-green-200"
    >
      <section id="top-area" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <h3 className="title-font mb-5">Our Studio Practice</h3>
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={studio}
          />
          <div className=" lg:w-2/3 w-full mt-6">
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
        <div className="container p-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h3 className=" mb-2 text-gray-900">
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
          <div className="lg:w-1/2 sm:w-1/3 w-full order-last md:order-first overflow-hidden mt-6 sm:mt-0">
            <Image
              className="object-cover object-center w-full h-full rounded-lg"
              src={blueFrame}
              alt="stats"
            />
          </div>
        </div>
        <div className="container p-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap  mt-auto mb-auto lg:w-full sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h3 className=" mb-2 text-gray-900">
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
