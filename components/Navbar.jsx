import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const sidebarRef = useRef();

  const openMenu = () => {
    sidebarRef.current.style.transform = "translateX(-16rem)"; 
  };
  const closeMenu = () => {
    sidebarRef.current.style.transform = "translateX(0)"; 
  };

  return (
    <>
      <nav
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between text-black z-50"
        style={{
          backgroundImage: `url(${
            assets.header_bg_color.src || assets.header_bg_color
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
         <a href="/">
          <p className="w-28 cursor-pointer mr-14 rounded-md"><span className="text-3xl font-serif font-semibold">Umar.</span></p>
        </a> 

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href=""
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-800 rounded-full ml-4"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sidebarRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <Link onClick={closeMenu} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
