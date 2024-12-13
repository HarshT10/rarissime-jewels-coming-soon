import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full pt-10 px-5 md:px-10 z-10">
      <div className="container mx-auto flex md:flex-row justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-[8rem] sm:w-[13rem]" alt="Logo" />
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center text-gray-700 rounded-lg focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-[#0ba4a2]"
              fill="none"
              stroke="#0ba4a2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#0ba4a2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8 links uppercase">
            <li>
              <Link
                to="/"
                className="text-[#0BA4A2] transition duration-300 link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-[#0BA4A2] transition duration-300 link"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>

            <div
              className={`fixed top-0 right-0 h-full bg-white shadow-md w-[70%] md:w-[40%] text-center z-50 lg:hidden transform transition-all duration-500 ease-in-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-8 right-5 text-gray-700 hover:bg-gray-100 p-2 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#0BA4A2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="flex flex-col mt-24 uppercase">
                <li className="menu-li">
                  <Link
                    to="/"
                    className="transition duration-300 text-xl md:text-2xl"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-li">
                  <Link
                    to="#about-us"
                    className="transition duration-300 text-xl md:text-2xl"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li className="menu-li-icon fixed bottom-0 bg-[#0ba4a2]">
                  <Link
                    target="blank"
                    to="https://www.instagram.com/rarissime_jewels/"
                    className="transition duration-300"
                    onClick={toggleMenu}
                  >
                    <InstagramIcon fontSize="medium" />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
