"use client";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Bold } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default function Footer() {
  return (
    <footer>
      <section
        className={`bg-black text-gray-300  w-full flex flex-col md:flex-row justify-between items-stretch px-[clamp(1rem,6vw,8rem)] py-4 md:py-10 ${raleway.className}`}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between md:w-1/2  ">
          {/* Top Section */}
          <div>
            <h2 className="text-yellow-400 text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase">
              CONTACT
            </h2>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col space-y-3 mt-auto mb-auto">
            {/* <p className="text-red-500 text-sm sm:text-base font-light">
              Cinematographer • Colorist • Filmmaker
            </p> */}
            <p className="text-[clamp(0.85rem,1vw,1rem)] leading-relaxed  ">
              Phone : <span className=" font-sans">+91 9611485476</span>
            </p>
            <p className="text-[clamp(0.8rem,1vw,1rem)] text-gray-400">
              Based in Hubli, India
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end gap-5 mt-8">
            <a
              href="https://www.instagram.com/saqibsk2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={18}
                className="hover:text-white transition-all"
              />
            </a>
            <a
              href="https://youtube.com/@sqb_arts?si=H2XIc9_852Jpn_j_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={18} className="hover:text-white transition-all" />
            </a>
            <a
              href="https://www.behance.net/sqb2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bold size={18} className="hover:text-white transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/saqib-khan-pathan-38bb89329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="hover:text-white transition-all" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}

        <div className="relative md:w-1/2 w-full flex justify-end items-start my-6 md:my-0 overflow-hidden">
          <Image
            src="/images/DSC03004.jpg"
            alt="Saqib Khan Portrait"
            width={1200} // huge resolution
            height={1800} // tall image
            className="object-cover w-full h-auto max-h-screen"
            priority
          />
        </div>
      </section>
      <div className="bg-black py-4 md:py-10 text-center text-red-500 text-xs md:text-sm font-light tracking-wider">
        Email: sqb.artz@gmail.com{" "}
      </div>
    </footer>
  );
}
