"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrollingUp(currentY < lastY || currentY < 10); // show when close to top
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-black text-white 
        transition-transform duration-300
        ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}
        ${raleway.className}
      `}
    >
      <div className="flex flex-wrap justify-between items-center px-[clamp(1rem,5vw,6rem)] py-[clamp(1rem,1vw,1rem)]">
        {/* Logo + Name */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1
              className="font-light tracking-wide 
              text-[clamp(1.4rem,2vw,2.4rem)]  /* larger font on big screens */
            "
            >
              SAQIB KHAN
              <span
                className="block font-thin tracking-widest 
                text-[clamp(0.75rem,1vw,1.1rem)]
              "
              >
                CINEMATOGRAPHER, COLORIST, PHOTOGRAPHER
              </span>
            </h1>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-white ml-3 py-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`
            hidden sm:flex 
            gap-[clamp(2rem,3vw,4rem)] 
            uppercase font-light 
            text-gray-100
            text-[clamp(0.9rem,1vw,1.2rem)]
          `}
        >
          <Link href="/colorgrading" className="hover:text-gray-300">
            Colorgrading
          </Link>

          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            ${isOpen ? "flex" : "hidden"}
            sm:hidden flex-col w-full mt-4 
            gap-6 text-lg uppercase
          `}
        >
          <Link
            href="/colorgrading"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Colorgrading
          </Link>

          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
