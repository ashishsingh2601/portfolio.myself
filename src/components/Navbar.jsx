import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { examplePdf } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import {
  twitterSvg,
  mediumSvg,
  linkedInSvg,
  githubSvg,
  instagramSvg,
} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        ></Link>

        <div className="container  flex direction-row">
          <div className="item mx-3">
            <button>
              <a
                href="https://twitter.com/echtcipher"
                xlink:href="https://twitter.com/echtcipher"
              >
                <img
                  src={twitterSvg}
                  alt="twitter"
                  className="w-9 h-9 object-contain fill-white bg-color-white"
                />
              </a>
            </button>
          </div>
          <div className="item mx-3">
            <button>
              <a
                href="https://medium.com/@ashishere"
                xlink:href="https://medium.com/@ashishere"
              >
                <img
                  src={mediumSvg}
                  alt="medium"
                  className="w-9 h-9 object-contain fill-white bg-color-white"
                />
              </a>
            </button>
          </div>
          <div className="item mx-3">
            <button>
              <a
                href="https://www.linkedin.com/in/ashishh99/"
                xlink:href="https://www.linkedin.com/in/ashishh99/"
              >
                <img
                  src={linkedInSvg}
                  alt="linkedIn"
                  className="w-9 h-9 object-contain fill-white bg-color-white"
                />
              </a>
            </button>
          </div>
          <div className="item mx-3">
            <button>
              <a
                href="https://github.com/ashishsingh2601"
                xlink:href="https://github.com/ashishsingh2601"
              >
                <img
                  src={githubSvg}
                  alt="github"
                  className="w-9 h-9 object-contain fill-white bg-color-white"
                />
              </a>
            </button>
          </div>
          <div className="item mx-3">
            <button>
              <a
                href="https://www.instagram.com/iashishere/"
                xlink:href="https://www.instagram.com/iashishere/"
              >
                <img
                  src={instagramSvg}
                  alt="instagram"
                  className="w-9 h-9 object-contain fill-white bg-color-white"
                />
              </a>
            </button>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) =>
            nav.title === "Resume" ? (
              <li className="hover:text-white text-[18px] font-medium cursor-pointer text-red-600">
                <Link
                  to={examplePdf}
                  download="AshishSingh_Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </Link>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
