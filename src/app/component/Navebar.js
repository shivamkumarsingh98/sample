"use client"; // Use client
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import React, { useEffect, useState } from "react"; // Import useEffect
import { ImMenu } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="bg-gradient-to-r from-pink-500  to-teal-400 w-full top-0  z-50 transition-transform ease-in-out duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between ">
        <div className="text-2xl font-extrabold text-gray-800 flex items-center space-x-2">
          <Image src="/Images.jpg" alt="Logo" width={50} height={50} />
          <Link href="/" className="text-xl text-white w-[200px]">
            Gruha Lakshmi
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow items-center justify-center space-x-8 ">
          <Link
            href="/"
            className="text-white hover:text-white transition-transform transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/Stateschems"
            className="text-white hover:text-white transition-transform transform hover:scale-105"
          >
            State Schemes
          </Link>
          <Link
            href="/Stateschems"
            className="text-white hover:text-white transition-transform transform hover:scale-105"
          >
            Central Schemes
          </Link>
          <Link
            href="/Stateschems"
            className="text-white hover:text-white transition-transform transform hover:scale-105"
          >
            Navigation
          </Link>
        </div>
        <div className="lg:hidden flex items-center justify-end w-full ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none w-[70px] flex"
          >
            <ImMenu className="w-5 h-5 " />
            Menu
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>

        <div
          className={`relative bg-teal-400 h-full flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          >
            <RiCloseFill className="w-8 h-8" />
          </button>

          <Link
            href="/"
            onClick={closeMenu}
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/Stateschems"
            onClick={closeMenu}
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            State Schemes
          </Link>
          <Link
            href="/Stateschems"
            onClick={closeMenu}
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Central Schemes
          </Link>
          <Link
            href="/Stateschems"
            onClick={closeMenu}
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Navigation
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
