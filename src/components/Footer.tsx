"use client";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default function Footer() {
  return (
    <footer className={`bg-black w-full pt-6 text-center ${raleway.className}`}>
      <hr className="border-gray-900" />

      <p className="text-gray-300 text-xs sm:text-sm tracking-wide py-6">
        © 2025 Saqib Khan • sqb.artz@gmail.com
      </p>
    </footer>
  );
}
