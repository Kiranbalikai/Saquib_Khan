"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex flex-wrap justify-between items-center px-[clamp(1rem,5vw,6rem)] py-[clamp(1rem,2vw,2.5rem)] bg-black text-white  ${raleway.className}`}
    >
      {/* Left Section */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1
            className="font-light tracking-wide"
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 2.25rem)", // smaller and smoother
              lineHeight: "1.15",
            }}
          >
            SAQIB KHAN
            <span
              className="block font-thin tracking-widest"
              style={{
                fontSize: "clamp(0.65rem, 1.2vw, 1rem)", // smaller subtitle
                lineHeight: "1",
              }}
            >
              CINEMATOGRAPHER, COLORIST, PHOTOGRAPHER
            </span>
          </h1>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none ml-3"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-[clamp(0.5rem,2vw,3rem)] text-gray-100 uppercase font-light w-full sm:w-auto mt-4 sm:mt-0 transition-all duration-300 ease-in-out`}
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 1.1rem)",
        }}
      >
        {/* <Link
          href="/photography"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Photography
        </Link> */}
        <Link
          href="/colorgrading"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Colorgrading
        </Link>
        {/* <Link
          href="/cinematography"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Cinematography
        </Link> */}
        {/* <Link
          href="/blog"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Blogs
        </Link> */}
        <Link
          href="/contact"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
