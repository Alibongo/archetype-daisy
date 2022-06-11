import React, { useState, useEffect } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <div className="title text-white">Archetype</div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon className="icon" icon={faBars} />
            </button>
          </div>
          <div
            className={
              " mt-5 md:mt-0 lg:flex flex-grow items-center" +
              (navbarOpen ? "flex flex-wrap" : " hidden")
            }
            id="example-navbar-danger"
          >
            {/* breadcrumbs */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item px-3 py-2 flex text-xs  title leading-snug justify-center text-white hover:opacity-75">
                <Link href="#services">
                  <a className="ml-2">Services</a>
                </Link>
              </li>
              <li className="nav-item px-3 py-2 flex text-xs title leading-snug justify-center text-white hover:opacity-75">
                <Link href="#sustainability">
                  <a className="ml-2">Sustainability</a>
                </Link>
              </li>
              <li className="nav-item px-3 py-2 flex text-xs title leading-snug justify-center text-white hover:opacity-75">
                <Link href="#about">
                  <a className="ml-2">About</a>
                </Link>
              </li>
            </ul>
            {/* social content */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item justify-center">
                <a
                  className="px-3 py-2 flex justify-center text-xs uppercase text-white hover:opacity-75"
                  href="https://www.instagram.com/archetypefineart/"
                >
                  <FontAwesomeIcon
                    className="brands fa-xl"
                    icon={faInstagram}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon className="brands fa-xl" icon={faTwitter} />
                </a>
              </li>
              {/* Theme Option */}
              {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Change this</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
