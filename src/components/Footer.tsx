"use client";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default function Footer() {
  return (
    <footer
      className={`bg-black w-full px-[clamp(1rem,5vw,6rem)] text-center ${raleway.className}`}
    >
      {/* BOTTOM DIVIDER */}
      <div className="border-t border-gray-800 mt-4">
        <p
          className="text-xs text-gray-500 py-4 text-left ml-auto
"
        >
          © 2025 Saqib Khan • All rights reserved
        </p>
      </div>
    </footer>
  );
}
