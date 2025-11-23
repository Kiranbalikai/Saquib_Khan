"use client";
import { Raleway } from "next/font/google";
import { Instagram, Youtube, Linkedin, Bold } from "lucide-react";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default function Footer() {
  return (
    <footer className={raleway.className}>
      <section className="bg-black text-white w-full flex items-center justify-center px-4 py-6">
        <div className="flex flex-col items-center w-full text-center">
          {/* IMAGE SECTION */}
          <div
            className="
              relative 
              w-full h-[300px]        /* MOBILE (original) */
              md:w-[50vw] md:h-[30vw] /* DESKTOP behavior */
              mx-auto overflow-hidden
            "
          >
            <Image
              src="/images/DSC03004.jpg"
              alt="Saqib Khan"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* CONTENT SECTION */}
          <div
            className="
              flex flex-col items-center 
              
              /* MOBILE: ORIGINAL FULL WIDTH */
              w-full px-4 pt-6 gap-4

              /* DESKTOP: MATCH IMAGE WIDTH */
              md:w-[50vw] 
              md:px-[3vw]
              md:pt-[2vw]
              md:gap-[1.5vw]
            "
          >
            <div
              className="flex flex-col 
                gap-2
                md:gap-[1vw]"
            >
              {/* MOBILE: NORMAL TEXT SIZE | DESKTOP: VW-BASED */}
              <a
                href="mailto:sqb.artz@gmail.com"
                className="
                  text-[1rem] 
                  md:text-[1vw]
                  text-white hover:text-gray-300
                "
              >
                sqb.artz@gmail.com
              </a>

              <p className="text-[1rem] md:text-[1vw] text-white">
                Phone: +91 9611485476
              </p>

              <p className="text-[0.9rem] md:text-[0.9vw] text-gray-400">
                Based in Hubli, India
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div
              className="
                flex items-center justify-center 
                gap-5        /* MOBILE */
                md:gap-[1.2vw]  /* DESKTOP */
              "
            >
              <a
                href="https://www.instagram.com/saqibsk2/"
                className="hover:text-gray-300"
              >
                <Instagram className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw]" />
              </a>

              <a
                href="https://youtube.com/@sqb_arts?si=H2XIc9_852Jpn_j_"
                className="hover:text-gray-300"
              >
                <Youtube className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw]" />
              </a>

              <a
                href="https://www.behance.net/sqb2023"
                className="hover:text-gray-300"
              >
                <Bold className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw]" />
              </a>

              <a
                href="https://www.linkedin.com/in/saqib-khan-pathan-38bb89329/"
                className="hover:text-gray-300"
              >
                <Linkedin className="w-6 h-6 md:w-[1.5vw] md:h-[1.5vw]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
