import React, { useState, useEffect } from "react";
import Link from "next/link";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 55) {
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
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="inline-block py-2 mr-4 leading-relaxed text-white uppercase whitespace-nowrap"
            >
              <div className="text-white title">Archetype</div>
            </Link>
            <button
              className="block py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
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
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="flex justify-center px-3 py-2 text-xs leading-snug text-white nav-item title hover:opacity-75">
                <Link href="#services">
                  <a className="ml-2">Services</a>
                </Link>
              </li>
              <li className="flex justify-center px-3 py-2 text-xs leading-snug text-white nav-item title hover:opacity-75">
                <Link href="#sustainability">
                  <a className="ml-2">Sustainability</a>
                </Link>
              </li>
              <li className="flex justify-center px-3 py-2 text-xs leading-snug text-white nav-item title hover:opacity-75">
                <Link href="#about">
                  <a className="ml-2">About</a>
                </Link>
              </li>
            </ul>
            {/* social content */}
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="justify-center nav-item">
                <a
                  className="flex justify-center px-3 py-2 text-xs text-white uppercase hover:opacity-75"
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
                  className="flex justify-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  href="#contact"
                >
                  <FontAwesomeIcon
                    className="icon fa-regular fa-xl"
                    icon={faEnvelope}
                    aria-hidden="true"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
