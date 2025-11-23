// app/layout.tsx

export const revalidate = 0; // 🔥 No caching anywhere
export const dynamic = "force-dynamic"; // 🔥 Force all routes to be dynamic

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox/LightboxContext";
import type { ReactNode } from "react";

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
