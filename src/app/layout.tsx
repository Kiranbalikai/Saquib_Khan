// app/layout.tsx

export const revalidate = 0;
export const dynamic = "force-dynamic";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox/LightboxContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "SAQIB KHAN",
  description:
    "A professional photographer, cinematographer, and visual artist specializing in cinematic visuals, portrait photography, and storytelling through motion.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <LightboxProvider>
          <Navbar />

          <main className="grow bg-black pt-20 lg:pt-[100px]">{children}</main>

          <Footer />
        </LightboxProvider>
      </body>
    </html>
  );
}
